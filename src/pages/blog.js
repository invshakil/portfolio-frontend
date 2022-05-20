import React, {useEffect, useState} from "react"
import GuestLayout from "@/components/Layouts/GuestLayout"
import {useStateValue} from "@/states/StateProvider"
import MostPopularBlogs from "@/components/mostPopularBlogs"
import Link from 'next/link'
import variants from "@/helpers/animation"
import {motion} from "framer-motion"
import Api from '@/lib/axios'
import qs from "qs"
import ReactPaginate from "react-paginate"
import {GrCaretPrevious, GrCaretNext} from "react-icons/gr"
import MetaSection from "@/components/metaTags"
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
    }, [])


    useEffect(() => {
        const endOffset = itemOffset + perPage
        setCurrentItems(data?.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(data?.length / perPage))
    }, [itemOffset, perPage, data])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * perPage) % data?.length
        setItemOffset(newOffset)
    }

    return (
        <GuestLayout>
            <MetaSection
                title={`My Blogs- ${process.env.NEXT_PUBLIC_APP_NAME}`}
                description={props.types.data.data.map(t => t.description)}
                keywords={props.types.data.data.map(t => t.name)}
            />
            <div className="blogContainer">
                <h1>BLOGS</h1>
                <div className="flexBlogPage">
                    <div className={theme === 'dark' ? 'blogs' : theme === 'light' && 'blogsLight'}>
                        <input
                            type="search"
                            placeholder="search..."
                            onChange={(e) => setFilter({search: e.target.value})}
                        />
                        <select
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
                        {
                            currentItems?.map(blog => (
                                <Link key={blog.id}
                                      href={{pathname: `/blog/${blog.title.replace(/\ /g, '-')}`}}>
                                    <a>
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            variants={variants.slideInLeft}
                                        >
                                            <div className="blog">
                                                <h2>{blog.title}</h2>
                                                <p>by {blog.author.name} </p>
                                                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${blog.image}`}
                                                     alt={blog.title}/>

                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    padding: '0 5px 0 5px'
                                                }}>
                                                    <button>{blog.categories[0].name}</button>
                                                    <button>read mode</button>
                                                </div>

                                            </div>
                                        </motion.div>
                                    </a>
                                </Link>
                            ))
                        }
                        {
                            data.length > perPage &&
                            <>
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
                            </>
                        }
                    </div>
                    <div className="mostRead">
                        <MostPopularBlogs data={props.popular}/>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}

export default Blog

export const getServerSideProps = async (context) => {

    let articles = []
    let popular = []
    let types = []
    let slug = context.query
    const query = qs.stringify(slug, {encode: false, skipNulls: true})

    await Api.get(`/articles?${query}`)
        .then(response => {
            articles = response.data.all.original.data.data
            popular = response.data.popular.original.data
        })
    await Api.get(`/categories`)
        .then(response => {
            types = response.data
        })

    return {
        props: {articles, types, popular, slug},
    }
}
