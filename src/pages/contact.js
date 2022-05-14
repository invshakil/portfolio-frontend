import React, {useEffect, useState} from "react"
import GuestLayout from "@/components/Layouts/GuestLayout";
import ContactInfoCard from "@/components/cards/contactInfoCard";
import ContactInfoData from "@/dummyData/contactInfoData";
import {useForm} from 'react-hook-form';
import {useStateValue} from "@/states/StateProvider";
import ReCAPTCHA from "react-google-recaptcha";
import GoogleMapReact from 'google-map-react';
import SimpleMap from "@/helpers/map";
import variants from "@/helpers/animation";
import {motion} from "framer-motion"
import Api from "@/lib/axios"

const Contact = () => {
    const recaptchaRef = React.useRef();
    const [{theme}] = useStateValue()
    const [loading, setLoading] = useState(false)
    const [verify, setVerify] = useState('')
    const [data, setData] = useState([])
    const {register, handleSubmit, formState, reset, formState: {errors, touchedFields}}
        = useForm({
        mode: "onChange"
    });
    const {isValid} = formState;

    useEffect(() => {
        Api.get(`/about-me`)
            .then(response => {
                setData(response.data.data)
            })
    }, [])
    const onSubmit = async (data) => {
        try {
            const token = await recaptchaRef.current.executeAsync();
            console.log('token',token)
            // Add your API call code here also pass token to API
        } catch(error) {
            // alert(error)
        }
        setLoading(false)
        reset()
        console.log('data', data)
    };

    function onChange(e){
        setVerify(e)
    }

    return (
        <GuestLayout>
            <div className='contactContainer'>
                <h1>CONTACT ME</h1>

                <div className='flexContactPage'>
                    <div className='contactInfo'>
                        <h2>CONTACT INFO</h2>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants.crossFromRight}
                        >
                        <br/>
                           <p className='contactMe'>
                               {data?.map(d=>d.key==='contact_me'&& d.value)}
                           </p>
                        {
                            ContactInfoData?.map(info => (
                                <ContactInfoCard
                                    key={info.id}
                                    title={info.title}
                                    info={info.info}
                                    icon={info.icon}
                                    data={data}
                                />
                            ))
                        }
                    </motion.div>
                    </div>

                    <div className={theme === 'dark' ? 'contactForm' : 'contactFormLight'}>
                        <h2>SEND MESSAGE</h2>
                        <br/>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={variants.crossFromLeft}
                            >
                            <input
                                style={errors.name && {border: '1px solid #b40f0f'}}
                                type='text'
                                placeholder='Full Name'
                                {...register('name', {required: true})}
                            />
                            <input
                                style={errors.email && {border: '1px solid #b40f0f'}}
                                placeholder='Email'
                                type='email'
                                {...register('email', {required: true})}
                            />

                            <input
                                placeholder='Subject'
                                type='text'
                                {...register('subject', {required: false})}
                            />
                            <textarea
                                style={errors.message && {border: '1px solid #b40f0f'}}
                                placeholder='Message'
                                rows={4}
                                {...register('message', {required: true})}
                            />
                            <ReCAPTCHA
                                className={isValid ? '':'captchaHide'}
                                sitekey="6LcxrK8fAAAAAKsLDbp4gvhk9rzExb1ZLmB835iQ"
                                onChange={onChange}
                            />
                            <button
                                className={(isValid && verify) ? 'enabled' : 'disabled'}
                                disabled={!isValid && !verify} type="submit"
                            >
                                {(!loading) ? 'SAVE' : 'saving...'}
                            </button>
                            <button
                                className='clearButton'
                                onClick={() => reset()}
                            >
                                CLEAR
                            </button>
                            </motion.div>
                        </form>
                    </div>
                </div>

                <div className='map'>
                    <SimpleMap/>
                </div>
            </div>
        </GuestLayout>
    )
}

export default Contact
