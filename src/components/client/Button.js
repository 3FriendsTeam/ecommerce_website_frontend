import React from 'react';

const Button = ({text,textColor,bgColor,IcAfter}) => {
    return (
        <button
            type='button'
            className={`p-2 ${textColor} ${bgColor} outline-none rounded-md hover:underline flex items-center justify-center gap-1 h-[50px]  `}
        >
            <span>{IcAfter && <IcAfter/>}</span>
            <span>{text}</span>
            
        </button>
    );
};

export default Button;