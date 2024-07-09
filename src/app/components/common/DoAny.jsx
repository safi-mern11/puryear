"use client";

import ArrowsInputField from "@/assets/icons/ArrowsInputField";
import { useState } from "react";

const symptoms = [
  {
    id: 1,
    title: "Feeling Stressed?",
    content: "Content for feeling stressed",
  },
  {
    id: 2,
    title: "Feeling Stuck & Drained?",
    content: "Content for feeling stuck and drained",
  },
  {
    id: 3,
    title: "Feeling Overweight & Powerless?",
    content: "Content for feeling overweight and powerless",
  },
  {
    id: 4,
    title: "Feeling Weighed Down from Health Issues?",
    content: "Content for feeling weighed down from health issues",
  },
];

const DoAny = ({ landing, workWithMe, extraStyle }) => {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="xl:max-w-[1090px] lg:max-w-[777px] md:max-w-[584px] max-w-[289px] w-full mx-auto xl:pb-[107px]  lg:pb-[76px] md:pb-[57px]  pb-[38px]  ">
      {landing && (
        <h1
          className={`pt-[21px] xl:pt-[82px]  lg:pt-[63px] md:pt-[47px] text-center mb-4 font-[400] font-proximaNova text-[#5E480A] text-[20px] leading-[23px] xl:text-[50px] xl:leading-[56px] lg:text-[35px] lg:leading-[40px] md:text-[26.8px] md:leading-[30px]  ${extraStyle}`}
        >
          Do any of these sound like <span className="font-bold">you?</span>
        </h1>
      )}

      {workWithMe && (
        <div>
          {" "}
          <h1 className="pt-[24px] xl:pt-[82px]  lg:pt-[45px] md:pt-[34px] text-center mb-[21px] md:mb-0 font-[400] font-proximaNova text-[#5E480A] xl:text-[35px] xl:leading-[48px] lg:text-[25px] lg:leading-[34px] md:text-[18.8px] md:leading-[25.9px] md:max-w-[498px] lg:max-w-[659px] xl:max-w-[924px] w-full mx-auto">
            Since you're reading this page, it's likely that you want to{" "}
            <span className="font-[700]">
              finally take control of your weight and your health.
            </span>
          </h1>
          <p className="xl:max-w-[450px] w-full mx-auto xl:text-[30px] lg:text-[21px] lg:leading-[19px] md:text-[16px] md:leading-[15px] lg:mt-[18px] md:mt-[13px] xl:leading-[28px] font-[400] text-center xl:mt-[26px]  text-[#5E480A] opacity-[68%]">
            Do any of these sound like you?
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 xl:max-w-[1090px] lg:max-w-[777px] md:max-w-[584px] w-full lg:mt-[33px] xl:mt-[63px] mt-[24px] max-w-[246px] mx-auto ">
        {symptoms.map((symptom) => (
          <div
            key={symptom.id}
            className="border xl:rounded-[18px] rounded-[8.45px] lg:rounded-[12.83px] xl:max-w-[524px] lg:max-w-[373px] md:max-w-[280px] max-w-[246px]  w-full "
          >
            <button
              onClick={() => toggle(symptom.id)}
              className="xl:max-w-[524px] lg:max-w-[373px] md:max-w-[280px] max-w-[246px]  rounded-[8.45px] lg:rounded-[12.83px] w-full flex justify-between md:pl-[19px] md:pr-[20px] lg:pl-[26px] lg:pr-[27px]  xl:pl-[38px] xl:pr-[37px]  items-center xl:text-[27px] xl:leading-[37px] font-[700] lg:text-[19.5px]  lg:leading-[26.2px] md:text-[14px] md:leading-[18px] lg:pt-[19px] lg:pb-[17px] md:pt-[15px] md:pb-[13px] text-[12.8px]  leading-[17px] tracking-[0.11px] text-[#000000BF] p-4 border xl:rounded-[18px] md:rounded-[9.6px] bg-[#FFFFFF3D] transition duration-300  min-h-[59px] md:min-h-[68px] lg:min-h-[90px] xl:min-h-[127px]"
            >
              <p className="xl:max-w-[415px] lg:max-w-[295px] md:max-w-[222px] max-w-[194px] w-full text-left opacity-[86%] ">
                {symptom.title}
              </p>
              <div className="md:max-w-[11px] lg:max-w-[20px] w-full max-w-[9px]">
                <ArrowsInputField />
              </div>
            </button>
            {open === symptom.id && (
              <div className="p-4 bg-[#FFFFFF3D] border rounded-[18px]">
                {symptom.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoAny;
