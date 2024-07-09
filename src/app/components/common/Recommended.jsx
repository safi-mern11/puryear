"use client";

import VideoIconSvg from "@/assets/icons/VideoIconSvg";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import LeftBtn from "@/assets/icons/LeftBtn";
import RightBtn from "@/assets/icons/RightBtn";

function Recommended({
  title,
  data,
  titleStyle,
  paraStyle,
  videos,
  blogs,
  href,
  swiperStyle,
  navigationStyleDiv,
  smNavigation,
  lgNavigation,
  headingStyle,
}) {
  const [active, setActive] = useState(null);
  const swiperRef = useRef();

  return (
    <div className="xl:max-w-[1345px] lg:max-w-[1278px] w-full mx-auto overflow-hidden">
      <h1
        className={`  md:ml-[55px]   mx-auto md:mx-0  lg:ml-[43px] xl:max-w-[1246px]  w-full md:w-full md:max-w-[750px] font-[600] text-[28px] leading-[32px] max-w-[196px]  text-center md:text-start xl:mx-auto   xl:text-[50px] xl:leading-[68px] text-[#5E480A]  ${headingStyle} `}
      >
        {title}
      </h1>

      <div className="xl:max-w-[1345px] max-w-[1278px]   w-full  md:ml-[55px] lg:ml-[25px] xl:ml-[10px]">
        {/* navigation */}
        <div
          className={`md:absolute md:flex hidden xl:max-w-[1320px]  xl:mr-[0px] lg:max-w-[849px] md:max-w-[443px] w-full mx-auto px-[15px] md:px-0 justify-between items-center z-30 ${navigationStyleDiv}`}
        >
          <button
            onClick={() => {
              swiperRef.current?.slidePrev();
              setActive(swiperRef?.current?.activeIndex);
            }}
          >
            {lgNavigation && (
              <svg
                className="md:block hidden ml-[-9px]"
                width="24"
                height="40"
                viewBox="0 0 24 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.638396 21.5608L18.4389 39.361C18.8506 39.773 19.4002 40 19.9862 40C20.5722 40 21.1218 39.773 21.5335 39.361L22.8444 38.0504C23.6974 37.1964 23.6974 35.8085 22.8444 34.9558L7.89687 20.0083L22.861 5.04419C23.2727 4.63216 23.5 4.08289 23.5 3.49721C23.5 2.91087 23.2727 2.3616 22.861 1.94925L21.5501 0.639015C21.1381 0.22699 20.5888 4.28113e-07 20.0028 5.14291e-07C19.4168 6.00468e-07 18.8672 0.22699 18.4555 0.639016L0.638396 18.4555C0.225716 18.8688 -0.000947114 19.4207 0.000353728 20.0073C-0.000947053 20.5963 0.225717 21.1478 0.638396 21.5608Z"
                  fill="#245A1E"
                  fillOpacity={active > 0 ? "1" : "0.25"}
                />
              </svg>
            )}
            {smNavigation && <LeftBtn extraStyle={"md:hidden block"} />}
          </button>

          <button
            className="xl:flex md:hidden flex"
            onClick={() => swiperRef.current?.slideNext()}
          >
            {lgNavigation && (
              <svg
                className="xl:block hidden "
                width="24"
                height="40"
                viewBox="0 0 24 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.8616 18.4392L5.0611 0.639019C4.64939 0.22699 4.0998 0 3.51379 0C2.92778 0 2.37819 0.22699 1.96649 0.639019L0.655605 1.94958C-0.197396 2.80355 -0.197396 4.19151 0.655605 5.04419L15.6031 19.9917L0.639019 34.9558C0.227315 35.3678 0 35.9171 0 36.5028C0 37.0891 0.227315 37.6384 0.639019 38.0508L1.9499 39.361C2.36193 39.773 2.9112 40 3.49721 40C4.08322 40 4.63281 39.773 5.04451 39.361L22.8616 21.5445C23.2743 21.1312 23.5009 20.5793 23.4996 19.9927C23.5009 19.4037 23.2743 18.8522 22.8616 18.4392Z"
                  fill="#245A1E"
                  fillOpacity={active < data.length - 1 ? "1" : "0.25"}
                />
              </svg>
            )}
            {smNavigation && <RightBtn extraStyle={"md:hidden block"} />}
          </button>
        </div>
        {/* swiper */}
        <div className="z-20 max-w-[1237px] mt-[28px] px-[9px] md:px-0  lg:ml-[36px] xl:ml-[41px] md:ml-[42px]  md:mt-[21px] lg:mt-[-20px] xl:mt-0  w-full relative rounded-[8px] mx-auto">
          <Swiper
            modules={[Navigation]}
            spaceBetween={18}
            slidesPerView={1}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              1440: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 2.6,
              },
              768: {
                slidesPerView: 1.9,
              },
              375: {
                slidesPerView: 1,
              },
            }}
          >
            {data.map((video) => (
              <SwiperSlide key={video.id}>
                <div
                  className={`xl:mt-[33px] lg:mt-[41px] pb-[36px] md:pl-[13px] rounded-[8px] md:pr-[16px] md:pt-[14px] max-w-[399px] w-full border  border-[#8B7B4D80] font-proximaNova cursor-pointer ${swiperStyle}  `}
                >
                  <Link href={`/${href}/${video.id}`}>
                    <img
                      src={video.imgSrc}
                      alt={video.title}
                      className="w-full mb-4"
                    />
                  </Link>
                  {blogs && (
                    <p
                      className={` max-w-[183px] w-full rounded-[30px] flex justify-center items-center font-[500] text-[18px] leading-[34px] tracking-[1px] font-proximaNova text-[#fff] border md:ml-0 ml-[20px] ${getCategoryColor(
                        video.category
                      )}`}
                    >
                      {video.category}
                    </p>
                  )}
                  <div className="w-full flex gap-[9px] items-center md:px-[4px]  px-[20px]">
                    {videos && (
                      <div className="max-w-[26px] w-full">
                        <VideoIconSvg />
                      </div>
                    )}
                    <h3 className={`${titleStyle} `}>{video.title}</h3>
                  </div>
                  {videos && (
                    <p className="text-[#5E480ABF] md:px-[4px]  px-[20px]">
                      Categories:{" "}
                      <span className="text-[#245A1E] underline cursor-pointer text-[16px] font-[600] leading-[20px]">
                        {video.category}
                      </span>
                    </p>
                  )}

                  <p
                    className={`${paraStyle} text-[#000000BF]  md:pl-[0] pl-[5px]   md:ml-[5px] ml-0 mt-[14px] w-full text-[16px] font-[400] leading-[20px] font-proximaNova`}
                  >
                    {video.description}...
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
