import React, {useEffect} from "react"
import GuestLayout from "../components/Layouts/GuestLayout"
import MostPopularBlogs from "../components/mostPopularBlogs"
import {useStateValue} from "../states/StateProvider"
import {DiscussionEmbed} from "disqus-react"
import Api from "../lib/axios"
import {FaUserAlt} from "react-icons/fa"
import {MdDateRange} from "react-icons/md"
import {GiBottomRight3DArrow} from "react-icons/gi"
import {BsEyeFill} from "react-icons/bs"
import {AiFillTags} from "react-icons/ai"
import Link from "next/link"
import MetaSection from "../components/metaTags";
import {BiArrowBack} from "react-icons/bi";
import {useRouter} from 'next/router';
import hljs from 'highlight.js';

const BlogDetails = (props) => {

    const [{theme}] = useStateValue()
    const router = useRouter();

    useEffect(() => {
        // Find all code blocks and apply syntax highlighting
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }, []);

    useEffect(() => {
        if (!props.article) {
            router.push('/404');
        }
    }, []);

    const disqusShortname = "portfolio-5auSOa4qCa"
    const disqusConfig = {
        url: `https://portfolio-5auSOa4qCa.disqus.com/${props.slug}`,
        identifier: props.article?.id,
        title: props.slug,
        theme: theme,
    }
    const color = theme === 'dark' ? '#b8c1d2' : '#282828'
    const size = '18px'

    return (
        <GuestLayout>
            <MetaSection
                title={`${props.article?.title} - Shakil's Blog`}
                description={props.article?.meta_description}
                keywords={props.article?.tags?.map(t => t.name)}
            />
            <div className="singleBlogContainer">
                <Link href={'/'}>
                    <span className={'cursor-pointer'}><BiArrowBack size='2rem'/></span>
                </Link>
                <div className="singleBlogFlex">
                    <div className={theme === 'dark' ? 'blogEntry'
                        : theme === 'light' && 'blogEntryLight'}
                    >
                        <div className="blogTitle">
                            <h2>{props.article?.title} </h2>
                        </div>
                        <div className="blogBody">
                            <h2 className="spanIcon">
                                <GiBottomRight3DArrow style={{marginRight: '10px'}}
                                                      color={color} size={size}
                                />
                                {
                                    props.article?.categories?.map(category => (
                                        <div key={category.id}>
                                            <a>
                                                <span className="border px-4 text-xs">
                                                    <Link key={category.id}
                                                          href={{pathname: `category/${category.slug}`}}>
                                                        {category.name}
                                                    </Link>
                                                </span>
                                            </a>
                                        </div>
                                    ))
                                }
                            </h2>

                            <h2 className="spanIcon">
                                <MdDateRange style={{marginRight: '10px'}}
                                             color={color} size={size}
                                />
                                <span className="date">
                                        {new Date(props.article?.author?.created_at).toDateString()}
                                    </span>
                            </h2>

                            <h2 className="spanIcon">
                                <FaUserAlt style={{marginRight: '10px'}} color={color}
                                           size={size}
                                />
                                <span> {props.article?.author?.name}</span>
                            </h2>
                            <br/>
                            <section
                                className="blogDescription"
                                dangerouslySetInnerHTML={{__html: props.article?.description}}
                            />
                            <br/>
                            <h2 className="spanIcon">
                                <BsEyeFill style={{marginRight: '10px'}} color={color}
                                           size={size}
                                />
                                <span> {props.article.hit_count} Views</span>
                            </h2>
                            <div className="spanIcon">
                                <AiFillTags color={color} size={size}/>
                                {
                                    props.article.tags?.map(tag => (
                                        <ul key={tag.id}>
                                            <li className="border px-3"> {tag.name}</li>
                                        </ul>
                                    ))
                                }
                            </div>
                        </div>
                        {/*</motion.div>*/}
                    </div>
                    <div className="mostRead">
                        <MostPopularBlogs data={props.popular}/>
                    </div>
                </div>
            </div>
            <div className="mx-12 p-10 comments" style={{background:"white"}}>
                <DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                />
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