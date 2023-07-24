import React from "react"
import GuestLayout from "./Layouts/GuestLayout"
import ReviewsData from "../dummyData/reviewsData"
import variants from "../helpers/animation"

const Skills = (props) => {

    return (
        <GuestLayout>
            <div className='skillsContainer'>
                <h1>SKILL SET</h1>
                <br/>
                <section
                    dangerouslySetInnerHTML={{__html: props.skills}}
                />
                <h1>REVIEWS</h1>
                <div className='reviews'>
                    {
                        ReviewsData.map(review => (
                            <img key={review.id} src={review.image} alt='review'/>
                        ))
                    }
                </div>
            </div>
        </GuestLayout>
    )
}

export default Skills
