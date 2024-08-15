import React from "react";
import Image from "next/image";
import AboutImg from "@/public/images/aboutPure.svg";

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center 2xl:justify-center  xl:px-[90px] lg:px-10 px-5 lg:mt-44 mt-14 gap-20">
        <div className="">
          <Image src={AboutImg} alt="About Image" />
        </div>
        <div className="lg:w-6/12  lg:pt-24 pt-5">
          <button className="p-[10px] text-[#0E493F] text-base font-normal leading-[16.86px] font-['Arial'] border rounded-3xl border-[#0E493F]">
            About Pure Pharmaceuticals
          </button>
          <h2 className="text-[#0E493F] font-normal font-['Arial'] leading-[44.25px] text-[42px] mt-4">
            Raising Pharmaceutical Standards from Abu Dhabi to Worldwide Excellence
          </h2>
          <p className="text-black text-base font-normal font-['Inter'] leading-normal mt-4">
            Pure Pharmaceuticals is committed to upholding the highest standards
            of quality and safety in the production of pharmaceuticals, from our
            base in Abu Dhabi to our global reach. Our state-of-the-art
            facilities employ rigorous quality control measures at every stage
            of the manufacturing process, ensuring that our products meet or
            exceed international regulatory requirements. We adhere strictly to
            Good Manufacturing Practices (GMP) and employ cutting-edge
            technology to guarantee the purity, potency, and efficacy of our
            medications.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
