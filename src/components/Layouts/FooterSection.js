import React from "react";
import {FaFacebook, FaLinkedin, FaSkype, FaTwitter, FaYoutube} from "react-icons/fa";
import {AiFillGithub, AiFillMail} from "react-icons/ai";
import {useStateValue} from "@/states/StateProvider";

const Footer = () => {
    const [{theme}]=useStateValue()

    return (
        <div className={theme==='dark'?'footerContainer':theme==='light'&&'footerContainerLight'}>
            <div className='footerIcons'>
                <a><FaFacebook/></a>
                <a><FaTwitter/></a>
                <a><AiFillMail/></a>
                <a><AiFillGithub/></a>
                <a><FaLinkedin/></a>
                <a><FaYoutube/></a>
                <a><FaSkype/></a>
            </div>

            <div className='middleSection'>
                <a href='#'>SITEMAP</a><span>|</span>
                <a href='#'>PRIVACY POLICY</a><span>|</span>
                <a href='#'>ROBOTS</a>
            </div>

            <span className="copyWrite"> Shakil's Blog &copy;2017-&copy;{new Date().getFullYear()}   All Rights Reserved</span>
        </div>
    )
}

export default Footer
