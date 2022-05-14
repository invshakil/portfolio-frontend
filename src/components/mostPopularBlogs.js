import React, {useEffect, useState} from "react"
import BlogData from "@/dummyData/blogData"
import {useStateValue} from "@/states/StateProvider"
import Link from 'next/link'
import variants from "@/helpers/animation"
import {motion} from "framer-motion"
import Api from "@/lib/axios"

const MostPopularBlogs = () => {
    const [{theme}] = useStateValue()
    const [data, setData] = useState([])

    useEffect(() => {
        Api.get(`/articles`)
            .then(response => {
                setData(response.data.popular.original.data)
                console.log('mp', response.data.popular.original.data)
            })

    }, [])
    return (
        <div>
            <h2>MOST POPULAR BLOGS</h2>

            {
                data.map(blog => (
                    <Link key={blog.id}
                          href={{pathname: `/blog/${blog.title.replace(/\ /g, '-')}`}}
                    >
                        <a>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={variants.slideInRight}
                            >
                                <div
                                    className={theme === 'dark' ? 'popularBlogs' : theme === 'light' && 'popularBlogsLight'}
                                >
                                    <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${blog.image}`}
                                         alt={blog.title}/>
                                    <div className="popularBlogInfo">
                                        <h3>{blog.title}</h3>
                                        <p>{blog.title}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}

export default MostPopularBlogs
