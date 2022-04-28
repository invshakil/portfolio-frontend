import React from "react";

const Footer = () => {
    return (
        <div className='footerContainer'>
            <span className="font-bold text-lg mr-2"> Next.js Dev</span>   &copy;{new Date().getFullYear()}   All Rights Reserved
        </div>
        // <footer className="px-4 sm:px-6 py-6 mt-24">
        //     <div className="text-center text-sm text-grey-500">
        //         <span className="font-bold text-lg mr-2"> Next.js Dev</span>   &copy;{new Date().getFullYear()}   All Rights Reserved
        //     </div>
        // </footer>
    )
}

export default Footer
