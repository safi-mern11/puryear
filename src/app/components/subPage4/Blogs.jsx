"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { getBlogCardImage } from "../../../../utils/functions";

const RecommendedBlog = ({ blog, slug }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case "FINANCIAL":
        return "bg-[#3EBBCA] border-[#0793A4] border-[1.3px] max-w-[146px]";
      case "SOCIAL":
        return "bg-[#BE457B] border-[#901049] border-[1.3px] max-w-[116px]";
      case "INTELLECTUAL":
        return "bg-[#DE5B4F] border-[#9B2317] border-[1.3px] max-w-[183px]";
      case "PHYSICAL":
        return "bg-[#2F86FF] border-[#166DE7] border-[1.3px] max-w-[146px]";
      default:
        return "bg-[#DE5B4F] border-[#0793A4] border-[1.3px] max-w-[146px]";
    }
  };
  const router = useRouter();
  return (
    <main
      className="xl:max-w-[615px] w-full font-proximaNova cursor-pointer xl:border-none xl:px-0 xl:py-0   md:pt-[14px] md:pr-[16px] md:pl-[13px] md:pb-[30px] md:rounded-[8px] md:border-[#8B7B4D80] md:border-[1px]   "
      onClick={() => {
        router.push(`blogs/${slug}`);
      }}
    >
      <img
        src={getBlogCardImage(blog?.category)}
        alt={blog?.title}
        className="xl:max-w-[615px] w-full xl:rounded-[30px] rounded-[8px]"
      />
      <div className="md:pt-[15px] pt-[16.37px]">
        <p
          className={` w-full  rounded-[30px] flex justify-center items-center font-[500] md:text-[18px] text-[14px] leading-[34px] tracking-[1px] font-proximaNova text-[#fff] border  ${getCategoryColor(
            blog?.category
          )}`}
        >
          {blog?.category}
        </p>
      </div>

      <h1 className="font-[700] xl:leading-[34px] xl:max-w-[547px] w-full xl:text-[26px] truncate  text-[24px] leading-[30px] text-[#5E480A] underline underline-offset-2 decoration-[1px] md:pt-[16px] pt-[19px]">
        {blog?.title}
      </h1>

      <p className="text-[#000000BF]  pl-[5px] md:mt-[16px] mt-[10px] w-full text-[16px] leading-[24px] xl:text-[20px] font-[400] xl:leading-[34px] tracking-[0.1px] font-proximaNova">
        {blog?.description?.content[0]?.content[0]?.text
          ?.split("")
          ?.slice(0, 130)
          ?.join("")}
        ...
      </p>
    </main>
  );
};

export default RecommendedBlog;
