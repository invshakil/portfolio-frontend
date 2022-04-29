import React from "react";
import BlogData from "@/dummyData/blogData";
import {useStateValue} from "@/states/StateProvider";
import Link from 'next/link'

const MostPopularBlogs = () => {
    const [{theme}] = useStateValue()

    return (
        <div>
            {
                BlogData.map(blog => (
                    <Link href={{pathname: `/blog/${blog.slug}`}}>
                        <a>
                    <div
                        className={theme === 'dark' ? 'popularBlogs' : theme === 'light' && 'popularBlogsLight'}
                        key={blog.id}
                    >
                        <img src={blog.image} alt={blog.title}/>
                        <div className='popularBlogInfo'>
                            <h3>{blog.title}</h3>
                            <p>{blog.title}</p>
                        </div>
                    </div>
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}

export default MostPopularBlogs
