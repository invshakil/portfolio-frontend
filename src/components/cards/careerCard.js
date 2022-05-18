import React from "react"
import {FaGraduationCap} from "react-icons/fa"
import {BsBriefcaseFill} from "react-icons/bs"
import * as propTypes from "prop-types"
import {useStateValue} from "@/states/StateProvider"

const CareerCard = ({title, name, subject, result, year, index, experience, from, to, current}) => {

    const [{theme}] = useStateValue()
    const options = {month: 'short'}

    return (
        <div className={(theme === 'light') ? 'careerInfoCardLight' : (theme === 'dark') && 'careerInfoCard'}>
            <div className="icon">
                {
                    (experience) ?
                        <BsBriefcaseFill size="30px" color="white"/>
                        :
                        <FaGraduationCap size="30px" color="white"/>
                }
            </div>
            <h4 className={index % 2 === 0 ? 'yearYellow' : 'yearPink'}>{(!experience) && 'Graduation Year:'}{year}</h4>
            <h4 className={index % 2 === 0 ? 'yearYellow' : 'yearPink'}>
                {
                    experience &&
                    <>
                        {new Date(from).toLocaleDateString("en-US", options)}
                        <span
                            style={{margin: '0 3px 0 6px'}}>'{new Date(from).getFullYear().toString().substr(-2)}</span>
                        -
                        {
                            current === 1 ?
                                ' Current'
                                :
                                <>
                             <span style={{margin: '0 6px 0 3px'}}>
                                {new Date(to).toLocaleDateString("en-US", options)}
                              </span>
                                    '{new Date(to).getFullYear().toString().substr(-2)}
                                </>
                        }
                    </>
                }
            </h4>
            <h2> {title}</h2>
            <h3><span>{!experience ? 'Institute:  ' : 'Designation:  '}</span> {name}</h3>
            <h3><span>{!experience ? 'Subject/Group:  ' : 'Language/Platform:  '} </span>{subject}</h3>
            <h3><span>{!experience ? 'Result:  ' : 'Role:  '} </span>{result}</h3>
        </div>
    )
}

export default CareerCard

CareerCard.propTypes = {
    experience: propTypes.bool,
    title: propTypes.string,
    name: propTypes.string,
    subject: propTypes.string,
    result: propTypes.string,
    year: propTypes.string,
    index: propTypes.number
}
