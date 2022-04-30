import React from "react";
import BlogData from "@/dummyData/blogData";
import {useStateValue} from "@/states/StateProvider";
import Link from 'next/link'
import variants from "@/helpers/animation";
import {motion} from "framer-motion"

const MostPopularBlogs = () => {
    const [{theme}] = useStateValue()

    return (
        <div>
            <h2>MOST POPULAR BLOGS</h2>

            {
                BlogData.map(blog => (
                    <Link href={{pathname: `/blog/${blog.slug}`}}>
                        <a>
                            <motion.div
                                key={blog.id}
                                initial="hidden"
                                animate="visible"
                                variants={variants.slideInRight}
                            >
                                <div
                                    className={theme === 'dark' ? 'popularBlogs' : theme === 'light' && 'popularBlogsLight'}
                                >
                                    <img src={blog.image} alt={blog.title}/>
                                    <div className='popularBlogInfo'>
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
