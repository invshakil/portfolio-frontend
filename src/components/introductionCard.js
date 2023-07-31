import React, {useState} from "react";
import {AiOutlineMail} from "react-icons/ai";
import {SiWorkplace} from "react-icons/si";
import {GiSkills} from "react-icons/gi";
import ThemeChanger from "../helpers/themeChanger"
import ButtonMailto from "../helpers/mailToButton";
import Link from "next/link";

const Introduction = ({theme, data, img, email, etc}) => {

    const [showFullContent, setShowFullContent] = useState(false);
    const aboutMeObject = data.find((d) => d.key === 'about_me');
    const slicedContent = aboutMeObject ? aboutMeObject.value.slice(0, 250) : '';
    const handleReadMoreClick = () => {
        setShowFullContent(true);
    };
    const handleReadLessClick = () => {
        setShowFullContent(false);
    };

    return (
        <div className={`rounded-md -mt-1 lg:fixed overflow-y-scroll max-h-full ${showFullContent?'lg:pb-44':'lg:pb-5'} lg:pl-6 lg:mr-8 ${theme === 'light' ? 'bg-white' : 'bg-dark'}`}>
            <img className='w-screen max-h-48 object-cover' src={'assets/cover.jpg'} alt='cover'/>
            <img className='w-screen h-44 w-44 rounded-full object-cover relative -mt-36 m-auto'
                 src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img}`}
                 alt='propic'
            />
            <div className='flex justify-between'>
                <div className='pt-2'>
                    <h2 className='dark:text-whiteLight text-lightGreen font-bold text-3xl'>{data?.map(d => d.key === 'name' && d.value)}</h2>
                    <h2 className='dark:text-tomatoDark text-grey pb-2'>{data?.map(d => d.key === 'designation' && d.value)}</h2>
                    <hr className={`border ${theme !== 'dark' ? 'border-offWhite' : 'border-bg-custom-dark'}`}/>
                    <div className='pt-2 flex justify-between'>
                        <div className='font-extralight w-full dark:text-whiteLight text-left'>
                            <div>
                                {showFullContent ? (
                                    <>
                                        {aboutMeObject && aboutMeObject.value}
                                        <span onClick={handleReadLessClick} className='text-lightGreen dark:text-tomato text-xs cursor-pointer'>...Read Less</span>
                                    </>
                                ) : (
                                    <>
                                        {slicedContent}
                                        <span onClick={handleReadMoreClick} className='text-lightGreen dark:text-tomato text-xs cursor-pointer'>...Read More</span>
                                    </>
                                )}
                            </div>
                            <hr className={`border my-3 ${theme !== 'dark' ? 'border-offWhite' : 'border-bg-custom-dark'}`}/>
                            <div className='flex justify-start items-center'>
                                {/*<span className='mr-1'><SiWorkplace size='20px' color={'#858585'}/></span>*/}
                                <h2 className='w-fit text-sm'>
                                    <span className='text-grey dark:text-whiteLight mr-2'>{etc?.data?.workplace?.designation}</span>
                                    @
                                    <a href={`${etc?.data?.workplace?.company_link}`} target={'_blank'} title={'See Company'}
                                       className=' text-tomatoDark font-bold text-sm'>
                                        {etc?.data?.workplace?.company_name}
                                    </a>
                                </h2>
                            </div>
                            <div className='flex justify-start items-center'>
                                {/*<span className='mr-2'><GiSkills size='20px' color={'#808080'}/></span>*/}
                                <div className='flex flex-wrap justify-start gap-2'>
                                    {etc?.data?.skills?.map(s => (
                                        <p className='w-fit px-5 my-2 bg-lightGreen dark:bg-tomatoDark rounded-lg text-offWhite'>{s.title}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <Link href={'/about-me'}>
                            <button
                                className='hover:underline hover:text-tomato text-xs rounded-sm px-3 py-1 mt-0 border border-whiteLight dark:border-bg-custom-dark'>
                                View Details
                            </button>
                        </Link>
                        {/*<button*/}
                        {/*    className='ml-3 rounded-sm bg-grey text-xs dark:bg-bg-custom-dark text-white px-3 py-2 mt-2'>*/}
                        {/*    <span className='flex items-center'><AiOutlineMail/>*/}
                        {/*        <ButtonMailto label="Contact" mailto={`mailto:${email}`}/>*/}
                        {/*    </span>*/}
                        {/*</button>*/}
                        {/*<ThemeChanger/>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction