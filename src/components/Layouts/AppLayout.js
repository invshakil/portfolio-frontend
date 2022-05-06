import Navigation from '@/components/Layouts/Navigation'
import {useAuth} from "@/hooks/auth"
//import styles 👇
import React from "react"

const AppLayout = ({header, children, ...rest}) => {
    const {user} = useAuth({middleware: 'auth'})
    return (
        <div className="min-h-screen">
            <Navigation user={user} drawer={true}/>
            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AppLayout
