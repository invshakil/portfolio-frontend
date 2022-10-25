import Head from 'next/head'
import GuestLayout from "../components/Layouts/GuestLayout"
import {useStateValue} from "../states/StateProvider"
import variants from "../helpers/animation"
import {motion} from "framer-motion"
import React, {useEffect, useState} from "react"
import Api from "../lib/axios"
import MetaSection from "../components/metaTags"
import Introduction from "../components/introduction";
import Featured from "../components/featured";
import About from "../components/about";
import Experience from "../components/experience";
import Sidebar from "../components/sidebar";
import Blog from "../components/blog";
import qs from "qs";
import LinkedInCard from "../components/cards/linkedInCard";
import Skills from "../components/skills";
import Educations from "../components/educations";

const Home = (props) => {
    const [{theme}] = useStateValue()
    const [data, setData] = useState([])
    const [resumeLink, setResumeLink] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        setData(props.info)
        Api.get(`/about-me`)
            .then(response => {
                setData(response.data.data)
                let resume = response.data.data.filter(d => d.key === 'resume_link' && d.value)
                setResumeLink(resume[0].value)
                let bd = response.data.data.filter(d => d.key === 'd_o_b' && d.value)
                let bDay = getAge(bd[0].value)
                setDob(bDay)
                let mail = response.data.data.filter(d => d.key === 'email' && d.value)
                setEmail(mail[0].value)
            })
    }, [])

    const getAge = (bd) => {
        let today = new Date()
        let birthDate = new Date(bd)
        let age = today.getFullYear() - birthDate.getFullYear()
        let m = today.getMonth() - birthDate.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }
        return age
    }

    return (
        <GuestLayout>
            {/*SEO*/}
            <MetaSection
                title={`Introduction - ${process.env.NEXT_PUBLIC_APP_NAME}`}
                description={props.aboutMe[0].value}
                keywords={props.tags.map(t => t.name)}
            />
            {/*SEO*/}
            <div
                className={`mx-10 mb-5 min-h-screen lg:flex lg:justify-between sm:grid sm:grid-cols-1 ${theme === 'dark' ? ' opacity-80' : 'opacity-90'}`}>
                {/*Feed*/}
                <div className='rounded-xl mr-2 pb-8 lg:w-8/12 sm:w-screen'>
                    <Introduction theme={theme} data={data} img={props.img[0].value} email={email}/>
                    <About theme={theme} data={data}/>
                    <Featured
                        theme={theme}
                        featured={props.featured.slice(0, Number(props.featuredCount[0].value))}
                    />
                    <Experience theme={theme} workplaces={props.workplaces.slice(0, 3)}/>
                    <Educations theme={theme}/>
                    {/*<Skills theme={theme} skills={props.skills[0]?.description}/>*/}
                </div>
                {/*Feed*/}
                {/*Sidebar*/}
                <div
                    className={`ml-2 rounded-xl pb-8 pt-3 px-8 lg:w-4/12 sm:w-screen ${theme === 'light' ? 'bg-white' : 'bg-dark'}`}>
                    <Blog articles={props.articles} types={props.types} popular={props.popular}/>
                    {/*<LinkedInCard/>*/}
                </div>
                {/*Sidebar*/}
            </div>
        </GuestLayout>
    )
}
export default Home

export const getServerSideProps = async () => {

    let info = []
    let tags = []
    let img = ''
    let aboutMe = ''
    let featuredCount = ''
    let articles = []
    let popular = []
    let types = []
    let skills = []
    let featured = []
    let workplaces = []

    await Api.get(`/about-me`)
        .then(response => {
            info = response.data.data
            img = response.data.data.filter(d => d.key === 'user_image' && d.value)
            aboutMe = response.data.data.filter(d => d.key === 'about_me' && d.value)
            featuredCount = response.data.data.filter(d => d.key === 'featuredCount' && d.value)
        })

    await Api.get(`/articles`)
        .then(response => {
            articles = response.data.all.original.data.data
            popular = response.data.popular.original.data
        })
    await Api.get(`/categories`)
        .then(response => {
            types = response.data
        })

    await Api.get(`/allTags`)
        .then(response => {
            tags = response.data.data
        })
    await Api.get(`/skills`)
        .then(response => {
            skills = response.data.data.data
        })
    await Api.get(`/workplaces`)
        .then(response => {
            workplaces = response.data.data.data
        })
    await Api.get(`/fetch-all-published-news`)
        .then(response => {
            featured = response.data.data.news
        })

    return {
        props: {info, img, aboutMe, tags, articles, types, popular, skills, workplaces, featured, featuredCount},
    }
}


