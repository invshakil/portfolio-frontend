import GuestLayout from "@/components/Layouts/GuestLayout"
import CareerCard from "@/components/cards/careerCard"
import {FaGraduationCap} from "react-icons/fa"
import React from "react"
import PropTypes from "prop-types"
import {BsBriefcaseFill} from "react-icons/bs"
import variants from "@/helpers/animation"
import {motion} from "framer-motion"
import MetaSection from "@/components/metaTags"
import {useStateValue} from "@/states/StateProvider"

const CareerInfo = ({header, data, experience, tags}) => {
    const options = {month: 'short'}
    const [{theme}] = useStateValue()

    return (
        <GuestLayout>
            <MetaSection
                title={`${!experience ? 'Education' : 'Experience'} - ${process.env.NEXT_PUBLIC_APP_NAME}`}
                description={'My Background - Md. Syful Islam Shakil'}
                keywords={tags.map(t => t.name)}
            />
            <div className="educationContainer">
                <h1> {header} </h1>
                <div className={(!experience) ? 'divider' : 'divider2'}/>
                <div className="splitter">
                    {
                        data?.map(info => (
                            <div key={info.id} className={info.id % 2 === 0 ? 'left' : 'right'}>
                                <div>
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={info.id % 2 === 0 ? variants.crossFromRight : variants.crossFromLeft}
                                    >
                                        {
                                            experience ?
                                                <CareerCard
                                                    index={info.id}
                                                    title={info.company_name}
                                                    name={info.designation}
                                                    subject={info.language}
                                                    result={info.description}
                                                    from={info.from}
                                                    to={info.to}
                                                    current={info.current}
                                                    experience={experience}
                                                />
                                                :
                                                <CareerCard
                                                    index={info.id}
                                                    title={info.institute}
                                                    name={info.degree}
                                                    subject={info.subject}
                                                    result={info.result}
                                                    year={info.session}
                                                    experience={experience}
                                                />
                                        }
                                    </motion.div>
                                </div>

                                <div className="centerIcon">
                                    <div className={theme === 'dark' ? "icon" : 'iconLight'}>
                                        {
                                            (experience) ?
                                                <BsBriefcaseFill size="30px" color="white"/>
                                                :
                                                <FaGraduationCap size="30px" color="white"/>
                                        }
                                    </div>
                                </div>

                                <div className="passingYear">
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={info.id % 2 === 0 ? variants.crossFromRight : variants.crossFromLeft}
                                    >
                                        <h2>{(!experience) && 'Graduation Year: '}
                                            {
                                                !experience ?
                                                    info.session
                                                    :
                                                    <>
                                                        {new Date(info.from).toLocaleDateString("en-US", options)}
                                                        <span style={{margin: '0 3px 0 6px'}}>
                                                            '{new Date(info.from).getFullYear().toString().substr(-2)}
                                                        </span>
                                                        -
                                                        {
                                                            info.current === 1 ?
                                                                'Current'
                                                                :
                                                                <>
                                                                <span style={{margin: '0 6px 0 3px'}}>
                                                                    {new Date(info.to).toLocaleDateString("en-US", options)}
                                                                </span>
                                                                    <span>
                                                                     '{new Date(info.to).getFullYear().toString().substr(-2)}
                                                                </span>
                                                                </>
                                                        }
                                                    </>
                                            }
                                        </h2>
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

