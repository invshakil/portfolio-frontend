import GuestLayout from "@/components/Layouts/GuestLayout";
import CareerCard from "@/components/cards/careerCard";
import {FaGraduationCap} from "react-icons/fa";
import React from "react";
import PropTypes from "prop-types";
import { BsBriefcaseFill} from "react-icons/bs";
import variants from "@/helpers/animation";
import {motion} from "framer-motion"

const CareerInfo = ({header, data, experience}) => {
    return (
        <GuestLayout>
            <div className='educationContainer'>
                <h1> {header} </h1>
                <div className={(!experience) ? 'divider' : 'divider2'}/>
                <div className='splitter'>
                    {
                        data.map(info => (
                            <div key={info.id} className={info.id % 2 !== 0 ? 'left' : 'right'}>
                                <div>
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={info.id%2!==0?variants.crossFromRight:variants.crossFromLeft}
                                    >
                                    <CareerCard
                                        index={info.id}
                                        title={info.title}
                                        name={info.name}
                                        subject={info.subject}
                                        result={info.summery}
                                        year={info.year}
                                        experience={experience}
                                    />
                                    </motion.div>
                                </div>

                                <div className='centerIcon'>
                                    <div className='icon'>
                                        {
                                            (experience) ?
                                                <BsBriefcaseFill size='30px' color='white'/>
                                                :
                                                <FaGraduationCap size='30px' color='white'/>
                                        }
                                    </div>
                                </div>

                                <div className='passingYear'>
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={info.id%2===0?variants.crossFromRight:variants.crossFromLeft}
                                    >
                                    <h2>{(!experience) && 'Graduation Year:'} {info.year}</h2>
                                    </motion.div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </GuestLayout>
    )
}

export default CareerInfo

CareerInfo.propTypes = {
    experience: PropTypes.bool,
    data: PropTypes.array,
    header: PropTypes.string
}

