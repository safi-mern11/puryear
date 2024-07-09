"use client"
import Link from "next/link";
import TitleAndPara from "../common/TitleAndPara";
import Button from "../common/Button";
import Number from "@/assets/icons/Number";
import Number2 from "@/assets/icons/Number2";
import Number3 from "@/assets/icons/Number3";
import DisclaimerModal from "../common/DisclaimerModal";
import { useState } from "react";

function HowItWorks() {
  const data = {
    title: (
      <p>
        How It <span className="font-bold">Works</span>
      </p>
    ),
    paragraph:
      "From nutrition to lifestyle, we create a roadmap for your wellness, with lasting results.",
  };

  const discoveryData = [
    {
      title: (
        <p>
          Discovery <span className="font-bold">Call</span>
        </p>
      ),
      paragraph:
        "I can't wait to get to know you! In this 20-30 minute call I simply want to get well-acquainted, gauge fit, and determine how I can best coach you.",
      text: "Download App",
      link: "/download",
      number: <Number />,
    },
    {
      title: (
        <p>
          Enrollment <span className="font-bold">Forms</span>
        </p>
      ),
      paragraph:
        "Who likes filling out forms? We keep it as simple and painless as possible-just the basics. Our records will help us craft a coaching plan that sees every part of you.",
      number: <Number2 />,
    },
    {
      title: (
        <p>
          45-minute <span className="font-bold">Consultation</span>
        </p>
      ),
      paragraph:
        "The journey begins. This is our first full session and the first of many important steps forward.",
      number: <Number3 />,
    },
  ];

  const [disclaimerModel, setDisclaimerModel] = useState(false);
  return (
    <>
      {disclaimerModel && (
        <DisclaimerModal setDisclaimerModel={setDisclaimerModel} />
      )}
    <div className="max-w-[343px] md:max-w-[473px] lg:max-w-[906px] xl:max-w-[1269px] mt-[50px] lg:mt-[67px] xl:mt-[126px] mx-auto">
      <div
        className={`max-w-[606px] text-center flex flex-col items-center mx-auto w-full font-proximaNova`}
      >
        <h1
          className={`text-[28px] leading-[32px] xl:text-[54px]   text-[#5E480A] xl:leading-[68px] lg:text-[38px] lg:leading-[48px] font-[400]`}
        >
          {data.title}
        </h1>
        <p
          className={`xl:max-w-[606px] max-w-[450px] text-[16px] leading-[26px] xl:text-[24px] lg:text-[17px] font-[400] text-[#000000BF] xl:leading-[32px] lg:leading-[22px]`}
        >
          {data.paragraph}
        </p>
      </div>
      <div className="xl:max-w-[1229px] lg:max-w-[906px] w-full lg:flex gap-[46px] mt-[21px] lg:mt-[49px]">
        <div className=" w-full mt-[5px] xl:inline-block hidden">
          <img src="/how-It-Works/how-it-works.png" alt="How It Works" />
        </div>
        <div className="max-w-[664px] w-full mt-[5px] flex justify-center items-center lg:hidden">
          <img src="/how-It-Works/how-it-sm-screens.png" alt="How It Works" />
        </div>
        <div className="max-w-[378px] w-full   justify-center items-center hidden lg:inline-block xl:hidden">
          <img src="/how-It-Works/how-it-works-lg.png" alt="How It Works" />
        </div>

        <div className="xl:max-w-[540px] lg:max-w-[481px]  w-full flex flex-col  gap-[40px] mt-[30px] lg:mt-0">
          <div className="xl:max-w-[540px] md:max-w-[473px] lg:max-w-[481px] max-w-[343px]  w-full font-proximaNova flex flex-col gap-[30px] lg:gap-[85px] xl:gap-[120px] items-center">
            {discoveryData.map((item, index) => (
              <div
                className="w-full flex flex-col gap-[12px] md:gap-[20px] items-center lg:items-start text-center lg:text-start"
                key={index}
              >
                <div className="flex w-full lg:max-w-[481px] xl:max-w-[540px] lg:inline-block justify-center  lg:items-start lg:justify-start  gap-[12px] lg:gap-0  flex-row-reverse text-[26px] leading-[32px] md:text-[36px]  md:leading-[56px] lg:text-[38px] font-[600] lg:font-[700] text-[#5E480A] lg:leading-[28px] ">
                  <h1 className=" lg:max-w-[481px]  xl:text-[44px] lg:text-[31px] lg:leading-[19px] md:text-[36px]  md:font-[400] md:leading-[56px]  lg:font-[400] xl:leading-[28px] lg:tracking-[0.1px] ">
                    {item.title}
                  </h1>{" "}
                  <div className="flex justify-center items-center max-w-[25px] w-full md:max-w-[30px] lg:hidden">
                    {item.number}
                  </div>
                </div>
                <p className="max-w-[308px] md:max-w-[468px] xl:max-w-[540px] text-[16px] leading-[26px] w-full xl:text-[20px]  md:text-[18px] font-[400] text-[#000000BF]  lg:text-[14px] lg:leading-[19px]">
                  {item.paragraph}
                </p>
                {/* {item.link && (
                  <Link
                    href={item.link}
                    className="flex max-w-[177px] w-full justify-between items-center text-[#245A1E]"
                  >
                    <p className="underline text-[22px] leading-[28px] font-[600]">
                      {item.text}
                    </p>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5558 9.2196L6.65555 0.31951C6.4497 0.113495 6.1749 0 5.8819 0C5.58889 0 5.3141 0.113495 5.10824 0.31951L4.4528 0.974789C4.0263 1.40178 4.0263 2.09576 4.4528 2.52209L11.9266 9.99585L4.44451 17.4779C4.23866 17.6839 4.125 17.9586 4.125 18.2514C4.125 18.5446 4.23866 18.8192 4.44451 19.0254L5.09995 19.6805C5.30597 19.8865 5.5806 20 5.8736 20C6.16661 20 6.4414 19.8865 6.64726 19.6805L15.5558 10.7723C15.7621 10.5656 15.8755 10.2897 15.8748 9.99634C15.8755 9.70187 15.7621 9.4261 15.5558 9.2196Z"
                        fill="#245A1E"
                      />
                    </svg>
                  </Link>
                )} */}
              </div>
            ))}
          </div>
          <div className=" flex  md:justify-start justify-center">

          <button
            onClick={() => {
              setDisclaimerModel(true);
            }}
            className="hover:scale-105 font-proximaNova hover:opacity-90 justify-center transition-all duration-100 ease-linear lg:max-w-[147px] md:max-w-[110px] max-w-[127px] xl:max-w-[207px] bg-[#0F4708] text-[#FFFFFF] xl:min-h-[60px]  lg:min-h-[42.72px] min-h-[31px]     font-[700]  text-[10px]  leading-[12px] lg:text-[20px] lg:leading-[24px] w-full rounded-[30px]"
          >
            Book A Call
          </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default HowItWorks;
