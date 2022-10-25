import React, {useState, useEffect} from "react";
import {SiWorkplace} from "react-icons/si";

const ExperienceCard = ({from,to,desc,company, designation, lang}) => {

    const [From,setFrom]=useState(from)
    const [To,setTo]=useState(to)
    const [diff,setDiff]=useState('')

    useEffect(() => {
        setFrom(new Date(from).toLocaleString('default', { month: 'long', year:'numeric' }))
        setTo(new Date(to).toLocaleString('default', { month: 'long', year:'numeric' }))
        setDiff(getMonthDifference(new Date(from),new Date(to)))

    }, [from,to]);

    function getMonthDifference(startDate, endDate) {
        return (
            endDate.getMonth() -
            startDate.getMonth() +
            12 * (endDate.getFullYear() - startDate.getFullYear())
        );
    }

    return (
        <div className='pb-5'>
            <div className='flex items-center'>
                <SiWorkplace size='35px'/>
                <p className='text-2xl pl-2 text-tomato'>{designation}</p>
            </div>
            <div className='pl-11'>
                <p className='font-light'>{company}</p>
                <p className='text-grey font-extralight  pb-2'>{From} - {To} . {diff} mo</p>
                <p className='text-sm'>{desc}</p>
                {/*<p>{lang}</p>*/}
            </div>
        </div>
    )
}

export default ExperienceCard