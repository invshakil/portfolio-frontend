import React, {useEffect, useState} from "react"
import GuestLayout from "@/components/Layouts/GuestLayout";
import ServicesData from "@/dummyData/servicesData";
import ServiceCard from "@/components/cards/serviceCard";
import Api from "@/lib/axios"


const Services = () => {

    const [data,setData]=useState([])

    useEffect(() => {
        Api.get(`/services`)
            .then(response =>{
                setData(response.data.data.data)
            })
    }, []);

    return (
        <GuestLayout>
            <div className='servicesContainer'>
                <h1 className='headerTitle'>MY SERVICES</h1>
                <br/>
                <br/>
                <div className='services'>
                {
                    data?.map(service=>(
                        <ServiceCard
                            key={service.id}
                            icon={service.icon_class}
                            service={service.description}
                            title={service.name}
                        />
                    ))
                }
                </div>
            </div>
        </GuestLayout>
    )
}

export default Services
