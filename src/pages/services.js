import React, {useEffect, useState} from "react"
import GuestLayout from "@/components/Layouts/GuestLayout";
import ServicesData from "@/dummyData/servicesData";
import ServiceCard from "@/components/cards/serviceCard";
import Api from "@/lib/axios"
import MetaSection from "@/components/metaTags"


const Services = (props) => {

    return (
        <GuestLayout>
            <MetaSection
                title={`My Services- ${process.env.NEXT_PUBLIC_APP_NAME}`}
                description={props.services.map(s=>s.description)}
                keywords={props.services.map(t => t.name)}
            />
            <div className='servicesContainer'>
                <h1 className='headerTitle'>MY SERVICES</h1>
                <br/>
                <br/>
                <div className='services'>
                {
                    props.services?.map(service=>(
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

export const getServerSideProps = async () => {

    let services = []
    await Api.get(`/services`)
        .then(response => {
            services = response.data.data.data
        })

    return {
        props: {services},
    }
}
