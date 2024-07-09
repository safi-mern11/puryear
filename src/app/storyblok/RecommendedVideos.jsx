"use client";
import { useRef, useState } from "react";
import { storyblokEditable } from "@storyblok/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import LeftBtn from "@/assets/icons/LeftBtn";
import RightBtn from "@/assets/icons/RightBtn";
import VideoIconSvg from "@/assets/icons/VideoIconSvg";
import { useRouter } from "next/navigation";

const RecommendedVideos = ({ blok }) => {
  const router = useRouter();
  const swiperRef = useRef();
  console.log(blok, "recommended_video");
  return (
    <div
      {...storyblokEditable(blok)}
      className="xl:max-w-[1345px] lg:max-w-[1278px] w-full mx-auto overflow-hidden"
    >
      <h1
        className={`md:ml-[55px] mx-auto md:mx-0 lg:ml-[43px] xl:max-w-[1246px] w-full md:w-full md:max-w-[750px] font-[600] text-[28px] leading-[32px] max-w-[196px] text-center md:text-start xl:mx-auto xl:text-[50px] xl:leading-[68px] text-[#5E480A]`}
      >
        Recommended Videos
      </h1>

      <div className="xl:max-w-[1345px] max-w-[1278px]   w-full  md:ml-[55px] lg:ml-[25px] xl:ml-[10px]">
        {/* navigation */}
        <div
          className={`md:absolute md:flex hidden xl:max-w-[1320px]  xl:mr-[0px] lg:max-w-[849px] md:max-w-[443px] w-full mx-auto px-[15px] md:px-0 justify-between items-center z-30 lg:mt-[218px] md:mt-[147px] mt-[-63px] `}
        >
          <button
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
          >
            <LeftBtn extraStyle={"md:hidden block"} />
          </button>

          <button
            className="xl:flex md:hidden flex"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <RightBtn extraStyle={"md:hidden block"} />
          </button>
        </div>
        {/* swiper */}
        <div className="z-20 max-w-[1237px] mt-[28px] px-[9px] md:px-0  lg:ml-[36px] xl:ml-[41px] md:ml-[42px]  md:mt-[21px] lg:mt-[20px]   w-full relative rounded-[8px] mx-auto">
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
            {blok?.videos?.map((video) => (
              <SwiperSlide key={video?.id}>
                <div
                  key={video?.content?.id}
                  className="border mx-auto rounded-[8px] md:pb-[16px] md:pl-[13px] md:pr-[16px] md:pt-[14px] max-w-[359px] md:max-w-[399px] w-full border-[#8B7B4D80]   font-proximaNova cursor-pointer pb-[30px] "
                  onClick={() => {
                    router.push(`/meditation/${video?.slug}`);
                  }}
                >
                  <div className="relative ">
                    <div className="absolute h-[193px] inset-0 md:h-[198px] flex justify-center items-center max-w-[357px] xl:max-w-[365px] md:max-w-[370px] w-full bg-[#000000BF] z-[20] md:rounded-[8px] rounded-t-lg ">
                      <img
                        src="/mindful-meditation-video/button_play-icon.png"
                        alt=""
                      />
                    </div>
                    <video
                      src={video?.content?.videoUrl}
                      alt={video?.content?.title}
                      className="md:max-h-[198px] md:rounded-[8px] rounded-t-lg  md:max-w-[370px] md:min-h-[198px] md:min-w-[370px] max-h-[193px] max-w-[357px] min-h-[193px] min-w-[357px] object-cover object-center    xl:pr-[6px]"
                    />{" "}
                  </div>
                  <div className="w-full flex gap-[9px] items-center md:px-[4px] px-[20px] ">
                    <div className="max-w-[26px] w-full ">
                      {" "}
                      <VideoIconSvg />
                    </div>
                    <h3 className="text-[22px] md:text-[24px] font-[600] leading-[64px] text-[#4A4946]">
                      {" "}
                      {video?.content?.title}
                    </h3>
                  </div>
                  <p className="text-[#5E480ABF] md:px-[4px] px-[20px] ">
                    categories:{" "}
                    <span className="text-[#245A1E] underline cursor-pointer text-[16px] font-[600] leading-[20px]">
                      {video?.content?.category}
                    </span>{" "}
                  </p>
                  <p className="text-[#000000BF] break-words md:pl-[5px] px-[20px] md:pr-[0px] xl:max-w-[354px] min-h-[120px]  mt-[14px]  w-full text-[16px] font-[400] leading-[26px] md:leading-[20px] font-proximaNova">
                    {video?.content?.description
                      .split("")
                      .slice(0, 220)
                      .join("")}
                    ...
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RecommendedVideos;
