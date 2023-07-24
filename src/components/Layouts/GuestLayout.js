import Head from 'next/head'
import Footer from "../../components/Layouts/FooterSection"
import ParticlesComponent from "../../helpers/particles"
import {useEffect} from "react"
import Api from "../../lib/axios"
import Navigation from "./Navigation";


const GuestLayout = ({children,info}) => {

    useEffect(() => {
        Api.get('/hit').then(res=>{
            res.status
        })
    }, [])

    return (
        <div>
            <div>
                <Navigation/>
            </div>
            <div className="font-sans text-gray-900 antialiased mt-20">
                {children}
                <ParticlesComponent/>
            </div>
            <Footer/>
        </div>
    )
}

export default GuestLayout



