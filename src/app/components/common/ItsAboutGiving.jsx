import React from "react";
import Button from "./Button";

function ItsAboutGiving() {
  return (
    <div className="xl:max-w-[915px] lg:max-w-[652px] md:max-w-[490px] max-w-[325.5px] w-full mx-auto  xl:pt-[57px] xl:pb-[120px] lg:pb-[85px] md:pb-[63px] pb-[31px] font-proximaNova lg:pt-[40px]">
      <div className="comma  xl:max-w-[152px] lg:max-w-[108px] md:max-w-[81.5px] max-w-[58px] w-full absolute">
        <img src="/its-about-giving/comma.png" alt="comma" />
      </div>
      <h1 className="xl:max-w-[838px] lg:max-w-[597px] md:max-w-[449px] max-w-[320px] w-full xl:text-[40px] xl:leading-[47px] lg:text-[28.5px] lg:leading-[33.5px] md:text-[21.4px] md:leading-[25px]  font-[700] text-[15px] leading-[18px] pt-[28px] lg:pt-[49px] lg:mt-0 xl:pt-0 ml-[5px] md:mt-[37px] md:ml-[41px]   lg:ml-[54px]  xl:mt-[70px] xl:ml-[77px] italic  text-[#8A7331BF] text-center">
        It’s about giving the same love and kindness to ourselves that we give
        to others.
      </h1>
      <p className="max-w-[218px] opacity-[36%] w-full mx-auto text-center lg:text-[18.47px] lg:leading-[27px] xl:text-[25px] mt-[5.6px] xl:mt-[14px] font-[400] xl:leading-[28px] md:text-[13.4px] md:leading-[15px] text-[9.56px] leading-[10.7px] text-[#5E480A]">
        -Dr. Jerome Puryear
      </p>
      <div className="lg:max-w-[216px] md:max-w-[162px]   xl:max-w-[303px]  max-w-[146px] mx-auto w-full pt-[11px] lg:pt-[27px]  md:pt-[19px]">
        <Button
          lg
          extraClasses={
            " xl:max-w-[303px] lg:max-w-[216px] md:max-w-[162px] opacity-[87%]  max-w-[146px] w-full pt-[6.5px] pb-[6.13px] xl:py-[13px] py-[6.5px] md:pt-[7.2px] md:pb-[7.9px] lg:pt-[9.5px] lg:pb-[9.1px] border-[#5E480AC2] border-[0.96px] rounded-[104px] lg:border-[1.43px] xl:border-[2px] xl:rounded-[217px] lg:rounded-[155px] md:rounded-[116px] md:border-[1.07px]  text-[#5E480A] xl:text-[25.9px] font-[400] text-[12px] leading-[18px] md:text[13.8px] md:leading-[20px] lg:text-[18.47px] lg:leading-[27px] xl:leading-[38px] "
          }
          href={"#"}
          text={"Let’s work Together"}
        />
      </div>
    </div>
  );
}

export default ItsAboutGiving;
