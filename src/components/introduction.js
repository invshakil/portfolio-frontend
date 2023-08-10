import React, {useState} from "react";
import {AiOutlineMail} from "react-icons/ai";
import {RiComputerLine} from "react-icons/ri";
import {MdOutlineSchool} from "react-icons/md";
import ThemeChanger from "../helpers/themeChanger"
import ButtonMailto from "../helpers/mailToButton";

const Introduction = ({theme, data, img, email, etc}) => {

    return (
        <div className={`px-8 py-3 ${theme === 'light' ? 'bg-white' : 'bg-dark'} w-full bg-white`}>
            <img className='w-screen max-h-48 object-cover' src={'assets/cover.jpg'} alt='cover'/>
            <img className='w-screen h-44 w-44 rounded-full object-cover relative -mt-32 ml-6'
                 src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img}`}
                 alt='propic'
            />
            <div className='flex justify-between'>
                <div className='pt-2 w-full'>
                    <div className='pt-2 flex'>
                        <div className='lg:w-6/12' style={{lineHeight:'1'}}>
                            <h2 className='w-fit text-lightGreen font-bold text-2xl lg:text-3xl'>{data?.map(d => d.key === 'name' && d.value)}</h2>
                            <h3 className='text-tomato pb-2'>{data?.map(d => d.key === 'designation' && d.value)}</h3>
                            <p className='font-extralight w-fit text-justify'>
                                Kumilla,Chittagong, Bangladesh
                            </p>
                            <br/>
                            <div className='lg:hidden text-sm' style={{lineHeight:'1.2'}}>
                                <a href={`${etc?.data?.workplace?.company_link}`} target={'_blank'}
                                   title={'See Company'}
                                   className='font-light'>
                                  <h2>{etc?.data?.workplace?.company_name}</h2> <span><h2 className='font-light'>{etc?.data?.education?.institute}</h2></span>
                                </a>
                            </div>
                        </div>

                        <div className='pt-2 w-6/12 flex justify-end text-sm hidden lg:block'>
                            <div>
                                <div className='flex items-center mt-1 w-80 2xl:w-fit'>
                                    <div className='h-5 w-5'>
                                        <RiComputerLine color='#327c7a' size='25px'/>
                                    </div>

                                    <span className='ml-3'>
                                     {/*<span className='text-grey dark:text-whiteLight mr-2'>{etc?.data?.workplace?.designation} at </span>*/}
                                        <a href={`${etc?.data?.workplace?.company_link}`} target={'_blank'}
                                           title={'See Company'}
                                           className='font-light'>
                                        <h2>{etc?.data?.workplace?.company_name}</h2>
                                    </a>
                                </span>
                                </div>
                                <div className='flex items-center mt-2 w-80 2xl:w-fit'>
                                    <div className='h-5 w-5'>
                                        <MdOutlineSchool color='#327c7a' size='25px'/>
                                    </div>
                                    <span className='ml-3'>
                                        <h2 className='font-light'>{etc?.data?.education?.institute}</h2>
                                </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*<hr className={`border ${theme !== 'dark' ? 'border-offWhite' : 'border-bg-custom-dark'}`}/>*/}

                    <div className='flex'>
                        {/*<button className='bg-lightGreen rounded-sm text-white px-3 py-2 mt-4'>*/}
                        {/*    + Follow*/}
                        {/*</button>*/}
                        <button className='rounded-sm bg-lightGreen text-white px-3 rounded-md py-1 mt-4'>
                            <span className='flex items-center'><AiOutlineMail/>
                                <ButtonMailto label="Contact" mailto={`mailto:${email}`}/>
                            </span>
                        </button>
                        {/*<ThemeChanger/>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction