import React, {useState, useEffect} from "react"
import Head from "next/head"
import Api from "@/lib/axios"

const MetaSection = ({title, keywords, description}) => {

    const [aboutMe, setAboutMe] = useState()
    const [tags, setTags] = useState([])

    useEffect(async () => {
        Api.get(`/about-me`)
            .then(response => {
                let filter = response.data.data.filter(d => d.key === 'about_me' && d.value)
                setAboutMe(filter[0].value)
            })

        Api.get(`/allTags`)
            .then(response => {
                setTags(response.data.data)
            })
    }, [])


    return (
        <Head>
            <title>{title}</title>

            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>

            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:keywords" content={keywords}/>
            <meta property="og:url" content={process.env.NEXT_PUBLIC_URL}/>
            <meta property="og:type" content="website"/>

            <meta name="csrf-token" content="{{ csrf_token() }}"/>
        </Head>
    )
}

export default MetaSection