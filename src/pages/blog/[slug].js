import React from "react";
import {useRouter} from 'next/router'
import GuestLayout from "@/components/Layouts/GuestLayout";
import MostPopularBlogs from "@/components/mostPopularBlogs";
import {useStateValue} from "@/states/StateProvider";
import Head from "next/head";
import {motion} from "framer-motion"
import variants from "@/helpers/animation";

const BlogDetails = () => {
    const router = useRouter()
    const slug = router.query.slug
    //send an api request with the slug
    console.log(slug);
    const [{theme}] = useStateValue()

    return (
        <GuestLayout>
            <Head>
                <title>{slug.replace(/\-/g, ' ')}</title>
                <meta name="description"
                      content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"/>
                <meta property="og:title" content={slug.replace(/\-/g, ' ')}/>
                <meta property="og:description"
                      content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"/>
                <meta property="og:url" content="https://snipcart.com/"/>
                <meta property="og:type" content="website"/>
            </Head>
            <div className='singleBlogContainer'>
                <div className='singleBlogFlex'>
                    <div className={theme==='dark'?'blogEntry':theme==='light'&&'blogEntryLight'}>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants.slideInLeft}
                        >
                        <div className='blogTitle'>
                            <h2>{slug.replace(/\-/g, ' ')} </h2>
                        </div>
                        </motion.div>
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
