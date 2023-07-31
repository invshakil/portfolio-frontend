import React, {useEffect, useState} from "react"
import {FaFacebook, FaLinkedin, FaSkype, FaTwitter, FaYoutube} from "react-icons/fa";
import {AiFillGithub, AiFillMail} from "react-icons/ai";
import {useStateValue} from "../../states/StateProvider";
import Api from "../../lib/axios"

const Footer = () => {
    const [data,setData]=useState()
    const [{theme}]=useStateValue()
    const [fbLink, setFbLink] = useState('')
    const [twitterLink, setTwitterLink] = useState('')
    const [gitLink, setGitLink] = useState('')
    const [linkedInLink, setLinkedInLink] = useState('')
    const [ytLink, setYtLink] = useState('')
    const [skypeLink, setSkypeLink] = useState('')

    useEffect(() => {
         Api.get(`/about-me`)
            .then(response => {
                setData(response.data.data)
                let fb = response.data.data.filter(d => d.key === 'facebook' && d.value)
                setFbLink(fb[0].value)
                let ttr = response.data.data.filter(d => d.key === 'twitter' && d.value)
                setTwitterLink(ttr[0].value)
                 let git = response.data.data.filter(d => d.key === 'github' && d.value)
                setGitLink(git[0].value)
                let linked = response.data.data.filter(d => d.key === 'linkedin' && d.value)
                setLinkedInLink(linked[0].value)
                let yt = response.data.data.filter(d => d.key === 'youtube' && d.value)
                setYtLink(yt[0].value)
                let sk = response.data.data.filter(d => d.key === 'skype' && d.value)
                setSkypeLink(sk[0].value)
            })
    }, [])


    return (
        <div className={`${theme === 'dark' ? 'footerContainer' : theme === 'light' && 'footerContainerLight'}`}>
            <div className='footerIcons mt-5'>
                <a href={fbLink} target='_blank'><FaFacebook/></a>
                <a href={twitterLink} target='_blank'><FaTwitter/></a>
                <a href={fbLink} target='_blank'><AiFillMail/></a>
                <a href={gitLink} target='_blank'><AiFillGithub/></a>
                <a href={linkedInLink} target='_blank'><FaLinkedin/></a>
                <a href={ytLink} target='_blank'><FaYoutube/></a>
                <a href={skypeLink} target='_blank'><FaSkype/></a>
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
