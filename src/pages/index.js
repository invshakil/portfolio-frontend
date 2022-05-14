import Head from 'next/head'
import GuestLayout from "@/components/Layouts/GuestLayout"
import {useStateValue} from "@/states/StateProvider"
import variants from "@/helpers/animation"
import {motion} from "framer-motion"
import {useEffect, useState} from "react"
import Api from "@/lib/axios"

export default function Home() {
    const [{theme}] = useStateValue()
    const [data, setData] = useState([])
    const [resumeLink, setResumeLink] = useState('')

    useEffect(() => {
        Api.get(`/about-me`)
            .then(response => {
                setData(response.data.data)
                let resume= response.data.data.filter(d=>d.key==='resume_link'&& d.value)
                setResumeLink(resume[0].value)
            })
    }, [])

    return (
        <GuestLayout>
            <Head>
                <title>Introduction- Shakil's Blog</title>
            </Head>
                    <div className="homeContainer">
                        <div className="profile">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={variants.crossFromRight}
                            >
                                <img src={'../assets/propic.jpg'} width="100%" alt="profile photo"/>
                                <br/>
                                <br/>
                                <a href={resumeLink} target='_blank'>RESUME</a>
                            </motion.div>
                        </div>
                        <div className={(theme === 'light') ? 'infoLight' : (theme === 'dark') && 'info'}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={variants.crossFromLeft}
                            >
                                <h1>{data?.map(d=>d.key==='name'&& d.value)}</h1>
                                <hr/>
                                <h2>{data?.map(d=>d.key==='designation'&& d.value)}</h2>
                                <p>
                                    {data?.map(d=>d.key==='about_me'&& d.value)}
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
                                        <h5>{data?.map(d=>d.key==='d_o_b'&& d.value)}</h5>
                                        <h5>{data?.map(d=>d.key==='nationality'&& d.value)}</h5>
                                        <h5> {data?.map(d=>d.key==='address'&& d.value)} </h5>
                                        <h5> {data?.map(d=>d.key==='phone'&& d.value)} </h5>
                                        <h5>{data?.map(d=>d.key==='blood_group'&& d.value)}</h5>
                                        <h5> {data?.map(d=>d.key==='email'&& d.value)} </h5>
                                        <h5>{data?.map(d=>d.key==='website'&& d.value)} </h5>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
        </GuestLayout>
    )
}
