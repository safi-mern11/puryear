"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";

function WhoWeHelpSwiper() {
  const data = [
    {
      SlideImage: "/who-we-help-swiper/stress.png",
      title: " Work Stress",
    },
    {
      SlideImage: "/who-we-help-swiper/belly.png",
      title: " Weight Managment",
    },
    {
      SlideImage: "/who-we-help-swiper/Mask group.png",
      title: "Fitness",
    },
    {
      SlideImage: "/who-we-help-swiper/stress.png",
      title: "Work Stress",
    },
    {
      SlideImage: "/who-we-help-swiper/belly.png",
      title: "Weight Managment",
    },
  ];
  const swiperRef = useRef();
  return (
    <div className="xl:max-w-[1450px]  lg:max-w-[1020px] md:max-w-[720px] max-w-[343px] mx-auto w-full bg-[#3C523F]  ">
      {/* Navigation */}
      <div className=" absolute flex md:hidden lg:flex   md:max-w-[710px] xl:max-w-[1370px] lg:max-w-[1020px] max-w-[343px] w-full  lg:px-[28px] mx-auto px-[7px] justify-between items-center mt-[157px] lg:mt-[205px] xl:mt-[209px] ">
        <button className="z-30" onClick={() => swiperRef.current?.slidePrev()}>
          <svg
            className="max-w-[18px] w-full lg:max-w-[32px]"
            viewBox="0 0 31 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.06454 28.4603L23.7889 51.1842C24.3145 51.7102 25.0161 52 25.7642 52C26.5124 52 27.214 51.7102 27.7396 51.1842L29.413 49.5111C30.502 48.4209 30.502 46.6491 29.413 45.5605L10.3308 26.4783L29.4342 7.3749C29.9598 6.8489 30.25 6.14769 30.25 5.4C30.25 4.65147 29.9598 3.95028 29.4342 3.42386L27.7607 1.75119C27.2347 1.22519 26.5335 0.935414 25.7854 0.935414C25.0373 0.935414 24.3357 1.22519 23.8101 1.75119L1.06454 24.4959C0.537706 25.0236 0.248344 25.7281 0.250006 26.4771C0.248345 27.2289 0.537707 27.933 1.06454 28.4603Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          className="z-30 lg:hidden xl:flex"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg
            className="max-w-[18px] w-full lg:max-w-[32px]"
            viewBox="0 0 38 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_40_46007)">
              <path
                d="M33.1855 24.4753L10.4611 1.75133C9.93548 1.22533 9.23387 0.935547 8.48576 0.935547C7.73765 0.935547 7.03604 1.22533 6.51045 1.75133L4.83695 3.42441C3.748 4.51461 3.748 6.28649 4.83695 7.37503L23.9192 26.4573L4.81578 45.5606C4.29019 46.0867 4 46.7879 4 47.5355C4 48.2841 4.29019 48.9853 4.81578 49.5117L6.48927 51.1844C7.01528 51.7104 7.71648 52.0001 8.46459 52.0001C9.2127 52.0001 9.91431 51.7104 10.4399 51.1844L33.1855 28.4396C33.7123 27.912 34.0017 27.2074 34 26.4585C34.0017 25.7067 33.7123 25.0025 33.1855 24.4753Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_40_46007"
                x="0"
                y="0.935547"
                width="38"
                height="67.0647"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="12" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.81 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_40_46007"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_40_46007"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
      </div>
      {/* swiper */}
      <div className="xl:max-w-[1450px]  lg:max-w-[1020px] md:max-w-[720px]  max-w-[343px] w-full md:ml-[52px] lg:ml-[76px] overflow-x-hidden rounded-[1px] md:rounded-[30px]  ">
        <Swiper
          className="z-40 cursor-pointer "
          modules={[Pagination, Navigation]}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            1440: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            375: {
              slidesPerView: 1,
            },
          }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {data.map((items, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  src={`${items.SlideImage}`}
                  className="max-h-[345px] md:max-h-[463px]"
                  alt=""
                />
                <h1 className=" hidden md:flex justify-center items-center mt-[30px] w-full md:text-[30px] leading-[28px] lg:text-[32px] lg:leading-[28px] lg:tracking-[0.1px] font-proximaNova font-[600] text-[#fff]">
                  {items.title}
                </h1>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default WhoWeHelpSwiper;
