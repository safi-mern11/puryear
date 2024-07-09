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
import { getBlogCardImage, getCategoryColor } from "../../../utils/functions";
import { useRouter } from "next/navigation";

export const RecommendedBlogs = ({ blok }) => {
  const swiperRef = useRef();
  const router = useRouter();
  return (
    <div
      {...storyblokEditable(blok)}
      className="xl:max-w-[1345px] lg:max-w-[1278px] w-full mx-auto overflow-hidden"
    >
      <h1
        className={`md:ml-[55px] mx-auto md:mx-0 lg:ml-[43px] xl:max-w-[1246px] w-full md:w-full md:max-w-[750px] font-[600] text-[28px] leading-[32px] max-w-[196px] text-center md:text-start xl:mx-auto xl:text-[50px] xl:leading-[68px] text-[#5E480A]`}
      >
        Recommended Blogs
      </h1>

      <div className="xl:max-w-[1345px] max-w-[1278px] w-full md:ml-[55px] lg:ml-[25px] xl:ml-[10px]">
        {/* navigation */}
        <div
          className={`md:absolute md:flex hidden xl:max-w-[1320px] xl:mr-[0px] lg:max-w-[849px] md:max-w-[443px] w-full mx-auto px-[15px] md:px-0 justify-between items-center z-30 mt-[143px]`}
        >
          <button
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
          >
            <LeftBtn />
          </button>

          <button
            className="xl:flex md:hidden flex"
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
          >
            <RightBtn />
          </button>
        </div>
        {/* swiper */}
        <div className="z-20 max-w-[1237px] mt-[28px] px-[9px] md:px-0 lg:ml-[36px] xl:ml-[41px] md:ml-[42px] md:mt-[21px] lg:mt-[20px]  w-full relative rounded-[8px] mx-auto">
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
            {blok.blogs.map((blog) => (
              <SwiperSlide key={blog?.id}>
                <div
                  onClick={() => router.push(blog.slug)}
                  className={`md:border mx-auto rounded-[8px] md:pb-[16px] md:pl-[13px] md:pr-[16px] md:pt-[14px] max-w-[359px] md:max-w-[399px] w-full border-[#8B7B4D80]   font-proximaNova cursor-pointer pb-[30px] `}
                >
                  {/* <Link href={blok.full_slug}> */}
                  <img
                    src={getBlogCardImage(blog?.content?.category)}
                    alt={blog?.content?.category}
                    className="w-full mb-4 rounded-[10px]"
                  />
                  {/* </Link> */}
                  <p
                    className={`max-w-[183px] w-full rounded-[30px] flex justify-center items-center font-[500] text-[18px] leading-[34px] tracking-[1px] font-proximaNova text-[#fff] border md:ml-0 ml-[20px] ${getCategoryColor(
                      blog?.content?.category
                    )}`}
                  >
                    {blog?.content?.category}
                  </p>
                  <div className="w-full flex gap-[9px] items-center md:px-[4px] px-[20px]">
                    <h3
                      className={`font-[700] leading-[30px] text-[24px] text-[#5E480A] underline underline-offset-2 decoration-[1px] mt-[15px]`}
                    >
                      {blog?.content?.title.split("").slice(0, 50).join("")}...
                    </h3>
                  </div>
                  <p
                    className={`text-[#000000BF] md:pl-[0] pl-[5px] md:ml-[5px] ml-0 mt-[14px] w-full text-[16px] font-[400] leading-[20px] font-proximaNova `}
                  >
                    {blog?.content?.description?.content[0]?.content[0]?.text
                      ?.split("")
                      ?.slice(0, 130)
                      ?.join("")}
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

export default RecommendedBlogs;
