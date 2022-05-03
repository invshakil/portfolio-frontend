import Head from 'next/head'
import Navigation from "@/components/Layouts/Navigation";
import Footer from "@/components/Layouts/FooterSection";
import {useAuth} from "@/hooks/auth"

const GuestLayout = ({children}) => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>
            <Navigation user={user}/>
            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default GuestLayout
