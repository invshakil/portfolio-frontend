import React from "react";
import {MdLocationOn} from "react-icons/md";

const ContactInfoCard = ({title,info,icon}) => {
    return (
        <div className='address'>
            <div className='icon'>
                {icon}
            </div>
            <div className='addressText'>
                <h3>{title}</h3>
                <p>{info}</p>
            </div>
        </div>
    )
}

export default ContactInfoCard
