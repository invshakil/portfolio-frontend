import React from "react";
import propTypes from "prop-types";
import {IoIosCheckboxOutline} from "react-icons/io";

const ProjectDescription = ({tag, tech, title, demo, description, image, service,list}) => {
    return (
        <div className='description'>
            <h2>{title}</h2>
            <p>{description}</p>
            <p> Key Features of this website-</p>
            <br/>
            {
                list.map(li=>(
                    <ul key={li.title}>
                        <li>
                            <span><IoIosCheckboxOutline/></span>
                            <span className='margin'>{li.title}</span>
                        </li>
                    </ul>
                ))
            }
            <br/>
            <p>Technology used in the project</p>
            {
                tech.map(t=>(
                    <ul key={t.title}>
                        <li>
                            <span><IoIosCheckboxOutline/></span>
                            <span className='margin'>{t.title}</span>
                        </li>
                    </ul>
                ))
            }
            <div className='otherInfo'>
                <p>Service: {service}</p>
                <a href={demo}>Demo: {demo}</a>
                <p>Tags: {tag}</p>
            </div>
        </div>
    )
}

export default ProjectDescription

ProjectDescription.propTypes = {
    tag: propTypes.string,
    tech: propTypes.string,
    title: propTypes.string,
    demo: propTypes.string,
    image: propTypes.string,
    description: propTypes.string,
    service: propTypes.string,
}
