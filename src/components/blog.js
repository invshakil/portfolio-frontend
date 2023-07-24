import React, {useEffect, useState} from "react"
import {useStateValue} from "../states/StateProvider"
import MostPopularBlogs from "./mostPopularBlogs"
import Link from 'next/link'
import variants from "../helpers/animation"
import Api from '../lib/axios'
import qs from "qs"
import ReactPaginate from "react-paginate"
import {GrCaretPrevious, GrCaretNext} from "react-icons/gr"
import {useRouter} from "next/router"

const Blog = (props) => {

    const router = useRouter()
    const [{theme}] = useStateValue()
    const [data, setData] = useState([])
    const [currentItems, setCurrentItems] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const perPage = 6
    const [filter, setFilter] = useState(
        {
            search: null,
            category: null,
            is_published: null
        })

    const query = qs.stringify(filter, {encode: false, skipNulls: true})

    useEffect(() => {
        setData(props.articles)
        filter.category &&
        setItemOffset(0)
        Api.get(`/articles?${query}`)
            .then(response => {
                setData(response.data.all.original.data.data)
            })
    }, [filter])

    useEffect(() => {
        router.query && setFilter({category: router.query.category})
        console.log('types', props.articles)
    }, [props.articles])


    useEffect(() => {
        const endOffset = itemOffset + perPage
        setCurrentItems(data?.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(data?.length / perPage))
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [itemOffset, perPage, data])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * perPage) % data?.length
        setItemOffset(newOffset)
    }

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [pageCount]);


    return (
        <div>
            <h1 className='text-2xl py-5 text-tomato'>BLOGS</h1>
            <div>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-1'>
                    <input
                        type="search"
                        className={`lg:mr-1 text-tomato bg-transparent border ${theme === 'light' ? 'border-offWhite' : 'border-bg-custom-dark'}`}
                        placeholder="search..."
                        onChange={(e) => setFilter({search: e.target.value})}
                    />
                    <select
                        className={`text-tomato bg-transparent border ${theme === 'light' ? 'border-offWhite' : 'border-bg-custom-dark'}`}
                        onChange={(e) => e.target.value === '0' ? setFilter({category: null}) : setFilter({category: e.target.value})}
                    >
                        {
                            router.query.category ?
                                <>
                                    <option value={router.query.category}>
                                        {router.query.category}
                                    </option>
                                    <option value="0">All</option>
                                </>
                                :
                                <option value="0">All</option>
                        }
                        {
                            props.types?.data.data.map(type => (
                                type.name !== router.query.category &&
                                <option key={type.id} value={type.name}>
                                    {type.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                {
                    currentItems?.map(blog => (
                        <Link key={blog.id}
                              href={{pathname: `/blog/${blog.title.replace(/\ /g, '-')}`}}>
                            <a>
                                <div
                                    className={`my-3 p-5 rounded-sm border ${theme === 'light' ? 'border-offWhite' : 'border-bg-custom-dark'}`}>
                                    <h2 className='text-lightGreen text-xl font-bold'>{blog.title}</h2>
                                    <p className='text-tomato font-extralight  py-1'>by {blog.author.name} </p>
                                    <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${blog.image}`}
                                         alt={blog.title}/>
                                    <button className='text-tomato'>{blog.categories[0]?.name}</button>
                                </div>
                            </a>
                        </Link>
                    ))
                }
                {
                    data?.length > perPage &&
                    <div>
                        <ReactPaginate activeClassName="activeCLass"
                                       previousClassName="prevClass"
                                       nextClassName="prevClass"
                                       className="paginate"
                                       breakLabel="..."
                                       onPageChange={handlePageClick}
                                       pageRangeDisplayed={10}
                                       pageCount={pageCount}
                                       renderOnZeroPageCount={null}
                                       nextLabel=<GrCaretNext size="22px"/>
                        previousLabel=<GrCaretPrevious size="22px"/>
                        />
                    </div>
                }
            </div>
            <div>
                {/*<MostPopularBlogs data={props.popular}/>*/}
            </div>
        </div>
    )
}

export default Blog
