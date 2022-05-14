import React, {useEffect, useState} from "react"
import EducationData from "@/dummyData/educationData";
import CareerInfo from "@/components/careerInfo";
import Api from "@/lib/axios"

const Education = (props) => {

    return (
        <CareerInfo
            header={'MY EDUCATION INFORMATION'}
            data={props?.educations}
        />
    )
}

export default Education

export const getServerSideProps = async () => {

    let educations = []
    await Api.get(`/educations`)
        .then(response => {
            educations = response.data.data.data
        })

    return {
        props: {educations},
    }
}

