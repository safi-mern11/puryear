"use client"
import React, { useState } from "react";
import Button from "./Button";
import DisclaimerModal from "./DisclaimerModal";

const Contact = () => {
    const [disclaimerModel, setDisclaimerModel] = useState(false);
    return (
        <>
            {disclaimerModel && (
                <DisclaimerModal setDisclaimerModel={setDisclaimerModel} />
            )}
            <div className="xl:max-w-[1056px] lg:max-w-[720px] md:max-w-[547px] w-full mx-auto xl:pt-[76px] lg:pt-[54px] lg:pb-[62px] md:pt-[40px] pt-[20px] md:pb-[54px] pb-[30px] px-[20px] flex md:justify-between justify-center items-center md:flex-nowrap flex-wrap md:gap-y-0 gap-y-[26px]">
                <div className="flex flex-col md:items-start items-center xl:gap-[30px] lg:gap-[21px] gap-[15px]  max-w-[639px] w-full">
                    <h1 className="xl:text-[44px] lg:text-[31px] text-[23px] xl:leading-[52px] lg:leading-[37px] leading-[27px] text-[#5E480A] md:text-start text-center">
                        I would love to speak to you <br /> about your{" "}
                        <span className="font-bold">health goals.</span>
                    </h1>

                    <button
                        onClick={() => {
                            setDisclaimerModel(true);
                        }}
                        className="hover:scale-105 font-proximaNova hover:opacity-90 justify-center transition-all duration-100 ease-linear lg:max-w-[147px] md:max-w-[110px] max-w-[127px] xl:max-w-[207px] bg-[#0F4708] text-[#FFFFFF] xl:min-h-[60px]  lg:min-h-[42.72px] min-h-[31px]     font-[700]  text-[10px]  leading-[12px] lg:text-[20px] lg:leading-[24px] w-full rounded-[30px]"
                    >
                        Book A Call
                    </button>
                </div>
                <img src="/explore-your-health/contact.png" alt="" className="xl:w-[373px] xl:h-[359px] lg:w-[265px] lg:h-[256px] w-[199px] h-[191px]" />
            </div>
        </>
    );
};

export default Contact;
