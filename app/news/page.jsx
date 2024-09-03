import React from 'react'
import Image from 'next/image'
import PageNameBanner from '../Components/PageNameBanner'
import Banner from "@/public/images/newsBanner.svg"
import BreadCrumbs from '../Components/BreadCrumbs'
import Newss from "@/public/images/newss.svg"

const page = () => {
  return (
    <>
        <PageNameBanner image={Banner} title="" />
        <BreadCrumbs/>
        <main>
        <div className="flex flex-wrap md:flex-nowrap  2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0  md:justify-between justify-center xl:px-[90px] lg:px-[40px] px-5 gap-5">
        <div className=" md:w-[26%] xl:w-[350px] w-full  mt-14 hidden md:block  ">
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
              <h2 className="text-base font-secondary leading-normal text-divi-gray py-5 pl-4">
                Antihypertensives
              </h2>
              <div className="w-full h-[0px] border border-[#eae9e8]"></div>

              <h2 className="text-base font-secondary leading-normal text-divi-gray py-5 pl-4">
                Antihistamines
              </h2>
              <div className="w-full h-[0px] border border-[#eae9e8]"></div>
              <h2 className="text-base font-secondary leading-normal text-divi-gray py-5 pl-4">
                Erectile Dysfunction
              </h2>
              <div className="w-full h-[0px] border border-[#eae9e8]"></div>
              <h2 className="text-base font-secondary leading-normal text-divi-gray py-5 pl-4">
                Lipid Lowering Agents
              </h2>
            </div>
          </div>
        </div>
        <div className="xl:w-[70%] md:w-[74%] w-full mt-16">
            <h2 className='text-primary text-[32px] font-normal font-arial leading-[38.40px]'>News & Events</h2>
          <div className='mt-10'>
            <div className='border border-[#D9D9D9] py-5 px-4 flex gap-10'>
              <div>
                  <Image src={Newss} alt='banner' className='w-full h-full'  width={280} height={440}/>
              </div>
              <div>
                    <h2 className='text-xl font-normal font-arial leading-normal text-[#151515] mt-5 w-[72%]'>Akses Swiss Scientific office</h2>
                    <p className='mt-3 text-[13px] font-normal font-secondary leading-none text-[#222222]'>Purepharma's CEO, Mr. Musthafa, Meets with Manas Varalwar in Abudhabi</p>
                    <div className='mt-9'>
                      <span className='underline text-[13px] font-normal font-secondary leading-none text-[#222222]'>Read More</span>
                    </div>
              </div>

            </div>
          </div>
          <div className='mt-10'>
            <div className='border border-[#D9D9D9] py-5 px-4 flex gap-10'>
              <div>
                  <Image src={Newss} alt='banner' className='w-full h-full'  width={280} height={440}/>
              </div>
              <div>
                    <h2 className='text-xl font-normal font-arial leading-normal text-[#151515] mt-5 w-[72%]'>Dr Reddy’s Laboratories FZ LLC</h2>
                    <p className='mt-3 text-[13px] font-normal font-secondary leading-none text-[#222222]'>Purepharma's CEO, Mr. Musthafa, Meets with Manas Varalwar in Abudhabi</p>
                    <div className='mt-9'>
                      <span className='underline text-[13px] font-normal font-secondary leading-none text-[#222222]'>Read More</span>
                    </div>
              </div>

            </div>
          </div>
        </div>
      </div>

        </main>
    </>
  )
}

export default page