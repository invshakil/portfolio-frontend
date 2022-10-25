import React from "react";
import ExperienceCard from "./cards/experienceCard";
import Link from 'next/link'
import {MdKeyboardBackspace} from "react-icons/md";

const Experience = ({theme, workplaces}) => {

    return (
        <div className={`px-8 py-3 mt-3 ${theme === 'light' ? 'bg-white' : 'bg-dark'}`}>

            <div className={`${workplaces.length === 3 && 'hidden'} cursor-pointer`}>
                <Link href={{pathname: `/`}}>
                   <MdKeyboardBackspace size={'3rem'}/>
                </Link>
            </div>

            <h2 className='headerText py-4'>Experience</h2>
            {
                workplaces?.map(wp => (
                    <ExperienceCard
                        key={wp.id}
                        from={wp.from}
                        to={wp.to}
                        company={wp.company_name}
                        designation={wp.designation}
                        desc={wp.description}
                        lang={wp.language}
                    />
                ))
            }
            <div className={`${workplaces.length > 3 && 'hidden'}`}>
                <Link href={{pathname: `/experience`}}>
                    <button className='flex m-auto bg-lightGreen px-3 py-1 rounded-sm text-offWhite text-sm'>
                        Show All
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Experience