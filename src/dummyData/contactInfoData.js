import {MdLocationOn, MdOutlineEmail} from "react-icons/md";
import {BsTelephone} from "react-icons/bs";

const ContactInfoData = [
    {
        id: 0,
        title: 'Address',
        info: 'Comilla Adarsha Sadar Upazila, Bangladesh',
        icon: <MdLocationOn size='30px' color='#4c5369'/>,
    },
    {
        id: 1,
        title: 'Phone',
        info: '+88016753365',
        icon: <BsTelephone size='30px' color='#4c5369'/>,
    },
    {
        id: 2,
        title: 'Email',
        info: 'syful.shakil.it@gmail.com',
        icon: <MdOutlineEmail size='30px' color='#4c5369'/>,
    }
]

export default ContactInfoData
