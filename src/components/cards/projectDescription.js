import React from "react";
import propTypes from "prop-types";

const ProjectDescription = ({tag, tech, title, demo, description, image, service}) => {
    return (
        <div className='description'>
            <h2>{title}</h2>
            <p>{description}</p>
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
