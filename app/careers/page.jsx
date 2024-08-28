import React from "react";
import Image from "next/image";
import PageNameBanner from "../Components/PageNameBanner";
import Banner from "@/public/images/careersBanner.svg";
import BreadCrumbs from "../Components/BreadCrumbs";

const page = () => {
  return (
    <>
      <PageNameBanner image={Banner} title="" />
      <BreadCrumbs />

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
          <div>
            <h2 className="text-primary text-[32px] font-normal font-arial leading-[38.40px] ">Careers</h2>
            <p className="mt-5 text-base font-normal font-secondary leading-normal text-[#1e1e1e]">
              Whether you are still at university or looking for a new
              professional opportunity, we at QLife Pharma may be able to meet
              your aspirations. We are continuously looking for talented and
              committed individuals that can further improve our organization.<br/><br/>
              If you would like to be considered for a job opening, please send
              your application and CV, for the attention to hr@purepharma.com. We will respond directly, detailing when we
              will have reviewed your application.{" "}
            </p>
            <p className="mt-5 text-base font-normal font-secondary leading-normal text-[#1e1e1e]">If you are a university student looking for an internship, please let us know the duration, as well as your subject and level (BSc, MSc or PhD).</p>
          
            <h2 className="text-primary text-[32px] font-normal font-arial leading-[38.40px] mt-16">Company Key values are:</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
