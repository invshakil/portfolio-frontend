import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import ServicesData from "@/dummyData/servicesData";
import ServiceCard from "@/components/cards/serviceCard";


const Services = () => {
    return (
        <GuestLayout>
            <div className='servicesContainer'>
                <h1 className='headerTitle'>MY SERVICES</h1>
                <br/>
                <br/>
                <div className='services'>
                {
                    ServicesData.map(service=>(
                        <ServiceCard
                            key={service.id}
                            icon={service.icon}
                            service={service.service}
                            title={service.title}
                        />
                    ))
                }
                </div>
            </div>
        </GuestLayout>
    )
}

export default Services
