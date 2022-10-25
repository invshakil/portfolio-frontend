import React, {useState} from "react";
import {FaGraduationCap} from "react-icons/fa";

const EducationsCard = ({result, session, institute, degree, subject, label}) => {

    return (
        <div className='pb-5'>
            <div className='flex items-center'>
                <FaGraduationCap size='35px'/>
                <p className='text-2xl pl-2 text-tomato'>{institute}</p>
            </div>
            <div className='pl-11'>
                <p className='font-light'>{degree} {label!=='B' && ', '+ subject}</p>
                <p className='text-grey font-extralight  pb-2'>{session}</p>
                <p className='text-sm'>{result}</p>
            </div>
        </div>
    )
}

export default EducationsCard