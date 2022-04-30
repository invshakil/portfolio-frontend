import Head from 'next/head'
import GuestLayout from "@/components/Layouts/GuestLayout"
import {useStateValue} from "@/states/StateProvider";
import variants from "@/helpers/animation";
import {motion} from "framer-motion"

export default function Home() {
    const [{theme}] = useStateValue()

    return (
        <GuestLayout>
            <Head>
                <title>Introduction- Shakil's Blog</title>
            </Head>
            <div className='homeContainer'>
                <div className='profile'>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants.crossFromRight}
                    >
                    <img src={'../assets/propic.jpg'} width='100%' alt='profile photo'/>
                    <br/>
                    <br/>
                    <a>RESUME</a>
                    </motion.div>
                </div>
                <div className={(theme === 'light') ? 'infoLight' : (theme === 'dark') && 'info'}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants.crossFromLeft}
                    >
                    <h1>MD. SYFUL ISLAM SHAKIL</h1>
                    <hr/>
                    <h2>SOFTWARE ENGINEER</h2>
                    <p>
                        I'm a dedicated software engineer. I'm passionate about implementing something new. I love to
                        play with code. I have 36 month+ experience of doing projects. Oh another thing. I am a football
                        freak and a Liverpool Supporter!
                    </p>
                    <br/>
                    <h3>SUMMERY</h3>
                    <div className={theme === 'dark' ? 'summery' : theme === 'light' && 'summeryLight'}>
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
                    </motion.div>
                </div>
            </div>
        </GuestLayout>
    )
}
