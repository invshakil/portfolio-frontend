import React, {useEffect, useState} from "react"
import {useRouter} from 'next/router'
import GuestLayout from "@/components/Layouts/GuestLayout";
import MostPopularBlogs from "@/components/mostPopularBlogs";
import {useStateValue} from "@/states/StateProvider";
import Head from "next/head";
import {motion} from "framer-motion"
import variants from "@/helpers/animation";
import {DiscussionEmbed} from "disqus-react"
import Api from "@/lib/axios"
import axios from "axios"

const BlogDetails = (props) => {
    const [slug,setSlug]=useState('')
    const [data,setData]=useState([])
    const router=useRouter()
    console.log('art', props.articles)
    useEffect(() => {
        setData(props.articles)
    }, [])

    // useEffect(() => {
    //     // console.log(router.query.slug)
    //     setSlug(window.location.pathname.split('/').pop())
    //     const Slug=window.location.pathname.split('/').pop()
    //     Api.get(`/articles/show/${Slug.replace(/\-/g, ' ')}`)
    //         .then(response =>{
    //             setData(response.data)
    //         })
    // }, [router.query.slug])

    // const disqusShortname = "portfolio-5auSOa4qCa"
    // const disqusConfig = {
    //     url: `https:// portfolio-5auSOa4qCa.disqus.com/${slug}`,
    //     identifier: slug, // Single post id
    //     title: slug // Single post title
    // }
    const [{theme}] = useStateValue()

    return (
        <GuestLayout>
            <Head>
                {/*<title>{slug.replace(/\-/g, ' ')}</title>*/}
                {/*<meta name="description"*/}
                {/*      content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"/>*/}
                {/*<meta property="og:title" content={slug.replace(/\-/g, ' ')}/>*/}
                {/*<meta property="og:description"*/}
                {/*      content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"/>*/}
                {/*<meta property="og:url" content="https://snipcart.com/"/>*/}
                {/*<meta property="og:type" content="website"/>*/}
            </Head>
            <div className='singleBlogContainer'>
                <div className='singleBlogFlex'>
                    <div className={theme === 'dark' ? 'blogEntry' : theme === 'light' && 'blogEntryLight'}>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants.slideInLeft}
                        >
                            <div className='blogTitle'>
                                <h2>{props.articles?.title} </h2>
                            </div>
                            <div className='blogBody'>
                                {props.articles?.description}
                                <div className='comments'>
                                    {/*<DiscussionEmbed*/}
                                    {/*    shortname={disqusShortname}*/}
                                    {/*    config={disqusConfig}*/}
                                    {/*/>*/}
                                </div>
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

export const getServerSideProps= async (context)=>{

    const res = await fetch(`http://localhost:8000/api/v1/articles/show/${context.params.slug.replace(/\-/g, ' ')}`)
    const articles = await res.json()
    return{
        props: {articles},
    }
}
