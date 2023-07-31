import * as React from 'react';
import MetaSection from "../../components/metaTags";
import Api from "../../lib/axios";
import GuestLayout from "../../components/Layouts/GuestLayout";
import {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import {GrCaretPrevious, GrCaretNext} from "react-icons/gr"

const Category = (props) => {

    const [data, setData] = useState([])
    const [currentItems, setCurrentItems] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const perPage = 4

    useEffect(() => {
        setData(props.articles)

        setItemOffset(0)
        Api.get(`/categories/${props.slug}`)
            .then(response => {
                setData(response.data.data)
            })
    }, [])

    useEffect(() => {
        const endOffset = itemOffset + perPage
        setCurrentItems(data?.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(data?.length / perPage))
    }, [itemOffset, perPage, data])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * perPage) % data?.length
        setItemOffset(newOffset)
    }

    return (
        <GuestLayout>
            <MetaSection
                title={`${props.slug} - Shakil's Blog`}
                description={'Articles'}
                keywords={props.tags.map(t => t.name)}
            />
            <div className='mx-1 lg:mx-14 min-h-screen'>
                <h2 className='text-3xl py-10 mb-1 text-center'>{(props.slug).toUpperCase()}</h2>
                <section className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
                    {
                        currentItems?.map((ar, index) => (
                            <article
                                className="flex flex-col dark:bg-gray-900 shadow shadow-xl dark:shadow-dark shadow-whiteLight">
                                <a rel="noopener noreferrer" href="#"
                                   aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt={ar.title}
                                         className="object-cover w-full h-52 dark:bg-gray-500"
                                         src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${ar.image}`}
                                    />
                                </a>
                                <div className="flex flex-col flex-1 p-6 bg-white dark:bg-dark">
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{ar.title}</h3>
                                    <div
                                        className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                        <span>{new Date(ar.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                        <span>{ar.hit_count} views</span>
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </section>
                {
                    data?.length > perPage &&
                    <div onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}>
                        <ReactPaginate activeClassName="activeCLass"
                                       previousClassName="prevClass"
                                       nextClassName="prevClass"
                                       className="paginate"
                                       breakLabel="..."
                                       onPageChange={handlePageClick}
                                       pageRangeDisplayed={12}
                                       pageCount={pageCount}
                                       renderOnZeroPageCount={null}
                                       nextLabel=<GrCaretNext size="22px"/>
                        previousLabel=<GrCaretPrevious size="22px"/>
                        />
                    </div>
                }
            </div>
        </GuestLayout>
    );
};

export default Category

export const getServerSideProps = async (context) => {
    let articles = []
    let tags = []
    await Api.get(`/categories/${context.params.slug.replace(/\-/g, ' ')}`)
        .then(response => {
            articles = response.data.data
        })

    const slug = context.params.slug

    await Api.get(`/allTags`)
        .then(response => {
            tags = response.data.data
        })

    return {
        props: {articles, slug, tags},
    }
}