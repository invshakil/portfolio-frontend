import React from "react";
import EducationData from "@/dummyData/educationData";
import CareerInfo from "@/components/careerInfo";

const Education = () => {
    return (
        <CareerInfo
            header={'MY EDUCATION INFORMATION'}
            data={EducationData}
        />
    )
}

export default Education
