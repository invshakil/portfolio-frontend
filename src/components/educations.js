import React, {useState, useEffect} from "react";
import EducationsCard from "./cards/educationsCard";
import Api from "../lib/axios";

const Educations = ({theme, educations}) => {

    // let [educations, setEducations]=useState([])
    //
    // useEffect( () => {
    //      Api.get('educations')
    //         .then(response => {
    //             setEducations(response.data.data.data)
    //             console.log('ed',response.data.data.data)
    //         })
    // }, []);

    return (
        <div className={`px-8 py-3 mt-3 ${theme === 'light' ? 'bg-white' : 'bg-dark'}`}>
            <h2 className='headerText py-4'>Educations</h2>
            {
                educations?.map(ed=>(
                    <EducationsCard
                        key={ed.id}
                        result={ed.result}
                        session={ed.session}
                        institute={ed.institute}
                        degree={ed.degree}
                        subject={ed.subject}
                        label={ed.label}
                    />
                ))
            }
        </div>
    )
}

export default Educations