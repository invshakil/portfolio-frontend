import React from "react"
import {MdLocationOn} from "react-icons/md"

const ContactInfoCard = ({title, info, icon, data}) => {
    return (
        <div className="address">
            <div className="icon">
                {icon}
            </div>
            <div className="addressText">
                <h3>{title}</h3>
                <p>
                    {
                        title === 'Address' ? data.map(d => d.key === 'address' && d.value)
                        :
                        title === 'Phone' ? data.map(d => d.key === 'phone' && d.value)
                        :
                        title === 'Email' && data.map(d => d.key === 'email' && d.value)
                    }
                </p>
            </div>
        </div>
    )
}

export default ContactInfoCard
