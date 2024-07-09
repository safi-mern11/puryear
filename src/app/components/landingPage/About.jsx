"use client"
import { useState } from "react";
import AboutLL from "../../../assets/icons/AboutLL";
import AboutWW from "../../../assets/icons/AboutWW";
import Facebook from "../../../assets/icons/Facebook";
import Insta from "../../../assets/icons/Insta";
import Threads from "../../../assets/icons/Threads";
import Twitter from "../../../assets/icons/Twitter";
import Button from "../common/Button";
import DisclaimerModal from "../common/DisclaimerModal";

function About() {
  const data = {
    title:
      "I’m here to help you optimize your health and wellness and reshape your life into one that reflects your best self.I focus on people who know what they should do to have healthy joyful lives but struggle to break free of self-defeating patterns.",
  };
  const [disclaimerModel, setDisclaimerModel] = useState(false);
  return (
    <>
      {disclaimerModel && (
        <DisclaimerModal setDisclaimerModel={setDisclaimerModel} />
      )}
      <div className="max-w-[391px] mx-auto md:flex md:items-start  items-center md:flex-col md:max-w-[658px] md:mx-auto lg:block   lg:max-w-[835.6px] xl:max-w-[1172px] w-full lg:mx-auto font-proximaNova lg:pb-[62px] xl:pb-[110px]">
        {/* Name-div */}
        <h1 className="max-w-[391px] md:text-center md:max-w-[474px] text-[22px] leading-[26.5px] text-center lg:max-w-[884px] mx-auto  lg:mx-0  lg:text-[35px] xl:mx-auto  xl:max-w-[884px] w-full  font-[400] md:text-[26.8px] lg:leading-[42px] md:leading-[32px]   lg:items-center flex-col mt-[23px] md:mt-[44px]  lg:mt-[57px] xl:mt-[82px] font-proximaNova xl:text-[50px] text-[#5E480A]">
          Meet Jerome Puryear, <span className="font-[700]"> MD, MBA</span>
        </h1>
        <p className="xl:max-w-[599px] w-full text-[11.5px] leading-[14px] xl:text-[26px] font-[400] xl:leading-[32px] lg:text-[18.8px] lg:leading-[22.8px] md:text-[13.9px] md:leading-[17.2px]  text-center text-[#505C51] mx-auto xl:mt-[6px]  lg:mt-[4px] mt-[2px]">
          Lifelong Wellness Founder, Health & Wellness Expert
        </p>

        {/* main-div */}
        <div id="mySVG ">
          <div className="md:max-w-[658px] text-center flex-col-reverse flex md:flex-row  md:mx-auto  md:text-start lg:max-w-[835px] xl:max-w-[1234px]  max-w-[361px] w-full md:flex  mt-[1px] md:mt-[36px]  lg:mt-[54px] xl:mt-[77px]  lg:gap-[51px] md:gap-[38px] xl:justify-between">
            {/* left-image-div */}
            <div className="md:max-w-[290px] lg:max-w-[437px] xl:max-w-[489px] w-full flex flex-col ">
              {/* Profile Image */}
              <div className="mt-[33px] md:mt-0  xl:max-w-[414px] w-full lg:max-w-[348px]  z-10   md:ml-[34px] xl:ml-[85px]  ml-[0px]  lg:ml-[60px] flex justify-center md:flex-col ">
                <div
                  style={{
                    boxShadow: "0px 9px 10px 0px rgba(0, 0, 0, 0.12)",
                  }}
                  className="xl:max-w-[414px] lg:max-w-[375px] max-w-[260px] w-full rounded-[50px]"
                >
                  <img
                    src="/about-images/about-author-section.png"
                    alt="author"
                  />
                </div>
              </div>

              {/* AboutLL and AboutWW components */}
              <div className="hidden  md:max-w-[203px] xl:max-w-[277px] lg:max-w-[249px]  max-w-[203px]  w-full absolute  md:flex flex-col  lg:gap-[38px] xl:gap-[53px] mt-[80px] md:mt-[70px] lg:mt-[140px] lg:ml-[-10px] xl:mt-[204px]  xl:ml-[15px] md:ml-[-14px]">
                <AboutLL />
                <AboutWW />
              </div>
            </div>

            {/* right-image-div */}
            <div className=" max-w-[302px] mx-auto md:mx-0 md:max-w-[327px] lg:max-w-[435px] xl:max-w-[611px]  w-full md:mt-0 mt-[22px] flex flex-col md:items-start items-center lg:items-start ">
              <h1 className="xl:max-w-[611px] lg:max-w-[435px]  w-full text-[9.91px] leading-[13px] md:text-[10.6px] md:leading-[15px]  lg:text-[14.26px] lg:leading-[20px]  xl:leading-[28px]  xl:text-[20px] tracking-[0.1px] font-[700] text-[#000000BF] font-proximaNova">
                {data.title}
              </h1>
              {/* para */}
              <p className="text-[9.91px] leading-[14px] mt-[20px] max-w-[343px] w-full  md:max-w-[473px] lg:max-w-[435px] xl:max-w-[611px] md:mt-[25px] lg:mt-[28px] xl:mt-[30px] md:text-[10.6px] md:leading-[15px]  font-[400]  text-[#000000BF] xl:text-[20px] xl:leading-[28px] lg:text-[14.26px] lg:leading-[20px] pb-[2px] tracking-[0.1px]  font-proximaNova">
                I do this by bridging the gap between healthcare providers'
                advice and actual lasting behavioral change, and providing
                powerful mindfulness strategies, clarity, courage, vision and
                self-care tools that get you unstuck, tame your harsh inner
                critic, and smooth your path to high level wellness.{" "}
                <span className="text-[#00000070] ">
                  <br />
                  <br />
                  Simply put, I help you speed and streamline the wellness
                  process so you can finally live a healthier, more enjoyable
                  daily life... for good.
                </span>
              </p>

              <div className="max-w-[188px]  xl:max-w-[381px] lg:max-w-[271px] md:max-w-[204px] w-full  flex  md:flex-row   items-center xl:gap-[11px] justify-between md:mt-[25px] lg:mt-[35px] xl:mt-[48px]">
                {/* social-icons */}
                <div className=" max-w-[67px] lg:max-w-[96px] md:max-w-[72px] gap-[5px]  md:gap-[5.9px] xl:max-w-[135px] w-full flex justify-between items-center">
                  {/* insta-icon */}

                  <Insta />

                  {/* facebookicon */}

                  <Facebook />

                  {/* twitter-icon */}

                  <Twitter />

                  {/* thread-icon */}

                  <Threads />
                </div>
                {/* line */}
                <div className="max-w-[111px] xl:max-w-[224px] lg:max-w-[159px] md:max-w-[120px]  w-full flex flex-col justify-center">
                  <div className="w-full min-h-[2px]  bg-[#505C51] rounded-[10px]"></div>
                </div>
              </div>
              <div className=" pt-[18px] lg:pt-[35px] xl:pt-[50px] md:pt-[26px] xl:max-w-[243px] lg:max-w-[173px] md:max-w-[130px]  max-w-[151px] w-full">

                <button
                  onClick={() => {
                    setDisclaimerModel(true);
                  }}
                  className="hover:scale-105 font-proximaNova hover:opacity-90 transition-all duration-100 ease-linear  rounded-[30px]  xl:max-w-[243px]  lg:max-w-[173px] md:max-w-[130px] pt-[11px] pb-[10px] max-w-[151px] text-[12px] leading-[15px]  max-w-[151px] bg-[#0F4708] text-[#FFFFFF] md:text-[10px] md:leading-[13px] md:py-[10px] xl:text-[20px] lg:text-[14px] lg:leading-[17px] font-[600]  xl:pt-[19px] xl:pb-[17px] lg:pt-[13px] lg:pb-[12px] xl:leading-[24px] w-full "
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
          {/* signature */}
          <div className=" w-full flex justify-center mx-auto pt-[26px] max-w-[320px] md:max-w-[600px] lg:max-w-[628px]  xl:max-w-[1100px] md:pt-[57px] lg:pt-[76px] xl:pt-[111px] lg:pb-0 md:pb-[30px] pb-[10px]">
            <div
              className={`xl:h-[236px] lg:h-[168px] md:h-[126px] h-[87px] w-full relative  overflow-hidden `}
            >
              <img
                src="/signature.gif"
                className="absolute xl:inset-0 xl:m-auto  md:top-[-110px] top-[-50px]  w-[1100px] "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
