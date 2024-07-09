import React from "react";

function LetGetUnstuck() {
  return (
    <div className="w-full bg-[#EDEAE4] xl:pt-[111px] xl:pb-[117px] lg:pt-[79px] md:pb-[62px] md:pt-[59px] lg:pb-[83px] pt-[25px] pb-[38px] font-proximaNova">
      {" "}
      <div className="xl:max-w-[1096px] lg:max-w-[781px] md:max-w-[587.6px] max-w-[302px] w-full  mx-auto md:flex justify-between">
        {/* left-div */}

        <div className="lg:max-w-[402px] xl:max-w-[564px] md:max-w-[302px] w-full xl:pt-[25px] lg:pt-[17px] md:pt-[13px] text-center md:text-start">
          <h1 className=" text-[23.8px] leading-[31px] xl:max-w-[564px] lg:max-w-[402px] md:max-w-[302px] w-full xl:text-[44px] lg:text-[32px] lg:leading-[41px]  md:text-[24px] md:leading-[31px] font-[400] text-[#5E480A] xl:leading-[58px]">
            Let's get you unstuck and on your way to lasting{" "}
            <span className="font-[700] "> wellness</span>
          </h1>
          <p className="xl:max-w-[564px] lg:max-w-[402px] w-full xl:mt-[29px] lg:mt-[20px] md:mt-[14px] text-[#5E480A] xl:text-[20px] xl:leading-[28px] lg:text-[14px] lg:leading-[20px]  text-[10.7px] leading-[15px] mt-[16px] ">
            I show you how to achieve a wide range of health goals, including{" "}
            <span className="font-[700]">
              weight management, stress reduction, improving sleep, nutrition,{" "}
            </span>{" "}
            and{" "}
            <span className="font-[700]">
              activity habits, managing chronic conditions, and enhancing
              overall well-being.
            </span>{" "}
            My clients include executives, health professionals, students,
            working people, stay-at-home parents, retirees of all ages, and
            more.
            <span className="inline-block mt-[10px] text-[#5E480A8C]">
              All of them have one common goal: To transform their current
              wellness level into a healthy, active life of joy as the best self
              they can be.
            </span>
          </p>
        </div>

        {/* right-div-Image */}
        <div className="xl:max-w-[478px] lg:max-w-[323px]  max-w-[242px] mx-auto md:mx-0 w-full mt-[18px] md:mt-0">
          <img src="/lets-get-unstuck/let-get-unstuck.png" alt="coffe-img" />
        </div>
      </div>
    </div>
  );
}

export default LetGetUnstuck;
