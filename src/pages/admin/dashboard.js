import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useEffect} from "react"
import {useAuth} from "@/hooks/auth"
import { useRouter } from 'next/router'
import Api from "@/lib/axios"

const Dashboard = () => {
    const {user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        Api.get('/api/test').then(res=>console.log('res',res.data))
        console.log('user',user)
        if(!user){
            router.push('/admin/login').then(r => r)
        }
    }, [])

    return (
        <AppLayout>
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="dashboardContainer">
                <h2>Dashboard</h2>
            </div>
        </AppLayout>
    )
}

export default Dashboard
