import React from "react";
import {useStateValue} from "../../states/StateProvider";

const LinkedInCard = () => {
    const [{theme}] = useStateValue()
    return (
        <div className={`w-full ${theme==='light'?'bg-white':'bg-dark'} pl-7`}>
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium"
                 data-theme="light" data-type="HORIZONTAL" data-vanity="syful-shakil" data-version="v1">
            </div>
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"/>
        </div>
    )
}

export default LinkedInCard