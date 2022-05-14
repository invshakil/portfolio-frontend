import Head from 'next/head'
import Navigation from "@/components/Layouts/Navigation";
import Footer from "@/components/Layouts/FooterSection";

const GuestLayout = ({children}) => {

    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>
            <Navigation/>
            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default GuestLayout
