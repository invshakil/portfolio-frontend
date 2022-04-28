import React from "react";
import PropTypes from "prop-types";
import {useStateValue} from "@/states/StateProvider";

const ServiceCard = ({title, service, icon}) => {
    const [{theme}] = useStateValue()

    return (
        <div className={(theme==='light')?'serviceCardLight':(theme==='dark')&&'serviceCard'}>
            <div className='serviceContainer'>
                <div className='icon'>  {icon}</div>
                <h1>{title}</h1>
                <h2>{service}</h2>
            </div>
        </div>
    )
}

export default ServiceCard

ServiceCard.propTypes = {
    title: PropTypes.string,
    service: PropTypes.string,
    icon:PropTypes.element
}
