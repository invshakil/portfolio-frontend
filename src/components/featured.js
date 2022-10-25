import React, {useState, useEffect} from "react";

const Featured = ({theme, featured}) => {

    return (
        <div className={`px-8 py-3 mt-3 ${theme === 'light' ? 'bg-white' : 'bg-dark'}`}>
            <h2 className='headerText pb-2'>Featured</h2>
            <div className={`grid lg:grid-cols-3 sm:grid-cols-1 gap-1`}>
                {
                    featured.map(f => (
                        <div className={`border ${theme==='light'?'border-offWhite':'border-bg-custom-dark'} p-4`}>
                            <img className='w-full max-h-60 object-cover mb-4'
                                 src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${f.image}`} alt='cover'
                            />
                            <section
                                className="text-left text-sm featuredDescription"
                                dangerouslySetInnerHTML={{__html: f.description}}
                            />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Featured