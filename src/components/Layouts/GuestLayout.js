import Head from 'next/head'
import Navigation from "@/components/Layouts/Navigation"
import Footer from "@/components/Layouts/FooterSection"
import ParticlesComponent from "@/helpers/particles"


const GuestLayout = ({children,info}) => {
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



