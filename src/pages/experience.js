import React from "react"
import CareerInfo from "@/components/careerInfo"
import Api from "@/lib/axios"

const Experience = (props) => {

    return (
        <CareerInfo
            header={'JOB EXPERIENCE'}
            data={props?.workplaces}
            experience
            tags={props.tags}
        />
    )
}

export default Experience


export const getServerSideProps = async () => {

    let workplaces = []
    let tags = []
    await Api.get(`/workplaces`)
        .then(response => {
            workplaces = response.data.data.data
        })

    await Api.get(`/allTags`)
        .then(response => {
            tags = response.data.data
        })

    return {
        props: {workplaces, tags},
    }
}

