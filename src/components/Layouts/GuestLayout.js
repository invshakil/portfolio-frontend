import Head from 'next/head'
import Navigation from "@/components/Layouts/Navigation"
import Footer from "@/components/Layouts/FooterSection"
import ParticlesComponent from "@/helpers/particles"
import {useEffect} from "react"
import Api from "@/lib/axios"


const GuestLayout = ({children,info}) => {

    useEffect(() => {
        Api.get('/hit').then(res=>{
            console.log('hit',res)
        })
    }, [])

    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>
            <Navigation/>
            <div className="font-sans text-gray-900 antialiased">
                {children}
                <ParticlesComponent/>
            </div>
            <Footer/>
        </div>
    )
}

export default GuestLayout



