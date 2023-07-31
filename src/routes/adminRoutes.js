import React from "react";
import {AiOutlineMail, AiOutlineUser} from 'react-icons/ai'
import {GiGraduateCap, GiSkills} from 'react-icons/gi'
import {MdMiscellaneousServices, MdWorkOutline} from 'react-icons/md'
import {ImBlogger2} from "react-icons/im";
import {SiPolywork} from "react-icons/si";

const AdminRoutes = [
    {
        id:0,
        name:'Dashboard',
        path:'/admin/dashboard',
        icon:<GiSkills/>
    },
    {
        id:1,
        name:'SKILL SET',
        path:'/skills',
        icon:<GiSkills/>
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
        path:'/admin/manage-category/list',
        icon:<ImBlogger2/>
    },
]

export default AdminRoutes
