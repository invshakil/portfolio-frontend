import React from "react"
import GuestLayout from "@/components/Layouts/GuestLayout"
import ReviewsData from "@/dummyData/reviewsData"
import variants from "@/helpers/animation"
import {motion} from "framer-motion"
import Api from "@/lib/axios"

const Skills = (props) => {

    return (
        <GuestLayout>
            <div className='skillsContainer'>
                <h1>SKILL SET</h1>
                <br/>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants.slideInLeft}
                >
                    <section
                        dangerouslySetInnerHTML={{ __html: props.skills[0]?.description }}
                    />
                <h1>REVIEWS</h1>
                <div className='reviews'>
                    {
                        ReviewsData.map(review=>(
                            <img key={review.id} src={review.image} alt='review'/>
                        ))
                    }
                </div>
                </motion.div>
            </div>
        </GuestLayout>
    )
}

export default Skills

export const getServerSideProps = async () => {

    let skills = []
    await Api.get(`/skills`)
        .then(response => {
            skills = response.data.data.data
        })

    return {
        props: {skills},
    }
}
