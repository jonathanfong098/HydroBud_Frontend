import React from 'react'

const Button = ({children, onClickHandler, isDisabled, width, height, bgColor}) => {
    return (
        <button 
            className={`min-w-fit min-h-fit py-[1rem] px-[1.8rem] bg-[#B6CB9E] font-semibold text-white text-3xl rounded-[2rem] ${isDisabled ? '' : 'hover:bg-[#9CBA96]'}`}
            onClick={onClickHandler}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
}

export default Button