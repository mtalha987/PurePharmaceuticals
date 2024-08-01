import React from "react";
import Image from "next/image";
import Doctor from "@/public/images/doctor.svg";

const WhyPure = () => {
  return (
    <>
      <div className="flex flex-col 2xl:justify-between lg:flex-row xl:px-[90px] lg:px-10 px-5 bg-[#0E493F] lg:mt-32 mt-16">
        <div className="lg:mt-32 mt-12 ">
          <button className="h-[37px] px-[15px] py-2.5 rounded-[71px] border border-white justify-center items-center gap-2.5 inline-flex text-white text-base font-normal font-['Arial'] leading-[16.86px]" >
            Why Pure Pharmaceuticals
          </button>
          <h2 className="text-white xl:w-[65%] 2xl:w-[90%] sm:w-[90%]   text-[42px] font-normal font-['Arial'] leading-[44.25px] mt-4">
            Your Reliable Partner in Exceptional Healthcare
          </h2>
          <div>
            
          </div>
        </div>
        <div>
          <Image src={Doctor} alt="Doctor" />
        </div>
      </div>
    </>
  );
};

export default WhyPure;
