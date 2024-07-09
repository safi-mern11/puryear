import React from "react";
import { storyblokEditable } from "@storyblok/react";
import Button from "@/app/components/common/Button";

const FeaturedBlog = ({ blok }) => {
  return (<></>
    // <div
    //   {...storyblokEditable(blok)}
    //   className="max-w-[343px] md:max-w-[672px] lg:max-w-[944px] xl:max-w-[1259px] w-full mx-auto lg:pt-[80px] md:pt-[74px] pt-[50px] pb-[38px] md:pb-[50px] lg:pb-0"
    // >
    //   <div className="w-full md:flex justify-between items-center">
    //     <h1 className="lg:max-w-[250px] md:max-w-[177px] w-full text-[#505050] font-[600] lg:text-[24px] md:text-[18px] text-[16px] leading-[34px] lg:tracking-[3px] tracking-[2px]">
    //       FEATURED BLOG
    //     </h1>

    //     <div className="max-w-[1009px] w-full mt-[14px] md:mt-0">
    //       <div className="w-full  border-[#0000004D] border"></div>
    //     </div>
    //   </div>
    //   {/* left-div-Image */}
    //   <div className="max-w-[343px] md:max-w-[672px] lg:max-w-[944px] xl:max-w-[1259px] w-full md:flex mt-[28px] md:mt-[23px] lg:mt-[63px] xl:mt-[52px] justify-between">
    //     <div className="max-w-[343px] md:max-w-[272px] lg:max-w-[433px] xl:max-w-[626px]  w-full">
    //       <img
    //         className="xl:min-h-[514px] xl:min-w-[626px] lg:min-h-[356px] lg:min-w-[433px] md:min-h-[223px] min-h-[281px] md:min-w-[273px] min-w-[343px] object-cover"
    //         style={{
    //           borderRadius: "0px 30px 0px 30px",
    //         }}
    //         src={blok?.blogs?.content?.blogImage?.filename}
    //         alt="self-care"
    //       />
    //     </div>

    //     {/* right-div-Content */}
    //     <div className="max-w-[361px] lg:max-w-[459px] xl:max-w-[559px]  w-full font-proximaNova">
    //       <h1 className="max-w-[547px] w-full text-[#5E480A] mt-[28px] md:mt-0 text-start  text-[28px] leading-[32px] md:text-[36px] md:leading-[44px] lg:text-[46px] lg:leading-[58px] xl:text-[50px]  xl:leading-[63px] font-[700] underline decoration-1 underline-offset-4 ">
    //         {blok?.blogs?.content?.title.split("").slice(0, 40).join("")}...
    //       </h1>

    //       <h2 className=" xl:ml-[20px] max-w-[474px] w-full text-[18px] leading-[26px] lg:text-[24px] lg:leading-[30px]  xl:leading-[29px] font-[500] text-[#5E480A] lg:mt-[15px] md:mt-[12px] mt-[20px] ">
    //         {/* {data.title2} */}
    //       </h2>

    //       <p className="  max-w-[559px] w-full text-[16px] leading-[26px] md:leading-[28px] lg:text-[19px] lg:leading-[30px] xl:text-[20px] xl:leading-[34px] lg:mt-[22px] md:mt-[12px] mt-[20px] font-[500] text-[#000000BF]">
    //         {blok?.blogs?.content?.description.content[0].content[0].text
    //           .split("")
    //           .slice(0, 250)
    //           .join("")}
    //         ...
    //       </p>
    //       <Button
    //         text={"Full Article"}
    //         href={blok?.blogs?.full_slug}
    //         lg
    //         extraClasses={
    //           "bg-[#245A1E] hidden md:inline-block py-[19px] md:max-w-[243px]  xl:max-w-[293px] md:text-[18px] xl:text-[22px] font-[600] leading-[22px] text-[#FFF] lg:mt-[22px] mt-[28px]   "
    //         }
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default FeaturedBlog;
