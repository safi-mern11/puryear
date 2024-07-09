"use client";
import { useState } from "react";
import DisclaimerModal from "../common/DisclaimerModal";

function Hero() {
  const [disclaimerModel, setDisclaimerModel] = useState(false);
  return (
    <>
      {disclaimerModel && (
        <DisclaimerModal setDisclaimerModel={setDisclaimerModel} />
      )}
      <div className="z-20 xl:mt-[16px] justify-center items-center min-h-[360px] md:min-h-[419px] flex lg:min-h-[573px] lg:pt-[53px] lg:pb-[34px] xl:min-h-[679px]  bg-[url('/hero-section/bg-green.png')] bg-cover bg-center pt-[38px]   relative  xl:pt-[75px] w-full pb-[9px] md:pb-[25px] xl:pb-[48px] ">
        {/* main-content-div */}
        <div className="xl:max-w-[1203px] w-full lg:max-w-[856px] md:max-w-[644px] md:flex  justify-between ">
          <div className="max-w-[375px] md:max-w-[349px] md:text-start md:mx-0  lg:max-w-[464px]  xl:max-w-[652px] mx-auto w-full text-center xl:text-start  ">
            <h1 className="text-[#B9AF91] md:max-w-[434px] lg:mx-0  text-[30px] leading-[30px]  font-proximaNova lg:max-w-[637px] xl:max-w-[652px]  justify-center md:text-[30px]  md:leading-[30px] xl:pt-[120px] lg:pt-[108px] md:pt-[81px] lg:text-[41px] lg:leading-[39px] xl:text-[57px] xl:leading-[57px]  w-full block font-[400] md:justify-normal lg:justify-normal  gap-[2px] md:gap-[8px]">
              {" "}
              Your Lifelong Wellness Goals:
              <span className=" xl:text-[57px] xl:leading-[57px] lg:text-[41px] lg:leading-[39px] font-[700]  ml-2 lg:ml-4">
                Now Achievable
              </span>
            </h1>
            <p className="pt-[11px] md:pt-[9px] lg:pt-[25px] xl:pt-[33px] max-w-[334px] xl:max-w-[610px] mx-auto md:max-w-[453px]  lg:text-[16px]  lg:mx-0  w-full  text-[12px] leading-[18px] lg:leading-[24px] xl:text-[22px] xl:leading-[34px] opacity-[79%] font-[400] text-[#fff] lg:max-w-[554px]  font-proximaNova">
              I help people struggling with weight and wellness break free from
              self-defeating patterns and transform their uniqueness into
              healthy, joyful lives.
            </p>

            <div className="  max-w-[191px]  pt-[17px] mx-auto md:mx-0  lg:pt-[45px]   lg:max-w-[283px] w-full ">
              <button
                onClick={() => {
                  setDisclaimerModel(true);
                }}
                className="hover:scale-105 font-proximaNova hover:opacity-90 transition-all duration-100 ease-linear lg:max-w-[298px] max-w-[196px] whitespace-nowrap rounded-[30px] px-[41px] py-[12px] bg-[#C8B377] text-[12px] font-bold text-[#042200]   md:leading-[16px]  lg:leading-[19px]  lg:py-[19px]  lg:text-[19px] xl:px-[61px]"
              >
                Book Consultation
              </button>
            </div>

            <div className="max-w-[588px] w-full xl:flex gap-[7.38px] mt-[37px] items-start  hidden">
              <svg
                className="max-w-[14px] mt-[4px] w-full"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.31" clip-path="url(#clip0_289_1838)">
                  <path
                    d="M6.99451 5.82857V10.4916M6.99451 3.49705V4.66281M6.99451 12.8231C10.2138 12.8231 12.8233 10.2136 12.8233 6.99433C12.8233 3.77508 10.2138 1.16553 6.99451 1.16553C3.77527 1.16553 1.16571 3.77508 1.16571 6.99433C1.16571 10.2136 3.77527 12.8231 6.99451 12.8231Z"
                    stroke="white"
                    stroke-width="1.16576"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_289_1838">
                    <rect width="13.9891" height="13.9891" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="text-[17px] leading-[25px] text-[#FFFFFF] opacity-[31%] font-proximaNova font-[400]">
                As a health coach, I do not provide medical advice in my
                coaching sessions.. My role is to support and empower you in
                making positive lifestyle changes, complementing the guidance
                provided by your healthcare professionals.
              </p>
            </div>
          </div>
          <div className="xl:max-w-[491px] lg:max-w-[349px] max-w-[262px] md:max-w-[262px] w-full mx-auto md:mx-0 pt-[21px] md:pt-0">
            <img src="/hero-section/hero-image-right.png" alt="hero-image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
