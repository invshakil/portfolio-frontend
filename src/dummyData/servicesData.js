import {SiPaloaltosoftware, SiPytest} from 'react-icons/si'
import {RiFileListLine} from "react-icons/ri";
import {GrHostMaintenance} from "react-icons/gr";

const ServicesData = [
    {
        id: 0,
        icon: <SiPaloaltosoftware color='white' size='30px'/>,
        title: 'Application Development',
        service: 'I can develop any application software as per requirement with client satisfaction. I will work with you as hourly/fixed price agreement. '
    },
    {
        id: 1,
        icon: <RiFileListLine color='white' size='30px'/>,
        title: 'CMS Development',
        service: 'You will provide me theme psd template. I will build the cms on top of it. '
    },
    {
        id: 2,
        icon: <GrHostMaintenance color='white' size='30px'/>,
        title: 'Software Maintenance',
        service: 'I can do maintenance work for your existing system as long as you want. But that will require hourly contract agreement. '
    },
    {
        id: 3,
        icon: <SiPytest color='white' size='30px'/>,
        title: 'Software Testing',
        service: 'I can do basic software testing for your existing system. Will sort out the bugs and will fix it for you if you want. '
    },

]

export default ServicesData
