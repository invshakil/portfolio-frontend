import React from "react"
import GuestLayout from "./Layouts/GuestLayout"
import ReviewsData from "../dummyData/reviewsData"
import variants from "../helpers/animation"

const Skills = (props) => {

    return (
        <div className='bg-white dark:bg-dark skillsContainer my-3 px-10 py-5'>
            <h2 className='headerText py-4'>Skill Set</h2>
            <div className='flex justify-start items-center'>
                {/*<span className='mr-2'><GiSkills size='20px' color={'#808080'}/></span>*/}
                <div className='flex flex-wrap justify-start gap-2'>
                    {props.skills?.map(s => (
                        <p className='w-fit px-5 my-2 bg-lightGreen dark:bg-tomatoDark rounded-lg text-offWhite'>{s.title}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
