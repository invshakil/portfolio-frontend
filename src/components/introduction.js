import React from "react";
import {AiOutlineMail} from "react-icons/ai";
import {RiComputerLine} from "react-icons/ri";
import {MdOutlineSchool} from "react-icons/md";
import ThemeChanger from "../helpers/themeChanger"
import ButtonMailto from "../helpers/mailToButton";

const Introduction = ({theme, data, img, email}) => {

    return (
        <div className={`px-8 py-3 ${theme === 'light' ? 'bg-white' : 'bg-dark'}`}>
            <img className='w-screen max-h-48 object-cover' src={'assets/cover.jpg'} alt='cover'/>
            <img className='w-screen h-44 w-44 rounded-full object-cover relative -mt-32 ml-6'
                 src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img}`}
                 alt='propic'
            />
            <div className='flex justify-between'>
                <div className='pt-2'>
                    <h2 className='text-lightGreen font-bold text-3xl'>{data?.map(d => d.key === 'name' && d.value)}</h2>
                    <h2 className='text-tomato pb-2'>{data?.map(d => d.key === 'designation' && d.value)}</h2>
                    <hr className={`border ${theme!=='dark'?'border-offWhite':'border-bg-custom-dark'}`}/>
                    <div className='pt-2 flex justify-between'>
                        <p className='font-extralight  w-2/4 text-justify'>
                            {data?.map(d => d.key === 'about_me' && d.value)}
                            {/*Comilla,Chittagong, Bangladesh*/}
                        </p>
                        <div className='px-9 pt-2'>
                            <h2 className='flex items-center'>
                                <RiComputerLine color='#327c7a' size='1.7rem'/>
                                <span className='ml-2'>Workplace</span>
                            </h2>
                            <h2 className='flex items-center mt-2'>
                                <MdOutlineSchool color='#327c7a' size='1.7rem'/>
                                <span className='ml-2'> Education (last)</span>
                            </h2>
                        </div>
                    </div>
                    <div className='flex'>
                        <button className='bg-lightGreen rounded-sm text-white px-3 py-2 mt-4'>
                            + Follow
                        </button>
                        <button className='ml-3 rounded-sm bg-lightGreen text-white px-3 py-2 mt-4'>
                            <span className='flex items-center'><AiOutlineMail/>
                                <ButtonMailto label="Contact" mailto={`mailto:${email}`} />
                            </span>
                        </button>
                        <ThemeChanger/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction