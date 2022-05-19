import React from "react"
import CareerInfo from "@/components/careerInfo"
import Api from "@/lib/axios"

const Education = (props) => {

    return (
        <CareerInfo
            header={'MY EDUCATION INFORMATION'}
            data={props?.educations}
            tags={props.tags}
        />
    )
}

export default Education

export const getServerSideProps = async () => {

    let educations = []
    let tags = []
    await Api.get(`/educations`)
        .then(response => {
            educations = response.data.data.data
        })

    await Api.get(`/allTags`)
        .then(response => {
            tags=response.data.data
        })


    return {
        props: {educations,tags},
    }
}

