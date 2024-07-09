import {
  RichTextSchema,
  renderRichText,
  storyblokEditable,
} from "@storyblok/react";
import React from "react";

export const Blog = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="max-w-[375px] md:max-w-[672px] lg:max-w-[890px] xl:max-w-[1198px] w-full mx-auto font-proximaNova "
    >
      {/* title And About div */}
      <div className="w-full max-w-[343px] md:max-w-[672px] lg:max-w-[890px] xl:max-w-[1198px] xl:flex  pt-[100px] mx-auto xl:mx-0  ">
        {/* heading */}
        <h1 className="max-w-[343px] md:max-w-[672px] lg:max-w-[890px] break-words  xl:max-w-[940px]  w-full lg:text-[46px] lg:leading-[63px]  text-[28px] leading-[32px] xl:text-[50px] font-[700] xl:leading-[63px] text-[#5E480A]">
          {blok?.title}
        </h1>
        {/* About-Author */}
        <div className="md:max-w-[242px] max-w-[276px]  w-full xl:mt-0 md:mt-[23px] mt-[20px]">
          <div className="w-full flex justify-between items-center md:items-start  ">
            <div className="max-w-[40px] md:max-w-[55px] w-full rounded-full overflow-hidden">
              <img src={blok?.authorAvatar?.filename} alt="" />
            </div>
            <div className="max-w-[220px] w-full md:max-w-[168px]">
              <h2 className="max-w-[140px]  text-[20px] font-[600] leading-0 md:leading-[44px] w-full">
                by {blok?.authorName}
              </h2>
              <p className="max-w-[220px]  md:max-w-[168px] text-[16px] md:text-[17px] font-[600] leading-[22px] text-[#00000080] w-full">
                {blok?.authorQualification}
              </p>
            </div>
          </div>
          <div className="max-w-[242px] bg-[#614C12] w-full mt-[20px]  hidden md:inline-block ">
            <div className="w-full min-h-[7px] h-full"></div>
          </div>
        </div>
      </div>

      {/* created date div */}
      <div className="max-w-[180px] w-full xl:mt-[7px] lg:mt-[37px] hidden md:inline-block">
        <h1 className="max-w-[180px] w-full text-[20px] font-[600] leading-[34px]">
          Lorem vellum ipsum
        </h1>
        <p className="w-full font-[600] leading-[34px] text-[19px] text-[#00000080]">
          {blok?.date.split(" ")[0]}
        </p>
      </div>
      <div className=" inline-block xl:hidden lg:mt-[38px] md:mt-[30px] mt-[35px]">
        <img
          src={blok?.blogImage?.filename}
          alt="reading-blog"
          className="md:h-auto h-[308px] object-cover"
        />
      </div>

      {/* <div className="inline-block md:hidden mt-[35px] ">
      <img src="/blogs/reading-blog-sm.png" alt="reading-blog" />
    </div> */}
      <div
        dangerouslySetInnerHTML={{
          __html: renderRichText(blok?.description, {
            schema: {
              ...RichTextSchema,
            },
          }),
        }}
        className="max-w-[343px] md:max-w-[672px] lg:max-w-[890px] lg:text-[20px]  text-[16px]  xl:max-w-[1192px] w-full mt-[40px] md:mt-[30px] lg:mt-[39px] xl:mt-[59px] mx-auto xl:mx-0"
      />
    </div>
  );
};
