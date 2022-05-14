import React from "react";
import propTypes from "prop-types";
import {IoIosCheckboxOutline} from "react-icons/io";

const ProjectDescription = ({tag,title, demo, description, service}) => {
    return (
        <div className='description'>
            <h2>{title}</h2>
            <br/>
            {description}
            <br/>
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
