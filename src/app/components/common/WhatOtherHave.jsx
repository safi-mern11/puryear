"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";

function WhatOtherHave({ bg }) {
  const data = [
    {
      img: "/review-swiper-img/review-1.png",
    },
    {
      img: "/review-swiper-img/review-1.png",
    },
    {
      img: "/review-swiper-img/review-1.png",
    },
    {
      img: "/review-swiper-img/review-1.png",
    },
  ];

  return (
    <div
      className={` lg:pt-[98px] ${
        bg ? "bg-[#EDEAE4]" : ""
      }  relative lg:pb-[48px] pt-[21px] md:pt-[52px] pb-[6px] md:pb-[49px]`}
    >
      <h1 className="lg:max-w-[605px] md:max-w-[271px] w-full lg:text-[44px] font-[400] lg:leading-[48px] text-[23px] leading-[25px] md:leading-[26px] mx-auto text-[#5E480A] text-center">
        What others have to{" "}
        <span className="font-[700] inline-block"> say...</span>
      </h1>

      <div className="lg:max-w-[1844px] md:max-w-[771px] md:min-h-[347px]  w-full absolute flex  top-0 justify-between">
        <div
          style={{
            background:
              "linear-gradient(270deg, rgba(237, 234, 228, 0) 0%, #EDEAE4 100%)",
          }}
          className="max-w-[261px] w-full z-30 lg:min-h-[648px] md:min-h-[347px] "
        ></div>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(237, 234, 228, 0) 0%, #EDEAE4 100%)",
          }}
          className="max-w-[261px] w-full z-30 lg:min-h-[648px]  "
        ></div>
      </div>
      <div className="md:max-w-[988px] lg:max-w-[1844px] w-full mx-auto md:mt-[31px] lg:mt-[59px] mt-[20px] max-w-[318px]  ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={31}
          loop={true}
          pagination={true}
          breakpoints={{
            1440: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            375: {
              slidesPerView: 1,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="rounded-[24px]">
              <img src={item.img} alt="reviews" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default WhatOtherHave;
