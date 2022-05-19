import React, {useState} from "react"
import GuestLayout from "@/components/Layouts/GuestLayout"
import ContactInfoCard from "@/components/cards/contactInfoCard"
import ContactInfoData from "@/dummyData/contactInfoData"
import {useForm} from 'react-hook-form'
import {useStateValue} from "@/states/StateProvider"
import ReCAPTCHA from "react-google-recaptcha"
import SimpleMap from "@/helpers/map"
import variants from "@/helpers/animation"
import {motion} from "framer-motion"
import Api from "@/lib/axios"
import {toast} from 'react-toastify'
import {ClipLoader} from "react-spinners"
import MetaSection from "@/components/metaTags"

const Contact = (props) => {
    const [{theme}] = useStateValue()
    const [loading, setLoading] = useState(false)
    const [verify, setVerify] = useState('')
    const {register, handleSubmit, formState, reset, formState: {errors, touchedFields}}
        = useForm({
        mode: "onChange"
    })
    const {isValid} = formState
    const onSubmit = async (data) => {
        try {
            setLoading(true)
            await Api.post(`/sendEmail`, data)
                .then(response => {
                    toast.success(`Thank You For Your Message ${data.name}`)
                    setLoading(false)
                    reset()
                })
        } catch (error) {
            alert(error)
        }
    }

    function onChange(e) {
        setVerify(e)
    }

    return (
        <GuestLayout>
            <MetaSection
                title={`Contact Me - ${process.env.NEXT_PUBLIC_APP_NAME}`}
                description={props.aboutMe[0].value}
                keywords={props.tags.map(t => t.name)}
            />
            <div className="contactContainer">
                <h1>CONTACT ME</h1>

                <div className="flexContactPage">
                    <div className="contactInfo">
                        <h2>CONTACT INFO</h2>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants.crossFromRight}
                        >
                            <br/>
                            <p className="contactMe">
                                {props.info?.map(d => d.key === 'contact_me' && d.value)}
                            </p>
                            {
                                ContactInfoData?.map(info => (
                                    <ContactInfoCard
                                        key={info.id}
                                        title={info.title}
                                        info={info.info}
                                        icon={info.icon}
                                        data={props.info}
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
                                    type="text"
                                    placeholder="Full Name"
                                    {...register('name', {required: true})}
                                />
                                <input
                                    style={errors.email && {border: '1px solid #b40f0f'}}
                                    placeholder="Email"
                                    type="email"
                                    {...register('email', {required: true})}
                                />

                                <input
                                    placeholder="Subject"
                                    type="text"
                                    {...register('subject', {required: false})}
                                />
                                <textarea
                                    style={errors.message && {border: '1px solid #b40f0f'}}
                                    placeholder="Message"
                                    rows={4}
                                    {...register('message', {required: true})}
                                />
                                <ReCAPTCHA
                                    className={isValid ? '' : 'captchaHide'}
                                    sitekey="6LcxrK8fAAAAAKsLDbp4gvhk9rzExb1ZLmB835iQ"
                                    onChange={onChange}
                                />
                                <button
                                    className={(isValid && verify) ? 'enabled' : 'disabled'}
                                    disabled={!isValid && !verify} type="submit"
                                >
                                    {(!loading) ? 'SEND' : <ClipLoader color={'white'} size={15}/>}
                                </button>
                                <button
                                    className="clearButton"
                                    onClick={() => reset()}
                                >
                                    CLEAR
                                </button>
                            </motion.div>
                        </form>
                    </div>
                </div>

                <div className="map">
                    <SimpleMap
                        longitude={props.location.longitude[0].value}
                        latitude={props.location.latitude[0].value}
                    />
                </div>
            </div>
        </GuestLayout>
    )
}

export default Contact

export const getServerSideProps = async () => {

    let info = []
    let tags = []
    let aboutMe = ''
    let location = {longitude: '', latitude: ''}
    await Api.get(`/about-me`)
        .then(response => {
            info = response.data.data
            aboutMe = response.data.data.filter(d => d.key === 'about_me' && d.value)
            location.latitude = response.data.data.filter(d => d.key === 'lattitude' && d.value)
            location.longitude = response.data.data.filter(d => d.key === 'longitude' && d.value)
        })

    await Api.get(`/allTags`)
        .then(response => {
            tags = response.data.data
        })

    return {
        props: {info, aboutMe, tags, location},
    }
}

