import GuestLayout from "../components/Layouts/GuestLayout"
import {useStateValue} from "../states/StateProvider"
import React, {useEffect, useState} from "react"
import Api from "../lib/axios"
import MetaSection from "../components/metaTags"
import LinkedInCard from "../components/cards/linkedInCard";
import Link from "next/link";
import {FaLongArrowAltRight} from 'react-icons/fa';
import Introduction from "../components/introduction";
import IntroductionCard from "../components/introductionCard";

const Home = (props) => {
    const [{theme}] = useStateValue()
    const [data, setData] = useState([])
    const [resumeLink, setResumeLink] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const backgroundImageUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.featured[0]?.image}`;
    const styles = {
        backgroundImage: `url('${backgroundImageUrl}')`,
        backgroundPosition: 'center center',
        backgroundBlendMode: 'multiply',
        backgroundSize: 'cover',
    };

    useEffect(() => {
        setData(props.info)
        Api.get(`/about-me`)
            .then(response => {
                setData(response.data.data)
                let resume = response.data.data.filter(d => d.key === 'resume_link' && d.value)
                setResumeLink(resume[0].value)
                let bd = response.data.data.filter(d => d.key === 'd_o_b' && d.value)
                let bDay = getAge(bd[0].value)
                setDob(bDay)
                let mail = response.data.data.filter(d => d.key === 'email' && d.value)
                setEmail(mail[0].value)
            })
    }, [])

    // useEffect(() => {
    //     Api.get(`/about-me/etc`)
    //         .then(response => {
    //             // setETC(response.data)
    //             // setSkills(response.data.skills)
    //             // setWorkplace(response.data.workplace)
    //             console.log(response.data)
    //         })
    // }, []);

    const getAge = (bd) => {
        let today = new Date()
        let birthDate = new Date(bd)
        let age = today.getFullYear() - birthDate.getFullYear()
        let m = today.getMonth() - birthDate.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }
        return age
    }

    return (
        <GuestLayout>
            <MetaSection
                title={`Introduction - ${process.env.NEXT_PUBLIC_APP_NAME}`}
                description={'Articles'}
                keywords={props.tags.map(t => t.name)}
            />
            <div
                className={`lg:hidden md:block lg:ml-2 rounded-xl pb-8 pt-3 px-8 lg:w-4/12 md:w-screen ${theme === 'light' ? 'bg-white' : 'bg-dark'}`}>
                <IntroductionCard etc={props.etc} theme={theme} data={data} img={props.img[0]?.value} email={email}/>
            </div>
            <div
                className={`mx-1 lg:mx-8 mb-5 lg:flex lg:justify-between md:grid md:grid-cols-1 ${theme === 'dark' ? ' opacity-80' : 'opacity-90'}`}>
                <div className='rounded-xl lg:mr-2 pb-8 lg:w-9/12 md:w-screen'>
                    {/*<h2 className='text-center text-2xl mt-10 mb-4'>Read Latest Articles</h2>*/}
                    {/*<hr/>*/}
                    <div className="dark:bg-gray-800 dark:text-gray-50">
                        <div className="grid grid-cols-12 mx-auto">
                            <div
                                className="flex lg:my-12 mt-3 space-y-2 lg:h-11/12 flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-6 shadow shadow-xl shadow-whiteLight dark:shadow-dark relative"
                                style={styles}
                            >
                                <div
                                    className="flex flex-col items-center justify-center text-center relative z-10 backdrop-filter backdrop-brightness-75 h-full">
                                    <span>{new Date(props.featured[0]?.created_at).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}</span>
                                    <Link href={`/${props.featured[0]?.slug}`}>
                                        <h1 className="py-4 text-5xl font-bold hover:underline cursor-pointer">{props.featured[0]?.title}</h1>
                                    </Link>
                                    {/*<p className="pb-6">{props.featured[0]?.description}</p>*/}
                                    <Link href={`/${props.featured[0]?.slug}`} className={'cursor-pointer'}>
                                        <FaLongArrowAltRight size={'20px'}/>
                                    </Link>
                                </div>
                            </div>

                            <div
                                className={`bg-white dark:bg-dark flex flex-col col-span-12 p-3 divide-y lg:col-span-6 lg:p-10 dark:divide-grey divide-bg-custom-dark lg:ml-2 shadow shadow-xl shadow-whiteLight dark:shadow-dark `}>
                                {
                                    props.featured?.slice(1).map((a,i) => (
                                        <div className="pt-7 text-xs pb-7 space-y-2" key={i}>
                                            <span>{new Date(a?.created_at).toLocaleDateString('en-US', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                            })}</span>
                                            <div className={'flex justify-between'}>
                                                {/*<img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${a.image}`}*/}
                                                {/*     className={'w-28 h-32 object-cover mr-3'}*/}
                                                {/*     alt={a.title}/>*/}
                                                <Link href={`/${a?.slug}`}>
                                                    <h1 className="dark:text-whiteLight text-2xl font-bold hover:underline cursor-pointer">{a.title}</h1>
                                                </Link>
                                            </div>


                                            {/*<p>{a.description}</p>*/}
                                            <a rel="noopener noreferrer" href="#"
                                               className="inline-flex items-center py-2 space-x-6 text-sm dark:text-violet-400">
                                                <span>
                                                    <Link href={`/${a.slug}`} className={'cursor-pointer'}>
                                                        <FaLongArrowAltRight size={'20px'} color={'#e04242'}/>
                                                    </Link>
                                                </span>

                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <section className="lg:py-1 sm:py-12 dark:bg-gray-800 dark:text-gray-100">

                            {
                                props.categories?.map((cat,i) => (
                                    <div className="py-6 mx-auto space-y-5" key={i}>
                                        <div className="space-y-2 text-left">
                                            <h2 className="text-3xl font-bold text-tomato hover:underline cursor-pointer">{cat.articles?.length > 0 ? cat.name : ''}</h2>
                                        </div>

                                        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                                            {
                                                cat.articles?.map((ar, index) => (
                                                    index < 3 &&
                                                    <article
                                                        key={index}
                                                        className="flex flex-col dark:bg-gray-900 shadow shadow-xl dark:shadow-dark shadow-whiteLight">
                                                        <a rel="noopener noreferrer" href="#"
                                                           aria-label="Te nulla oportere reprimique his dolorum">
                                                            <img alt={ar.title}
                                                                 className="object-cover w-full h-52 dark:bg-gray-500"
                                                                 src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${ar.image}`}
                                                            />
                                                        </a>
                                                        <div className="flex flex-col flex-1 p-6 bg-white dark:bg-dark">
                                                            {/*<a rel="noopener noreferrer" href="#"*/}
                                                            {/*   aria-label="Te nulla oportere reprimique his dolorum"></a>*/}
                                                            <Link key={ar.id}
                                                                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                                                                  href={{pathname: `category/${cat.slug}`}}>
                                                                {cat.name}
                                                            </Link>
                                                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{ar.title}</h3>
                                                            <div
                                                                className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                                                <span>{new Date(ar.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                                                <span>{ar.hit_count} views</span>
                                                            </div>
                                                        </div>
                                                    </article>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </section>

                    </div>

                </div>
                <div
                    className={`hidden lg:block lg:ml-2 h-fit rounded-xl pb-8 pt-3 lg:w-3/12 ${theme === 'light' ? 'bg-white' : 'bg-dark'}`}>
                    {/*<Blog articles={props.articles} types={props.types} popular={props.popular}/>*/}
                    <IntroductionCard etc={props.etc}  theme={theme} data={data}
                                      img={props.img[0]?.value} email={email}/>
                </div>
            </div>
        </GuestLayout>
    )
}
export default Home

export const getServerSideProps = async () => {

    let featuredCount = ''
    let categories = []
    let featured = []
    let types = []
    let tags = []
    let img = ''
    let aboutMe = ''
    let info = []
    let workplace = ''
    let etc = []

    await Api.get(`/about-me`)
        .then(response => {
            info = response.data.data
            img = response.data.data.filter(d => d.key === 'user_image' && d.value)
            aboutMe = response.data.data.filter(d => d.key === 'about_me' && d.value)
            featuredCount = response.data.data.filter(d => d.key === 'featuredCount' && d.value)
        })
    await Api.get(`/about-me/etc`)
        .then(response => {
            etc = response.data
        })
    await Api.get(`/allTags`)
        .then(response => {
            tags = response.data.data
        })
    await Api.get(`/articles`)
        .then(response => {
            featured = response.data.featured
            categories = response.data.categoryArticles
        })
    await Api.get(`/categories`)
        .then(response => {
            types = response.data
        })

    return {
        props: {categories, types, tags, featuredCount, featured, aboutMe, info, img, etc, workplace},
    }
}


