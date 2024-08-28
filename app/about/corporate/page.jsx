import React from 'react'
import Image from 'next/image'
import Partners from '@/app/Components/Partners'
import CorporatePatners from '@/app/Components/about/CorporatePatners'
import Cmap from "@/public/images/cmap.svg"
const page = () => {
  return (
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

        <div>
          <h2 className='text-primary text-[32px] font-normal font-arial leading-[38.40px]'>Clients & Partners</h2>
        <CorporatePatners/>

        <h2 className='text-primary text-[32px] font-normal font-arial leading-[38.40px] mt-20'>Export</h2>
        <p className='mt-5 text-base font-normal font-secondary leading-normal text-[#1e1e1e] '>We are rapidly growing in the region to improve people’s quality of life with top quality products. Markets that we are serving or will be served soon are Qatar, Iraq, Bahrain, Jordan and Yemen. The list is rapidly changing so please contact us for more details.</p>
        <div className='mt-10 w-full'>
              <Image src={Cmap} alt='Company' className='w-full mt-10'/>
          </div>
        </div>
       
      </div>
    </div>
  </>
  )
}

export default page