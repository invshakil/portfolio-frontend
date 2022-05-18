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
import {FaUserAlt} from "react-icons/fa"
import {MdDateRange} from "react-icons/md"
import {GiBottomRight3DArrow} from "react-icons/gi"
import {BsEyeFill} from "react-icons/bs"
import {AiFillTags} from "react-icons/ai"

const BlogDetails = (props) => {

    const [{theme}] = useStateValue()

    const disqusShortname = "portfolio-5auSOa4qCa"
    const disqusConfig = {
        url: `https:// portfolio-5auSOa4qCa.disqus.com/${props.slug}`,
        identifier: props.article?.id, // Single post id
        title: props.slug // Single post title
    }
    const color = theme==='dark'?'#b8c1d2':'#172042'
    const size='18px'

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
                                <h2 className="spanIcon">
                                    <GiBottomRight3DArrow color={color} size={size}/>
                                    {
                                        props.article.categories.map(category  => (
                                            <div key={category.id}>
                                                <span className='border px-4 text-xs'> {category.name}</span>
                                            </div>
                                        ))
                                    }
                                </h2>

                                <h2 className="spanIcon"><MdDateRange color={color} size={size}/>
                                    <span className='date'> {new Date(props.article.author.created_at).toDateString()}</span>
                                </h2>

                                <h2 className="spanIcon"><FaUserAlt color={color} size={size}/>
                                    <span> {props.article.author.name}</span>
                                </h2>
                                <br/>
                                <section
                                    className="blogDescription"
                                    dangerouslySetInnerHTML={{__html: props.article?.description}}
                                />
                                <br/>
                                <h2 className="spanIcon"><BsEyeFill color={color} size={size}/>
                                    <span> {props.article.hit_count} Views</span>
                                </h2>
                                <div className="spanIcon">
                                    <AiFillTags color={color} size={size}/>
                                    {
                                        props.article.tags.map(tag => (
                                            <ul key={tag.id}>
                                                <li className='border px-3'> {tag.name}</li>
                                            </ul>
                                        ))
                                    }
                                </div>

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
