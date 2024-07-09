"use client"
import React, { useState } from "react";
import Button from "../common/Button";
import DisclaimerModal from "../common/DisclaimerModal";

function StartLivingBestLife() {
  const [disclaimerModel, setDisclaimerModel] = useState(false);
  return (
    <>
      {disclaimerModel && (
        <DisclaimerModal setDisclaimerModel={setDisclaimerModel} />
      )}
      <div className="z-20  justify-center items-center min-h-[511px] overflow-hidden pt-[32px] md:pt-0 md:flex lg:min-h-[493px] xl:min-h-[690px] max-w-[329px] bg-[url('/hero-section/bg-green.png')] bg-cover bg-center   relative  xl:max-w-[1274px] md:max-w-[687px] md:min-h-[372px] lg:max-w-[909px] mx-auto rounded-[23px] md:rounded-[19px] lg:rounded-[37px] xl:mt-[92px] lg:mt-[54px] md:mt-[42px] mt-[17px]  w-full xl:pt-[33px] ">
        <div className="xl:max-w-[1193px] w-full md:max-w-[938px] ">
          {/* main-content-div */}
          <div className="xl:max-w-[1286px] w-full lg:max-w-[984px] md:max-w-[938px] max-w-[420px] md:flex  justify-between xl:mt-[-132px]">
            {/* left-div */}
            <div className="max-w-[263px] md:max-w-[263px] md:ml-[64px]  lg:ml-[84px]  xl:ml-0 md:text-start md:mx-0  lg:max-w-[348px] xl:pl-[79px]  xl:max-w-[652px] mx-auto w-full text-center xl:text-start  xl:pt-[114px] ">
              <h1 className="text-[#DCCEA4] capitalize lg:max-w-[348px]  md:max-w-[263px] lg:mx-0  text-[26px] leading-[26px]  font-proximaNova  xl:max-w-[652px]  lg:text-[34px] lg:leading-[35px] xl:text-[48px] xl:leading-[49px]  w-full  font-[400]  ">
                {" "}
                Start living your best life
                <span className=" capitalize xl:text-[54px] lg:text-[34px] lg:leading-[35px] font-[700] xl:leading-[62px] xl:ml-4 md:ml-2">
                  Today
                </span>
              </h1>
              <p className="capitalize mt-[10px] md:mt-[20px] lg:mt-[28px] xl:mt-[38px] max-w-[255px] xl:max-w-[473px] lg:max-w-[348px] mx-auto md:max-w-[255px] text-[9.89px] leading-[18px] tracking-[-0.45px]   md:mx-0  w-full   lg:text-[13px] xl:text-[18px] xl:leading-[34px] opacity-[66%] font-[400]  lg:leading-[24px] text-[#fff] font-proximaNova">
                My 6-Pillar Lifelong Wellness Method shows you how to achieve a
                wide range of health goals, including{" "}
                <span className="font-[700]">
                  weight management, stress reduction, improving sleep, nutrition,{" "}
                </span>{" "}
                and{" "}
                <span className="font-[700] ">
                  {" "}
                  activity habits, managing chronic conditions,{" "}
                </span>
                and{" "}
                <span className="font-[700]">enhancing overall well-being.</span>
              </p>

              <div className="xl:max-w-[235px]  max-w-[191px]  pt-[11px] mx-auto md:mx-0 xl:pt-[61px]  lg:pt-[32px] md:pt-[23px] lg:max-w-[168px] md:max-w-[127px] w-full">

                <button
                  onClick={() => {
                    setDisclaimerModel(true);
                  }}
                  className="hover:scale-105 font-proximaNova hover:opacity-90 transition-all duration-100 ease-linear xl:max-w-[235px] rounded-[23px] max-w-[191px] bg-[#C8B377] text-[12.85px] leading-[12.85px]  py-[12.87px] lg:text-[11.2px] lg:leading-[11px] font-[700] text-[#042200] md:leading-[8.54px] md:text-[8.54px] md:pt-[8.54px] md:pb-[8.1px]  xl:leading-[15px] xl:py-[15px]  xl:text-[15px] w-full"
                >
                  Book Consultation
                </button>
              </div>
            </div>
            {/* right-div */}
            <div className="max-w-[420px]  w-full flex items-end justify-end absolute  mt-[5px] ml-[55px] md:top-[18px] lg:top-[85px] md:right-[-66px] lg:right-[-117px] xl:right-[-162px] lg:mt-[-80px]  xl:mt-[-53px] xl:max-w-[780px]  lg:max-w-[580px] ">
              <img src="/work-with-me/main.png" alt="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartLivingBestLife;
