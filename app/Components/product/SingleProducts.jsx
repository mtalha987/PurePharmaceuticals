import React from 'react'
import Image from 'next/image'
import Product1 from "@/public/images/product1.webp";


const SingleProducts = () => {
  return (
    <>
         <>
    <div className="flex flex-wrap md:flex-nowrap  2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0  md:justify-between justify-center xl:px-[90px] lg:px-[40px] px-5 gap-5">
      <div className=" md:w-[26%] xl:w-[350px] w-full  mt-14   ">
        <div className="xl:w-[350px] pb-3 border-black/40 shadow">
          <form className="flex mb-3">
            <input
              type="text"
              className="w-full xl:w-[350px]  h-14 px-[16px] py-4 bg-white shadow justify-start items-start gap-2.5 inline-flex text-[#bdbab8] text-[13px] font-normal font-primary leading-tight"
              placeholder="Search"
            />
          </form>
          <div className="flex items-center content-center justify-between pt-6 mx-4">
            <h2 className="text-divi-gray text-2xl font-normal font-arial leading-[28.80px]">
            Oral Solid Dosage
            </h2>
          </div>
          <div className="w-full h-[0px] border border-black mt-6"></div>
          <div>

            <h2 className='text-base font-secondary leading-normal text-divi-gray py-5 pl-4'>Antihypertensives</h2>
            <div className="w-full h-[0px] border border-[#eae9e8]"></div>
            
            <h2 className='text-base font-secondary leading-normal text-divi-gray py-5 pl-4'>Antihistamines</h2>
            <div className="w-full h-[0px] border border-[#eae9e8]"></div>
            <h2 className='text-base font-secondary leading-normal text-divi-gray py-5 pl-4'>Erectile Dysfunction</h2>
            <div className="w-full h-[0px] border border-[#eae9e8]"></div>
            <h2 className='text-base font-secondary leading-normal text-divi-gray py-5 pl-4'>Lipid Lowering Agents</h2>
            

            
          </div>
         
        </div>
      </div>
      <div className="xl:w-[70%] md:w-[74%] w-full mt-16">
       <h2 className='text-primary text-[32px] font-normal  font-arial leading-[38.40px]'>Antihypertensives 200 ml</h2>
        <div className='w-full h-[520px]'>
            <Image src={Product1} alt='Product' className='w-full h-full' />
            
        </div>
        <div className='mt-10'>
            <h3 className='text-light-black text-2xl font-medium font-secondary leading-9'>Ingredients:</h3>
            <p className='text-light-black text-base font-normal font-secondary leading-normal mt-4'>Terpineol, Chloroxylenol, Ethyl alcohol, Castor oil soap, Caramel color & Purified water.</p>
        </div>
        <div className='mt-6'>
            <h3 className='text-light-black text-2xl font-medium font-secondary leading-9'>Uses & Directions:</h3>
            <p className='text-light-black text-base font-normal font-secondary leading-normal mt-4'>For Medical Uses</p>
        </div>
        <div className='mt-6'>
            <h3 className='text-light-black text-2xl font-medium font-secondary leading-9'>Cuts, Bites, Abrasions, Insect Stings:</h3>
            <p className='text-light-black text-base font-normal font-secondary leading-normal mt-4'>Wash with 1 capful of solution diluted in 250ml (approx. 1 cup) of water (1:20) and cover with dry gauze
            or lint.</p>
        </div>
        <div className='mt-6'>
            <h3 className='text-light-black text-2xl font-medium font-secondary leading-9'>Midwifery:</h3>
            <p className='text-light-black text-base font-normal font-secondary leading-normal mt-4'>1 capful in 500ml (approx. 2 cups) of water (1:40) for routine external antisepsis.
            For Personal Hygiene</p>
        </div>
        <div className='mt-6'>
            <h3 className='text-light-black text-2xl font-medium font-secondary leading-9'>Bathing:</h3>
            <p className='text-light-black text-base font-normal font-secondary leading-normal mt-4'>1-2 capful in bath is hygienic and refreshing. Do not use on babies, except on medical advice.</p>
        </div>
        <div className='mt-6'>
            <h3 className='text-light-black text-2xl font-medium font-secondary leading-9'>For Household Use:</h3>
            <p className='text-light-black text-base font-normal font-secondary leading-normal mt-4'>Terpineol, Chloroxylenol, Ethyl alcohol, Castor oil soap, Caramel color & Purified water.</p>
        </div>
        <div className='mt-6'>
            <h3 className='text-light-black text-2xl font-medium font-secondary leading-9'>For External Use Only</h3>
            <p className='text-light-black text-base font-normal font-secondary leading-normal mt-4'>Keep out of the reach of children Do not store above 300 C</p>
        </div>
      </div>
    </div>
  </>
    </>
  )
}

export default SingleProducts