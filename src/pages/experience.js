import React, {useEffect, useState} from "react"
import CareerInfo from "@/components/careerInfo";
import ExperienceData from "@/dummyData/experienceData";
import Api from "@/lib/axios"

const Experience = (props) => {

    return (
        <CareerInfo
            header={'JOB EXPERIENCE'}
            data={props?.workplaces}
            experience
        />
    )
}

export default Experience


export const getServerSideProps = async () => {

    let workplaces = []
    await Api.get(`/workplaces`)
        .then(response => {
            workplaces = response.data.data.data
        })

    return {
        props: {workplaces},
    }
}

