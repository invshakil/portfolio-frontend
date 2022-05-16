import React, {useEffect, useState} from "react"
import {useRouter} from 'next/router'
import GuestLayout from "@/components/Layouts/GuestLayout"
import MostPopularBlogs from "@/components/mostPopularBlogs"
import {useStateValue} from "@/states/StateProvider"
import Head from "next/head"
import {motion} from "framer-motion"
import variants from "@/helpers/animation"
import {DiscussionEmbed} from "disqus-react"
import Api from "@/lib/axios"

const BlogDetails = (props) => {

    useEffect(() => {
        console.log('slug', props.slug)
    }, [props.slug])

    const disqusShortname = "portfolio-5auSOa4qCa"
    const disqusConfig = {
        url: `https:// portfolio-5auSOa4qCa.disqus.com/${props.slug}`,
        identifier: props.article?.id, // Single post id
        title: props.slug // Single post title
    }
    const [{theme}] = useStateValue()

    return (
        <GuestLayout>
            <Head>
                <title>{props.article?.title}</title>
                <meta name="description"
                      content={props.article?.meta_description}/>
                <meta property="og:title" content={props.slug?.replace(/\-/g, ' ')}/>
                <meta property="og:description"
                      content={props.article?.meta_description}/>
                <meta property="og:url" content={process.env.NEXT_PUBLIC_URL}/>
                <meta property="og:type" content="website"/>
            </Head>
            <div className="singleBlogContainer">
                <div className="singleBlogFlex">
                    <div className={theme === 'dark' ? 'blogEntry' : theme === 'light' && 'blogEntryLight'}>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants.slideInLeft}
                        >
                            <div className="blogTitle">
                                <h2>{props.article?.title} </h2>
                            </div>
                            <div className="blogBody">
                                {/*{props.article?.description}*/}
                                <section
                                    className="blogDescription"
                                    dangerouslySetInnerHTML={{ __html: props.article?.description }}
                                />
                                <div className="comments">
                                    <DiscussionEmbed
                                        shortname={disqusShortname}
                                        config={disqusConfig}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="mostRead">
                        <MostPopularBlogs data={props.popular}/>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}
export default BlogDetails

export const getServerSideProps = async (context) => {
    let article = {}
    await Api.get(`/articles/show/${context.params.slug.replace(/\-/g, ' ')}`)
        .then(response => {
            article = response.data
        })

    let popular = []
    await Api.get(`/articles`)
        .then(response => {
            popular = response.data.popular.original.data
        })
    const slug = context.params.slug

    return {
        props: {article, slug, popular},
    }
}
//
// export const getStaticPaths = async () => {
//
//     let articles = []
//     await Api.get(`/articles`)
//         .then(response => {
//             articles = response.data
//         })
//     const ids = articles.map((article) => article.title.replace(/\ /g, ''))
//     const paths = ids.map((id) => ({ params: { id: id.toString() } }))
//     return {
//         paths,
//         fallback: false,
//     }
// }
