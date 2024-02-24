import React from 'react'
function Button({
    text,
    type='button',
    bgColor='bg-amber-400',
    textColor='text-black',
    width='w-full',
    className='',
    ...props
}){
    return(
        <>
        <button className={`py-2.5 px-7 mb-0.5 mt-2.5 text-center rounded-lg transform transition duration-300 hover:scale-110 ${bgColor} ${textColor} ${className}`}{...props}>{text}</button>
        </>
    )
}

export default Button