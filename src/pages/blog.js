import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import BlogData from "@/dummyData/blogData";
import {useStateValue} from "@/states/StateProvider";

const Blog = () => {
    const [{theme}]=useStateValue()

    return (
        <GuestLayout>
            <div className='blogContainer'>
                <h1>BLOGS</h1>

                <div className='flexBlogPage'>
                    <div className={theme==='dark'?'blogs':theme==='light'&&'blogsLight'}>
                        <input type='search' placeholder='search...'/>
                        <select>
                            <option value='type1'>type1</option>
                            <option value='type2'>type2</option>
                            <option value='type3'>type3</option>
                        </select>

                        {
                            BlogData.map(blog=>(
                                <div className='blog' key={blog.id}>
                                    <h2>{blog.title}</h2>
                                    <img src={blog.image} alt={blog.title}/>
                                    <div style={{display:'flex', justifyContent:'space-between', padding:'0 5px 0 5px'}}>
                                        <button>{blog.category}</button>
                                        <button>read mode</button>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div className='mostRead'>
                        <h2>MOST POPULAR BLOGS</h2>
                    </div>
                </div>

            </div>
        </GuestLayout>
    )
}

export default Blog
