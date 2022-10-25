import React from "react";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <a
            className='pl-1.5'
            href={'#'}
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </a>
    );
};

export default ButtonMailto;