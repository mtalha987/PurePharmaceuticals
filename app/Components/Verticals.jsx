"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Vertical1 from "@/public/images/binAli.svg";
import Vertical2 from "@/public/images/safeGreen.svg";
import Vertical3 from "@/public/images/safeBlue.svg";
import Vertical4 from "@/public/images/safeEx.svg";
import Vertical5 from "@/public/images/careMedical.svg";
import Vertical6 from "@/public/images/ajDrugs.svg";
import Vertical7 from "@/public/images/jurhy.svg";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Verticals = () => {
  return (
    <>
      <div className="mt-24 px-14 xs:px-5">
        <h2 className="text-black text-2xl font-normal font-['Arial'] leading-relaxed text-center">
          Our Verticals
        </h2>
        <div className="mt-14">
          <div className="flex flex-wrap justify-center gap-16">
            <Image
              src={Vertical4}
              alt="COMPANY name"
              className="grayscale hover:grayscale-0"
            />
            <Image
              src={Vertical5}
              alt="COMPANY name"
              className="grayscale hover:grayscale-0"
            />
            <Image
              src={Vertical6}
              alt="COMPANY name"
              className="grayscale hover:grayscale-0"
            />
            <Image
              src={Vertical7}
              alt="COMPANY name"
              className="grayscale hover:grayscale-0"
            />
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <Image
                  src={Vertical1}
                  alt="COMPANY name"
                  className="grayscale hover:grayscale-0"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Vertical2}
                  alt="COMPANY name"
                  className="grayscale hover:grayscale-0"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src={Vertical3}
                  alt="COMPANY name"
                  className="grayscale hover:grayscale-0"
                />
              </SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verticals;
