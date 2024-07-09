import React from "react";
import Button from "./Button";

const DisclaimerModal = ({ setDisclaimerModel }) => {
  return (
    <div
      onClick={() => {
        setDisclaimerModel(false);
      }}
      className="fixed z-50 flex items-center justify-center bg-[#00000038] w-screen h-screen px-[20px] md:px-[90px]  lg:px-[10px] top-0 left-0"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-[#D3CBB3]  rounded-[31px] py-[14px] md:pt-[31px] md:pb-[38px] flex flex-col items-center xl:max-w-[795px] lg:max-w-[736px] w-full"
      >
        <h1 className="md:text-[22px] text-[#5E480A] leading-[25px] font-bold font-proximaNova ">
          Disclaimer: No Medical Advice
        </h1>
        <div className="flex lg:gap-[7.38px] items-start  md:mt-[17px] max-w-[308px] md:max-w-[534px]  lg:max-w-[596px] w-full">
          <svg
            className="shrink-0 md:mt-1"
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_289_2501)">
              <path
                d="M6.99458 5.82857V10.4916M6.99458 3.49705V4.66281M6.99458 12.8231C10.2138 12.8231 12.8234 10.2136 12.8234 6.99433C12.8234 3.77508 10.2138 1.16553 6.99458 1.16553C3.77533 1.16553 1.16577 3.77508 1.16577 6.99433C1.16577 10.2136 3.77533 12.8231 6.99458 12.8231Z"
                stroke="#5E480A"
                strokeWidth="1.16576"
              />
            </g>
            <defs>
              <clipPath id="clip0_289_2501">
                <rect width="13.9891" height="13.9891" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p className="text-[12px]  md:text-[15px]  lg:text-[17px] text-[#5E480A] leading-[16px] text-center lg:text-start md:leading-[20px] lg:leading-[25px]  font-proximaNova ">
            As a health coach, I do not provide medical advice in my coaching
            sessions.. My role is to support and empower you in making positive
            lifestyle changes, complementing the guidance provided by your
            healthcare professionals.
          </p>
        </div>
        <Button
          target
          lg
          href={"https://calendar.drjeromepuryear.com/"}
          text={"Continue to Book Consultation"}
          extraClasses={
            "mt-[10px]  md:mt-[26px] max-w-[214px]  lg:max-w-[314px] bg-[#C8B377] text-[#042200] font-[700] text-[12px]  lg:text-[19px] leading-[19px] py-[9px] lg:py-[19px] "
          }
        />
      </div>
    </div>
  );
};

export default DisclaimerModal;
