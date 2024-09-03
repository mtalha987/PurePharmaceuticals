import React from 'react'
import Image from 'next/image'
import CompanyContent from "@/public/images/companyContent.svg"
import CompanyContent2 from "@/public/images/companyContent2.svg"

const CompanyProfile = () => {
  return (
    <>
    <div className="flex flex-wrap md:flex-nowrap  2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0  md:justify-between justify-center xl:px-[90px] lg:px-[40px] px-5 gap-5">
      <div className=" md:w-[26%] xl:w-[350px] w-full  mt-14 hidden md:block  ">
        <div className="xl:w-[350px] pb-3 border-black/40 shadow ">
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
      <div className="xl:w-[70%] md:w-[74%] w-full mt-9  md:mt-16">

        <div>
          <h2 className='text-primary text-[32px] font-normal  font-arial leading-[38.40px]'>Company Profile:</h2>
          <p className='mt-3 text-base font-secondary text-[#1e1e1e] leading-normal'>Pure Pharmaceutical manufacturing L.L.C is a leading manufacturer of pharmaceuticals products in United Arab Emirates (UAE) by Mr. Cherukappilliyil Ommer Ali Kunju (CEO of Pure Pharma), committed to manufacturing high quality medicines that meet patient’s needs. We aim to protect, enable and support people facing health challenges, across the globe at every stage of life.</p>
          <div className='mt-10 w-full'>
              <Image src={CompanyContent} alt='Company' className='w-full'/>
          </div>
          <p className='mt-10 text-base font-secondary text-[#1e1e1e] leading-normal'>The state of art manufacturing facilities with an average area of 10,000 sq. mtr. Located in Kizad industrial area, Abu Dhabi, UAE. We are engaged in developing, Manufacturing, Marketing & Exporting of high-quality products such as Oral Solids for Local and MENA region. Quality has been the foremost priority for our brands.  it’s our endeavor to manufacture quality products as per the guidelines. While producing world class products, we strictly adhere to National and International Regulatory Requirements.We are committed to continuous improvement and value additions to the quality standards to satisfy our customers’ needs.</p>
          <h2 className='text-primary text-[32px] font-normal  font-arial leading-[38.40px] mt-16'>Our Vision</h2>
          <p className='mt-3 text-base font-secondary text-[#1e1e1e] leading-normal'>Pure Pharmaceutical manufacturing L.L.C is a leading manufacturer of pharmaceuticals products in United Arab Emirates (UAE) by Mr. Cherukappilliyil Ommer Ali Kunju (CEO of Pure Pharma), committed to manufacturing high quality medicines that meet patient’s needs. We aim to protect, enable and support people facing health challenges, across the globe at every stage of life.</p>
         
          <h2 className='text-primary text-[32px] font-normal  font-arial leading-[38.40px] mt-16'>Our Mission</h2>
          <p className='mt-3 text-base font-secondary text-[#1e1e1e] leading-normal'>Pure Pharmaceutical manufacturing L.L.C is a leading manufacturer of pharmaceuticals products in United Arab Emirates (UAE) by Mr. Cherukappilliyil Ommer Ali Kunju (CEO of Pure Pharma), committed to manufacturing high quality medicines that meet patient’s needs. We aim to protect, enable and support people facing health challenges, across the globe at every stage of life.</p>
          <div className='mt-10 w-full'>
              <Image src={CompanyContent2} alt='Company' className='w-full'/>
          </div>
        </div>
       
      </div>
    </div>
  </>
  )
}

export default CompanyProfile