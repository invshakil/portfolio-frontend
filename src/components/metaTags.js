import React from "react"
import Head from "next/head"

const MetaSection = ({title, keywords, description}) => {

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