import React, {useEffect, useState} from "react"
import CareerInfo from "@/components/careerInfo";
import ExperienceData from "@/dummyData/experienceData";
import Api from "@/lib/axios"

const Experience = () => {

    const [data,setData]=useState([])

    useEffect(() => {
        Api.get(`/workplaces`)
            .then(response =>{
                console.log('wp',response.data.data.data)
                setData(response.data.data.data)
            })
    }, []);

    return (
        <CareerInfo
            header={'JOB EXPERIENCE'}
            data={data}
            experience
        />
    )
}

export default Experience
