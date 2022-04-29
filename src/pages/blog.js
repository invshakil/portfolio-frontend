import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import BlogData from "@/dummyData/blogData";
import {useStateValue} from "@/states/StateProvider";
import MostPopularBlogs from "@/components/mostPopularBlogs";
import Link from 'next/link'

const Blog = () => {
    const [{theme}] = useStateValue()

    return (
        <GuestLayout>
            <div className='blogContainer'>
                <h1>BLOGS</h1>

                <div className='flexBlogPage'>
                    <div className={theme === 'dark' ? 'blogs' : theme === 'light' && 'blogsLight'}>
                        <input type='search' placeholder='search...'/>
                        <select>
                            <option value='type1'>type1</option>
                            <option value='type2'>type2</option>
                            <option value='type3'>type3</option>
                        </select>

                        {
                            BlogData.map(blog => (
                                <Link href={{pathname: `/blog/${blog.slug}`}}>
                                    <a>
                                        <div className='blog' key={blog.id}>
                                            <h2>{blog.title}</h2>
                                            <p>by Saif Shakil </p>
                                            <img src={blog.image} alt={blog.title}/>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                padding: '0 5px 0 5px'
                                            }}>
                                                <button>{blog.category}</button>
                                                <button>read mode</button>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            ))
                        }

                    </div>
                    <div className='mostRead'>
                        <h2>MOST POPULAR BLOGS</h2>
                        <MostPopularBlogs/>
                    </div>
                </div>

            </div>
        </GuestLayout>
    )
}

export default Blog
