import React from "react";
import GuestLayout from "@/components/Layouts/GuestLayout";
import Data from "@/dummyData/skillsData";
import ReviewsData from "@/dummyData/reviewsData";

const Skills = () => {
    return (
        <GuestLayout>
            <div className='skillsContainer'>
                <h1>SKILL SET</h1>
                <Data/>
                <h1>REVIEWS</h1>
                <div className='reviews'>
                    {
                        ReviewsData.map(review=>(
                            <img key={review.id} src={review.image} alt='review'/>
                        ))
                    }
                </div>

            </div>
        </GuestLayout>
    )
}

export default Skills
