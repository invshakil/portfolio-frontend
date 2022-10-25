import React from "react";

const Sidebar = ({theme}) => {

    return (
        <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium"
             data-theme="dark"
             datatype="HORIZONTAL" data-vanity="syful-shakil" data-version="v1">
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"/>
        </div>
    )
}

export default Sidebar