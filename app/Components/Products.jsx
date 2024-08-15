import React from "react";
import Image from "next/image";
import Product1 from "@/public/images/product1.svg"
import Product2 from "@/public/images/product2.svg"
import Product3 from "@/public/images/product3.svg"
import Product4 from "@/public/images/product4.svg"
import Product5 from "@/public/images/product5.svg"
import Product6 from "@/public/images/product6.svg"
import Product7 from "@/public/images/product7.svg"
import Product8 from "@/public/images/product8.svg"
import ShopIcon from "@/public/images/shopIcon.svg"

const Products = () => {
  return (
    <>
      <div className="xl:px-[90px] lg:px-10 px-5 lg:mt-44 mt-14 ">
        <div className="flex justify-start 2xl:justify-center">
          <button className="py-[10px] px-[18px]  border border-[#0e493f] rounded-3xl text-[#0e493f] text-base font-normal font-['Arial'] leading-[16.86px]">
            Shop By Category
          </button>
        </div>
        <h2 className="text-[#0e493f] text-[42px] font-normal font-['Arial'] leading-[44.25px] mt-4 2xl:text-center">
          Leading the Way to Better Health
        </h2>
        <div>
          <div className="lg:mt-9 mt-5 flex gap-3 flex-wrap justify-start 2xl:justify-center">
            <div className='h-[35px] px-[15px] py-2.5 bg-[#f7f7f7] rounded-lg justify-center items-center gap-2.5 inline-flex text-[#6f6f6f] text-[13px] font-normal font-["Arial"]'>
              All Products
            </div>
            <div className='h-[35px] px-[15px] py-2.5 bg-[#f7f7f7] rounded-lg justify-center items-center gap-2.5 inline-flex text-[#6f6f6f] text-[13px] font-normal font-["Arial"]'>
              Clinical
            </div>
            <div className='h-[35px] px-[15px] py-2.5 bg-[#f7f7f7] rounded-lg justify-center items-center gap-2.5 inline-flex text-[#6f6f6f] text-[13px] font-normal font-["Arial"]'>
              Veterinary Food
            </div>
            <div className='h-[35px] px-[15px] py-2.5 bg-[#f7f7f7] rounded-lg justify-center items-center gap-2.5 inline-flex text-[#6f6f6f] text-[13px] font-normal font-["Arial"]'>
              {" "}
              water & Environmental
            </div>
            <div className='h-[35px] px-[15px] py-2.5 bg-[#f7f7f7] rounded-lg justify-center items-center gap-2.5 inline-flex text-[#6f6f6f] text-[13px] font-normal font-["Arial"]'>
              Pharmaceutical
            </div>
            <div className='h-[35px] px-[15px] py-2.5 bg-[#f7f7f7] rounded-lg justify-center items-center gap-2.5 inline-flex text-[#6f6f6f] text-[13px] font-normal font-["Arial"]'>
              {" "}
              Industrial and Cosmetic
            </div>
          </div>
        </div>

        <div>
          <div className=" mt-14">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7">
              <div className="  rounded-xl  ">
                <div className="flex flex-col justify-center items-center mt-12 bg-[#E9F6F4]  h-[386px] relative">
                  <Image src={Product1} />
                  <Image src={ShopIcon} className="absolute top-2 right-4" />
                </div>
                <div className='text-black text-2xl font-normal font-["Arial"] leading-relaxed mt-5 ml-6'>
                  Product 01
                </div>
              </div>
              <div className="  rounded-xl  ">
                <div className="flex flex-col justify-center items-center mt-12 bg-[#E9F6F4]  h-[386px] relative">
                  <Image src={Product2} />
                  <Image src={ShopIcon} className="absolute top-2 right-4" />
                </div>
                <div className='text-black text-2xl font-normal font-["Arial"] leading-relaxed mt-5 ml-6'>
                  Product 01
                </div>
              </div>
              <div className="  rounded-xl  ">
                <div className="flex flex-col justify-center items-center mt-12 bg-[#E9F6F4]  h-[386px] relative">
                  <Image src={Product3} />
                  <Image src={ShopIcon} className="absolute top-2 right-4" />
                </div>
                <div className='text-black text-2xl font-normal font-["Arial"] leading-relaxed mt-5 ml-6'>
                  Product 01
                </div>
              </div>
              <div className="  rounded-xl  ">
                <div className="flex flex-col justify-center items-center mt-12 bg-[#E9F6F4]  h-[386px] relative">
                  <Image src={Product4} />
                  <Image src={ShopIcon} className="absolute top-2 right-4" />
                </div>
                <div className='text-black text-2xl font-normal font-["Arial"] leading-relaxed mt-5 ml-6'>
                  Product 01
                </div>
              </div>
              <div className="  rounded-xl  ">
                <div className="flex flex-col justify-center items-center mt-12 bg-[#E9F6F4]  h-[386px] relative">
                  <Image src={Product5} />
                  <Image src={ShopIcon} className="absolute top-2 right-4" />
                </div>
                <div className='text-black text-2xl font-normal font-["Arial"] leading-relaxed mt-5 ml-6'>
                  Product 01
                </div>
              </div>
              <div className="  rounded-xl  ">
                <div className="flex flex-col justify-center items-center mt-12 bg-[#E9F6F4]  h-[386px] relative">
                  <Image src={Product6} />
                  <Image src={ShopIcon} className="absolute top-2 right-4" />
                </div>
                <div className='text-black text-2xl font-normal font-["Arial"] leading-relaxed mt-5 ml-6'>
                  Product 01
                </div>
              </div>
              <div className="  rounded-xl  ">
                <div className="flex flex-col justify-center items-center mt-12 bg-[#E9F6F4]  h-[386px] relative">
                  <Image src={Product7} />
                  <Image src={ShopIcon} className="absolute top-2 right-4" />
                </div>
                <div className='text-black text-2xl font-normal font-["Arial"] leading-relaxed mt-5 ml-6'>
                  Product 01
                </div>
              </div>
              <div className="  rounded-xl  ">
                <div className="flex flex-col justify-center items-center mt-12 bg-[#E9F6F4]  h-[386px] relative">
                  <Image src={Product8} />
                  <Image src={ShopIcon} className="absolute top-2 right-4" />
                </div>
                <div className='text-black text-2xl font-normal font-["Arial"] leading-relaxed mt-5 ml-6'>
                  Product 01
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
