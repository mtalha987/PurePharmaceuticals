import React from 'react'
import Image from 'next/image'

const CardContact = (props) => {
  return (
    <>
        <div className='pt-9 pl-9 pb-16 bg-white shadow-lg w-[400px] mt-12'>
            <div><Image src={props.image} alt="Icon"/></div>
            <h3 className=' text-black text-2xl font-medium font-primary uppercase leading-relaxed mt-6'>{props.title}</h3>
            <p className='text-black text-base font-normal font-primary uppercase leading-[17.60px] mt-2 lg:w-[80%] w-[70%]'>{props.info}</p>
        </div>
    </>
  )
}

export default CardContact