import React from "react";
import {AiOutlineMail, AiOutlineUser} from 'react-icons/ai'
import {GiGraduateCap, GiSkills} from 'react-icons/gi'
import {MdMiscellaneousServices, MdWorkOutline} from 'react-icons/md'
import {ImBlogger2} from "react-icons/im";
import {SiPolywork} from "react-icons/si";

const Routes = [
    {
        id:0,
        name:'ABOUT ME',
        path:'/',
        icon:<AiOutlineUser/>
    },
    {
        id:1,
        name:'SKILL SET',
        path:'/skills',
        icon:<GiSkills/>
    },
    {
        id:2,
        name:'EDUCATION',
        path:'/education',
        icon:<GiGraduateCap/>
    },
    {
        id:3,
        name:'EXPERIENCE',
        path:'/experience',
        icon:<MdWorkOutline/>
    },
    {
        id:4,
        name:'SERVICES',
        path:'/services',
        icon:<MdMiscellaneousServices/>
    },
    {
        id:5,
        name:'PORTFOLIO',
        path:'/portfolio',
        icon:<SiPolywork/>
    },
    {
        id:6,
        name:'BLOG',
        path:'/blog',
        icon:<ImBlogger2/>
    },
    {
        id:7,
        name:'CONTACT',
        path:'/contact',
        icon:<AiOutlineMail/>
    }
]

export default Routes
