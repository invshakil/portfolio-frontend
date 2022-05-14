import React, {useEffect, useState} from "react"
import EducationData from "@/dummyData/educationData";
import CareerInfo from "@/components/careerInfo";
import Api from "@/lib/axios"

const Education = () => {

    const [data,setData]=useState([])

    useEffect(() => {
        Api.get(`/educations`)
            .then(response =>{
                setData(response.data.data.data)
            })
    }, []);
    return (
        <CareerInfo
            header={'MY EDUCATION INFORMATION'}
            data={data}
        />
    )
}

export default Education
