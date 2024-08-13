import React from 'react'
import Image from 'next/image'
import Vector from '@/public/images/Vector1ZLine.svg'
import VisionImg from '@/public/images/vision.svg'
import VisionIcon from '@/public/images/visionIcon.svg'
import MissionIcon from '@/public/images/missionIcon.svg'

const Vision = () => {
  return (
    <>
         <div className='  mt-16 xl:px-[90px] lg:px-[40px] px-5  flex flex-wrap xl:flex-nowrap justify-center lg:justify-normal'>
         <div className='lg:w-6/12 lg:relative '>
                <Image src={VisionImg} className='mt-12 xl:ml-12 lg:mt-0'/>
                <div className="w-[155px] h-[397px] bg-primary lg:absolute -z-10  hidden xl:block top-20" />
            </div>
            {/* Section 2 */}
            <div className='lg:w-6/12 mx-4 md:mx-0 '>
                <div className='mt-28'>
                <h2 className="text-primary text-[42px] font-normal font-nohemi xs:text-center">Our Vision and Mission</h2>
                    <Image src={Vector} className='sm:ml-48 xs:ml-10' />
                </div>
                <div className='xs:mr-2'>
                    <div>
                        <div className='flex items-center gap-4'>
                            <div className="w-[52px] h-[52px] bg-[#f6e9f4] rounded-[100px]" ><Image src={VisionIcon} alt='Vision' /></div>
                            <div className="text-light-black text-[28px] font-normal font-secondary">Vision</div>

                        </div>
                        <p className="w-[70%] xs:w-[100%] text-black text-base font-normal font-secondary leading-normal sm:ml-[70px] mt-5">Our vision to provide high quality cost effecve complete range of Microbiological Prepared Culture Media to UAE and GCC Market.</p>
                    </div>
                    <div className='mt-12'>
                        <div className='flex items-center gap-4'>
                            <div className="w-[52px] h-[52px] bg-[#f6e9f4] rounded-[100px]" ><Image src={MissionIcon} alt='Mission' /></div>
                            <div className="text-light-black text-[28px] font-normal font-secondary">Mission</div>

                        </div>
                        <p className="w-[70%] xs:w-[100%] text-black text-base font-normal font-secondary leading-normal sm:ml-[70px] mt-5">Our mission is to Manufacturer and supply high quality Readymade Culture Media and broth and supply across UAE and GCC countries.</p>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Vision