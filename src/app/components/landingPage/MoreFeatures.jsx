"use client"
import { useState } from "react";
import Button from "../common/Button";
import DisclaimerModal from "../common/DisclaimerModal";
import FeaturesSwiper from "./FeaturesSwiper";

function MoreFeatures() {
  const [disclaimerModel, setDisclaimerModel] = useState(false);
  return (
    <>
      {disclaimerModel && (
        <DisclaimerModal setDisclaimerModel={setDisclaimerModel} />
      )}
      <h1 className="max-w-[342px] md:max-w-[342px] lg:max-w-[459px] xl:max-w-[638px] lg:text-[28px] lg:leading-[32px]  text-[24px] capitalize leading-[29px] tracking-[-0.14px]  text-center  w-full mx-auto xl:text-[45px] text-[#5E480A] xl:mt-[93px] lg:mt-[66px] md:mt-[49px] mt-[28px] font-proximaNova  font-[400] xl:leading-[55px] ">
        Let's get you living with wellness, joy, and{" "}
        <span className="font-[700] ">purpose</span>
      </h1>
      <div className="max-w-[180px]  pt-[20px] xl:pt-[37px] lg:pt-[25px] md:pt-[19px] md:max-w-[151px] lg:max-w-[201px]  xl:max-w-[283px] mx-auto  ">

        <button
          onClick={() => {
            setDisclaimerModel(true);
          }}
          className="hover:scale-105 font-proximaNova hover:opacity-90 transition-all duration-100 ease-linear  rounded-[30px]  bg-[#8B7B4D] max-w-[180px] xl:text-[19px] xl:leading-[19px] xl:px-[61px] lg:px-[42px] lg:py-[13.5px] xl:py-[19px] text-[12px] md:text-[10px] py-[12px] px-[39px] md:py-[10px] md:px-[32px] xl:max-w-[283px] lg:text-[13.5px] lg:leading-[13px] lg:max-w-[201px]  font-[700]  text-[#fff] w-full"
        >
          Book Consultation
        </button>
      </div>
      <h1 className=" max-w-[193px] xl:max-w-[372px] text-center text-[30px] leading-[25px]  md:text-[36px] md:leading-[56px] md:max-w-[234px]  w-full mx-auto  text-[#5E480A] lg:mt-[64px] md:mt-[48px] xl:mt-[89px]  xl:text-[56px] xl:font-[400] xl:leading-[48px] tracking-[-1px] mt-[20px]">
        More <span className="font-[700]">Features</span>
      </h1>

      {/* swipper */}
      <div className="  xl:max-w-[1709px] max-w-[264px] md:max-w-[1709px] w-full  mx-auto ">
        <FeaturesSwiper />
      </div>
    </>
  );
}

export default MoreFeatures;
