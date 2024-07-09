"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";

// SwiperCore.use([Autoplay]);
function MindfulnessSwiper() {
  const [pageIndex, setpageIndex] = useState(0);
  const data = [
    {
      title:
        "“Mindfulness encapsulates the essence of self compassion and self care. It’s about simply giving the same love and kindness to ourselves that we would readily give to others.”",
      doctorName: "— Dr. Jerome Puryear",
    },
    {
      title:
        "“Mindfulness encapsulates the essence of self compassion and self care. It’s about simply giving the same love and kindness to ourselves that we would readily give to others.”",
      doctorName: "— Dr. Jerome Puryear",
    },
    {
      title:
        "“Mindfulness encapsulates the essence of self compassion and self care. It’s about simply giving the same love and kindness to ourselves that we would readily give to others.”",
      doctorName: "— Dr. Jerome Puryear",
    },
    {
      title:
        "“Mindfulness encapsulates the essence of self compassion and self care. It’s about simply giving the same love and kindness to ourselves that we would readily give to others.”",
      doctorName: "— Dr. Jerome Puryear",
    },
  ];

  const swiperRef = useRef();

  return (
    <div className="w-full relative mx-auto mt-[12px] mb-[10px] md:mt-[140px] md:mb-[100px] lg:mb-[130px] lg:mt-[120px] xl:mt-[240px]">
      <Swiper
        onSlideChange={(e) => {
          setpageIndex(e?.activeIndex);
          console.log(e?.activeIndex);
        }}
        spaceBetween={1}
        slidesPerView={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full text-center font-proximaNova max-w-[343px] md:max-w-[629px] lg:max-w-[829px] xl:max-w-[1167px] mx-auto">
              <h1 className="w-full font-[600] text-[15px] leading-[18px] md:text-[25px] md:leading-[29px] lg:text-[34px] lg:leading-[39px] xl:text-[48px] xl:leading-[55px] text-[#B9AF91] ">
                {item.title}
              </h1>
              <p className="mt-[10px] md:mt-[19px] lg:mt-[35px] w-full mx-auto text-[#fff] md:opacity-100 opacity-65 font-sans text-[10px] leading-[10px] md:text-[13px] md:leading-[19px] lg:text-[18px] lg:leading-[25px]  xl:text-[26px] xl:leading-[36px] italic">
                {item.doctorName}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="md:hidden flex absolute  w-fit inset-x-0 mx-auto bottom-[-15px]  gap-[2.87px] items-center">
        {data.map((i, index) => (
          <div
            className={`rounded-full w-[3.12px] h-[3.12px] ${
              pageIndex == index ? "bg-[#fff]" : "bg-[#738478]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default MindfulnessSwiper;
