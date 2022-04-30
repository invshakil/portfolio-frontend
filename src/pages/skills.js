import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import Data from "@/dummyData/skillsData";
import ReviewsData from "@/dummyData/reviewsData";
import variants from "@/helpers/animation";
import {motion} from "framer-motion"

const Skills = () => {
    return (
        <GuestLayout>
            <div className='skillsContainer'>
                <h1>SKILL SET</h1>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants.slideInLeft}
                >
                <Data/>
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
