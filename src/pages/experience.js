import React from "react";
import Api from "../lib/axios";
import Experience from "../components/experience";
import {useStateValue} from "../states/StateProvider";

const ExperienceAll = (props) => {

    const [{theme}] = useStateValue()

    return (
        <div className='w-3/5 ml-12'>
            <Experience theme={theme} workplaces={props.workplaces}/>
        </div>
    )
}

export default ExperienceAll

export const getServerSideProps = async () => {

    let workplaces = []
    await Api.get(`/workplaces`)
        .then(response => {
            workplaces = response.data.data.data
        })

    return {
        props: {workplaces},
    }
}
