import React, {useState, useEffect} from "react";

const About = ({theme,data}) => {

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
        <div className={`px-8 py-3 mt-3 ${theme === 'light' ? 'bg-white' : 'bg-dark'}`}>
            <h1 className='headerText pb-2'>About</h1>
            {data?.map(d => d.key === 'about_me' && d.value)}
            <div>
                {showFullContent ? (
                    <h2 className='text-justify'>
                        {aboutMeObject && aboutMeObject.value}
                        <span onClick={handleReadLessClick}
                              className='text-lightGreen dark:text-tomato text-xs cursor-pointer'>...Read Less</span>
                    </h2>
                ) : (
                    <h2 className='text-justify'>
                        {slicedContent}
                        <span onClick={handleReadMoreClick}
                              className='text-lightGreen dark:text-tomato text-xs cursor-pointer'>...Read More</span>
                    </h2>
                )}
            </div>
        </div>
    )
}

export default About