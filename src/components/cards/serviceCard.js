import React from "react";
import PropTypes from "prop-types";
import {useStateValue} from "@/states/StateProvider";
import {SiPytest} from "react-icons/si"

const ServiceCard = ({title, service, icon}) => {
    const [{theme}] = useStateValue()

    return (
        <div className={(theme==='light')?'serviceCardLight':(theme==='dark')&&'serviceCard'}>
            <div className='serviceContainer'>
                <div className='icon'>
                    <i className={icon} aria-hidden="true"></i>
                    <SiPytest color='white' size='30px'/>
                </div>
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
    icon:PropTypes.string
}
