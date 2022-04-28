import Head from 'next/head'
import GuestLayout from "@/components/Layouts/GuestLayout"
import {useEffect, useState} from "react";

export default function Home() {
    const [currentTheme, setCurrentTheme] = useState('')
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setToggle(!toggle)
            setCurrentTheme(localStorage.theme)
        }, 1);
        return () => clearTimeout(timer);
    }, [toggle]);

    return (
        <GuestLayout>
            <Head>
                <title>Introduction- Shakil's Blog</title>
            </Head>
            <div className='homeContainer'>
                <div className='profile'>
                    <img src={'../assets/propic.jpg'} width='100%' alt='profile photo'/>
                    <br/>
                    <br/>
                    <a>RESUME</a>
                </div>
                <div className={(currentTheme==='dark')?'info':'infoLight'}>
                    <h1>MD. SYFUL ISLAM SHAKIL</h1>
                    <hr/>
                    <h2>SOFTWARE ENGINEER</h2>
                    <p>
                        I'm a dedicated software engineer. I'm passionate about implementing something new. I love to play with code. I have 36 month+ experience of doing projects. Oh another thing. I am a football freak and a Liverpool Supporter!
                    </p>
                    <br/>
                    <h3>SUMMERY</h3>
                    <div className={currentTheme==='dark'?'summery':'summeryLight'}>
                        <div>
                            <h4>AGE: </h4>
                            <h4>NATIONALITY: </h4>
                            <h4>ADDRESS:</h4>
                            <h4>PHONE:</h4>
                            <h4>BLOOD GROUP:</h4>
                            <h4>EMAIL: </h4>
                            <h4>WEBSITE:</h4>
                        </div>

                        <div>
                            <h5>28</h5>
                            <h5>BANGLADESHI</h5>
                            <h5> Comilla Adarsha Sadar Upazila, Bangladesh </h5>
                            <h5> +8801675332265 </h5>
                            <h5>A+</h5>
                            <h5> syful.shakil.it@gmail.com </h5>
                            <h5>www.sshdevs.com </h5>

                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}
