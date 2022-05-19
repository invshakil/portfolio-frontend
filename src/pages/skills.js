import React from "react"
import GuestLayout from "@/components/Layouts/GuestLayout"
import ReviewsData from "@/dummyData/reviewsData"
import variants from "@/helpers/animation"
import {motion} from "framer-motion"
import Api from "@/lib/axios"
import MetaSection from "@/components/metaTags"

const Skills = (props) => {

    return (
        <GuestLayout>
            <MetaSection
                title={`My Skills - ${process.env.NEXT_PUBLIC_APP_NAME}`}
                description={props.skills[0]?.description}
                keywords={props.tags.map(t => t.name)}
            />
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
    let tags = []
    await Api.get(`/skills`)
        .then(response => {
            skills = response.data.data.data
        })

    await Api.get(`/allTags`)
        .then(response => {
            tags = response.data.data
        })

    return {
        props: {skills,tags},
    }
}
