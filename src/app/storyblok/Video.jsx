import BackBtn from "@/assets/icons/BackBtn";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import React from "react";

const Video = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      style={{
        background:
          "linear-gradient(157.87deg, #3E6A58 -165.93%, #000000 85.55%)",
      }}
      className=" w-full md:px-[50px] xl:px-[93px] md-[52px] xl:pb-[89px] md:pb-[54px] md:pt-[36px] mx-auto "
    >
      <div className="max-w-[1237px] w-full mx-auto   ">
        <div className="max-w-[366px] w-full flex items-center gap-[22px] pl-[16px] md:pl-0">
          <Link
            href={"/meditation"}
            className="hidden  md:inline-block max-w-[16px] w-full "
          >
            <BackBtn />
          </Link>

          <div className="max-w-[328px] w-full font-proximaNova flex justify-center items-center  gap-[22px] md:gap-[9px] font-[600] leading-[68px] text-[16px] md:text-[20px] ">
            <p className="text-[#DCCEA4]   ">
              Video <span className="text-[#fff]">{">"}</span>{" "}
            </p>

            <p className="max-w-[251px] w-full underline decoration-1 underline-offset-4 text-[#fff]">
              {blok?.title}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1237px] w-full mx-auto">
        <>
          <video controls className="max-w-[1237px] w-full">
            <source src={blok?.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-white pb-[50px] md:pb-0 pt-[23px] max-w-[320px]  w-full mx-auto md:max-w-[1237px] md:mx-0 font-proximaNova ">
            <div className="max-w-[631px] w-full md:flex gap-[21px]  ">
              <h2 className="md:text-[30px] w-fit whitespace-nowrap text-[22px] leading-[32px] xl:text-[34px]   md:leading-[64px] font-semibold">
                {blok?.title}
              </h2>
              {/* Categories */}
              <div className="flex w-full max-w-[300px] items-center  md:justify-center ">
                <div className=" hidden md:block max-w-[40px] w-full  rotate-90 border-[#FFFFFF80] border"></div>
                <span className="text-[18px] font-[500] leading-[64px] ">
                  Categories:
                </span>
                <p className="text-[18px] whitespace-nowrap w-fit leading-[20px] text-[#DCCEA4] underline pl-[10px]">
                  {blok?.category}
                </p>
              </div>
            </div>
            <p className="xl:text-[22px] font-[400] text-[16px] lg:text-[20px]  leading-[26px] md:leading-[28px] w-full mt-[3px]">
              {blok?.description}
            </p>
          </div>
        </>
      </div>
    </div>
  );
};

export default Video;
