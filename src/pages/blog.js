import React, {useEffect, useState} from "react"
import GuestLayout from "@/components/Layouts/GuestLayout"
import {useStateValue} from "@/states/StateProvider"
import MostPopularBlogs from "@/components/mostPopularBlogs"
import Link from 'next/link'
import variants from "@/helpers/animation"
import {motion} from "framer-motion"
import Api from '@/lib/axios'
import qs from "qs"

const Blog = (props) => {
    const [{theme}] = useStateValue()
    const [data, setData] = useState([])
    const [types, setType] = useState([])
    const [filter, setFilter] = useState(
        {
            search: null,
            category: null,
            is_published: null
        })


    const query = qs.stringify(filter, {encode: false, skipNulls: true})

    useEffect(() => {
        setData(props?.articles)

        filter &&
        Api.get(`/articles?${query}`)
            .then(response => {
                setData(response.data.all.original.data.data)
            })
    }, [filter])

    return (
        <GuestLayout>
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
                            <option value="0">All</option>
                            {
                                props.types?.data.data.map(type => (
                                    <option key={type.id} value={type.id}>{type.name}</option>
                                ))
                            }
                        </select>
                        {
                            data?.map(blog => (
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

                    </div>
                    <div className="mostRead">
                        <MostPopularBlogs/>
                    </div>
                </div>

            </div>
        </GuestLayout>
    )
}

export default Blog

export const getServerSideProps = async () => {

    let articles = []
    Api.get(`/articles`)
        .then(response => {
            articles = response.data.all.original.data.data
        })

    const res2 = await fetch(`http://localhost:8000/api/v1/categories`)
    const types = await res2.json()

    return {
        props: {articles, types},
    }
}
