import React, {useEffect, useState} from "react"
import {useStateValue} from "../states/StateProvider"
import Link from 'next/link'
import variants from "../helpers/animation"
import Api from "../lib/axios"

const MostPopularBlogs = ({data}) => {

    const [{theme}] = useStateValue()

    return (
        <section>
            <h1 className='text-2xl'>MOST POPULAR BLOGS</h1>

            {
                data?.map(blog => (
                    <Link key={blog.id}
                          href={{pathname: `/${blog.title.replace(/\ /g, '-')}`}}
                    >
                        <a>
                            <article
                                className={theme === 'dark' ? 'popularBlogs' : theme === 'light' && 'popularBlogsLight'}
                            >
                                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${blog.image}`}
                                     alt={blog.title} style={{width:'100px', height:'100px', objectFit:'contain'}}/>
                                <div className="popularBlogInfo">
                                    <h2 style={{fontSize:'21px'}} className='mb-2'>{blog.title}</h2>
                                    {/*<p className='text-xs'>{blog.meta_description.slice(0, 90)}...</p>*/}
                                </div>
                            </article>
                        </a>
                    </Link>
                ))
            }
        </section>
    )
}

export default MostPopularBlogs
