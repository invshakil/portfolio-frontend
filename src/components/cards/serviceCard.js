import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

const ServiceCard = ({title, service, icon}) => {
    const [currentTheme, setCurrentTheme] = useState('')
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setToggle(!toggle)
            setCurrentTheme(localStorage.theme)
        }, 0);
        return () => clearTimeout(timer);
    }, [toggle]);

    return (
        <div className={(currentTheme==='light')?'serviceCardLight':(currentTheme==='dark')&&'serviceCard'}>
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
}
