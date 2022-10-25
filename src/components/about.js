import React, {useState, useEffect} from "react";

const About = ({theme,data}) => {
    return (
        <div className={`px-8 py-3 mt-3 ${theme === 'light' ? 'bg-white' : 'bg-dark'}`}>
            <h2 className='headerText pb-2'>About</h2>
            <p className='text-justify font-extralight'>
                {data?.map(d => d.key === 'about_me' && d.value)}
            </p>
        </div>
    )
}

export default About