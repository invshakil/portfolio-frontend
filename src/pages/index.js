import Head from 'next/head'
import GuestLayout from "@/components/Layouts/GuestLayout"
import {useStateValue} from "@/states/StateProvider"
import variants from "@/helpers/animation"
import {motion} from "framer-motion"
import React, {useEffect, useState} from "react"
import Api from "@/lib/axios"
import MetaSection from "@/components/metaTags"

const Home = (props) => {
    const [{theme}] = useStateValue()
    const [data, setData] = useState([])
    const [resumeLink, setResumeLink] = useState('')
    const [dob, setDob] = useState('')

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
            <MetaSection
                title={`Introduction- ${process.env.NEXT_PUBLIC_APP_NAME}`}
                description={props.aboutMe[0].value}
                keywords={props.tags.map(t => t.name)}
            />
            <div className="homeContainer">
                <div className="profile">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants.crossFromRight}
                    >
                        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${props.img[0].value}`} width="100%"
                             alt="profile photo"/>
                        <br/>
                        <br/>
                        <a href={resumeLink} target="_blank">RESUME</a>
                    </motion.div>
                </div>
                <div className={(theme === 'light') ? 'infoLight' : (theme === 'dark') && 'info'}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants.crossFromLeft}
                    >
                        <h1>{data?.map(d => d.key === 'name' && d.value)}</h1>
                        <hr/>
                        <h2>{data?.map(d => d.key === 'designation' && d.value)}</h2>
                        <p>
                            {data?.map(d => d.key === 'about_me' && d.value)}
                        </p>
                        <br/>
                        <h3>SUMMERY</h3>
                        <div className={theme === 'dark' ? 'summery' : theme === 'light' && 'summeryLight'}>
                            <div>
                                <h4>AGE: </h4>
                                <h4>NATIONALITY: </h4>
                                <h4>ADDRESS:</h4>
                                <h4>PHONE:</h4>
                                <h4>BLOOD GROUP:</h4>
                                <h4>EMAIL: </h4>
                                <h4>WEBSITE:</h4>
                            </div>

                            <div>
                                <h5>{dob}</h5>
                                <h5>{data?.map(d => d.key === 'nationality' && d.value)}</h5>
                                <h5> {data?.map(d => d.key === 'address' && d.value)} </h5>
                                <h5> {data?.map(d => d.key === 'phone' && d.value)} </h5>
                                <h5>{data?.map(d => d.key === 'blood_group' && d.value)}</h5>
                                <h5> {data?.map(d => d.key === 'email' && d.value)} </h5>
                                <h5>{data?.map(d => d.key === 'website' && d.value)} </h5>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <br/>
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

    await Api.get(`/about-me`)
        .then(response => {
            info = response.data.data
            img = response.data.data.filter(d => d.key === 'user_image' && d.value)
            aboutMe = response.data.data.filter(d => d.key === 'about_me' && d.value)
        })

    await Api.get(`/allTags`)
        .then(response => {
            tags = response.data.data
        })

    return {
        props: {info, img, aboutMe, tags},
    }
}


