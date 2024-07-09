import React from "react";

function NotASuperHuman() {
  return (
    <div className="bg-[#EDEAE4] pb-[39px] md:pb-[54px] lg:pb-[72px] xl:pb-[102px] xl:pt-[91px] lg:pt-[64px] md:pt-[49px] pt-[20px]">
      {" "}
      <div className="xl:max-w-[1115px] lg:max-w-[795px] md:max-w-[601px] max-w-[319px] w-full  mx-auto">
        <h1 className="text-center mb-[20px] md:mb-0 font-[400] text-[18.89px] leading-[25.9px] font-proximaNova text-[#5E480A] xl:text-[35px] xl:leading-[48px] lg:text-[24px] lg:leading-[34px] xl:max-w-[1053px] lg:max-w-[751px] w-full mx-auto">
          You're not superhuman or obsessed with outward appearances...{" "}
          <span className="font-[700] inline-block">
            you simply want to be able to spend your days with more freedom.
          </span>
        </h1>
        {/* main-div */}
        <div className="xl:max-w-[1115px] lg:max-w-[795px] md:max-w-[601px] w-full md:flex justify-between xl:mt-[54px] lg:mt-[38px] md:mt-[28px]">
          {/* left-content */}
          <p className="max-w-[314px] xl:max-w-[583px] text-center md:text-start lg:max-w-[416px] md:max-w-[314px] w-full text-[11.87px] leading-[19.4px] xl:text-[22px] font-[400] xl:leading-[36px] lg:text-[15.7px] lg:leading-[25.7px] text-[#5E480A]">
            But you’re not getting the kind of support you need to achieve your
            goals and sustain long-term positive change.  
            <br />
            <br />
            <span className="text-[#5E480AB8] inline-block ">
              You've worked with counselors and therapists who were
              well-intentioned but who didn't give you a plan customized for you
              or support you with consistent and non-judgmental accountability
              checks.  Your home is filled with health and motivation books,
              exercise equipment, and expensive supplements that haven't made
              any difference... except to make you feel guilty and ashamed.
            </span>
            <br />
            <br />
            <span className="font-[700] text-[#5E480A8F]">
              So, what's missing?
            </span>{" "}
            <span className="text-[#5E480A8F]">
              If you want to transform your wellness for good, you must
              transform your habits, mindset, and self-image.
            </span>
              
          </p>
          {/* right-image */}
          <div className="xl:max-w-[500px] lg:max-w-[356px] max-w-[269px] mx-auto md:mx-0 w-full">
            <img src="/work-with-me/super-hero-page.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotASuperHuman;
