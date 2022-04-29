import React from "react";
import {useRouter} from 'next/router'
import GuestLayout from "@/components/Layouts/GuestLayout";
import MostPopularBlogs from "@/components/mostPopularBlogs";
import {useStateValue} from "@/states/StateProvider";

const BlogDetails = () => {
    const router = useRouter()
    const slug = router.query.slug
    //send an api request with the slug
    console.log(slug);
    const [{theme}] = useStateValue()

    return (
        <GuestLayout>
            <div className='singleBlogContainer'>
                <div className='singleBlogFlex'>
                    <div className={theme==='dark'?'blogEntry':theme==='light'&&'blogEntryLight'}>
                        <div className='blogTitle'>
                            <h2>{slug.replace(/\-/g, ' ')} </h2>
                        </div>
                    </div>
                    <div className='mostRead'>
                        <MostPopularBlogs/>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}

export default BlogDetails
