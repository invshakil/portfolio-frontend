import React from "react";
import CareerInfo from "@/components/careerInfo";
import ExperienceData from "@/dummyData/experienceData";

const Experience = () => {
    return (
        <CareerInfo
            header={'JOB EXPERIENCE'}
            data={ExperienceData}
            experience
        />
    )
}

export default Experience
