import React from "react";
import Image from "next/image";
import Product1 from "@/public/images/committed1.svg";
import Product2 from "@/public/images/committed2.svg";
import Product3 from "@/public/images/committed3.svg";
import Product4 from "@/public/images/committed4.svg";
import Product5 from "@/public/images/committed5.svg";
import Product6 from "@/public/images/committed6.svg";
const PureCommitted = () => {
  return (
    <>
      <div className="xl:px-[90px] lg:px-10 px-5 lg:mt-40 mt-14 2xl:px-0 bg-light-pink">
        <h2 className="text-primary text-[42px] pt-28 2xl:max-w-[1440px] 2xl:mx-auto  font-normal font-arial leading-[44.25px] text-center">
          Purepharma Committed
        </h2>
        <div className="2xl:max-w-[1440px] 2xl:mx-auto pb-40 ">
          <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-2 mt-12">
            <div className="bg-white flex flex-col justify-center items-center min-w-[30%] h-[330px]">
              <div>
                <Image src={Product1} alt="Products" />
              </div>
              <h2 className="text-2xl font-normal font-arial leading-relaxed text-pgreen mt-10">
                To Manufacture
              </h2>
              <p className="mt-1 text-base font-normal font-secondary leading-[16.86px]">
                World Class Pharma Formulations
              </p>
            </div>
            <div className="bg-white flex flex-col justify-center items-center min-w-[30%] h-[330px]">
              <div>
                <Image src={Product2} alt="Products" />
              </div>
              <h2 className="text-2xl font-normal font-arial leading-relaxed text-pgreen mt-10">
                To Satisfy
              </h2>
              <p className="mt-1 text-base font-normal font-secondary leading-[16.86px]">
                Need And Expectations Of Customers
              </p>
            </div>
            <div className="bg-white flex flex-col justify-center items-center min-w-[30%] h-[330px]">
              <div>
                <Image src={Product3} alt="Products" />
              </div>
              <h2 className="text-2xl font-normal font-arial leading-relaxed text-pgreen mt-10">
                To Ensure
              </h2>
              <p className="mt-1 text-base font-normal font-secondary leading-[16.86px]">
                Employee Involvement
              </p>
            </div>
            <div className="bg-white flex flex-col justify-center items-center min-w-[30%] h-[330px]">
              <div>
                <Image src={Product4} alt="Products" />
              </div>
              <h2 className="text-2xl font-normal font-arial leading-relaxed text-pgreen mt-10">
                To Build
              </h2>
              <p className="mt-1 text-base font-normal font-secondary leading-[16.86px]">
                Quality At Each And Every Level
              </p>
            </div>
            <div className="bg-white flex flex-col justify-center items-center min-w-[30%] h-[330px]">
              <div>
                <Image src={Product5} alt="Products" />
              </div>
              <h2 className="text-2xl font-normal font-arial leading-relaxed text-pgreen mt-10">
                To Assure
              </h2>
              <p className="mt-1 text-base font-normal font-secondary leading-[16.86px]">
                Commitment To Safety
              </p>
            </div>
            <div className="bg-white flex flex-col justify-center items-center min-w-[30%] h-[330px]">
              <div>
                <Image src={Product6} alt="Products" />
              </div>
              <h2 className="text-2xl font-normal font-arial leading-relaxed text-pgreen mt-10">
                To Invest In
              </h2>
              <p className="mt-1 text-base font-normal font-secondary leading-[16.86px]">
                Continuous Improvement
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PureCommitted;
