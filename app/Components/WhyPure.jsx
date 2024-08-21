import React from "react";
import Image from "next/image";
import Doctor from "@/public/images/doctor.svg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const WhyPure = () => {
  return (
    <>
      <div className=" xl:px-[90px] lg:px-10 px-5 bg-[#0E493F] ">
        <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 flex flex-col  lg:flex-row">
          <div className="lg:mt-32 mt-12 lg:w-[50%]  ">
            <button className="h-[37px] px-[15px] py-2.5 rounded-[71px] border border-white justify-center items-center gap-2.5 inline-flex text-white text-base font-normal font-['Arial'] leading-[16.86px]">
              Why Pure Pharmaceuticals
            </button>
            <h2 className="text-white xl:w-[65%] 2xl:w-[90%] sm:w-[90%]   text-[42px] font-normal font-['Arial'] leading-[44.25px] mt-4">
              Your Reliable Partner in Exceptional Healthcare
            </h2>
            <div className="mt-11 flex flex-col gap-6 mb-16">
              <div className="border py-6 pl-9 pr-6">
                <div className="flex justify-between text-white text-2xl font-normal font-['Arial'] leading-relaxed items-center gap-2 ">
                  <h2>Exceptional Quality Assurance</h2>{" "}
                  <FaAngleUp className="w-6 h-6" />
                </div>
                <p className="mt-4 text-white text-base font-normal font-['Inter'] leading-normal w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pitecto beatae vitae dicta sunt
                  explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur quisquam est, qui dolorem ipsum quia dolor sit
                  amet,
                </p>
              </div>
              <div className="border py-6 pl-9 pr-6">
                <div className="flex justify-between text-white text-2xl font-normal font-['Arial'] leading-relaxed items-center gap-2 ">
                  <h2>Exceptional Quality Assurance</h2>{" "}
                  <FaAngleDown className="w-6 h-6" />
                </div>
              </div>
              <div className="border py-6 pl-9 pr-6">
                <div className="flex justify-between text-white text-2xl font-normal font-['Arial'] leading-relaxed items-center gap-2 ">
                  <h2>Exceptional Quality Assurance</h2>{" "}
                  <FaAngleDown className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] lg:relative">
            <Image
              src={Doctor}
              alt="Doctor"
              className="lg:absolute lg:bottom-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyPure;
