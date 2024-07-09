"use client";

import Facebook from "@/assets/icons/Facebook";
import FooterSvgs from "@/assets/icons/FooterSvgs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Footer() {
  const pages = [
    {
      id: 0,
      title: "Mindful Meditation Moments",
      link: "/meditation",
    },
    {
      id: 1,
      title: "Self Care Blog",
      link: "/blogs",
    },
    {
      id: 2,
      title: "Medical Advice Disclaimer",
      link: "/medical-disclaimer",
    },
    {
      id: 3,
      title: "Website and Mobile App Disclaimer",
      link: "/app-disclaimer",
    },
    {
      id: 4,
      title: "Privacy Policy",
      link: "/privacy-policy",
    },
  ];
  const social = [
    {
      id: 0,
      title: "Instagram",
      link: "/insta",
      svg: <FooterSvgs insta />,
    },

    {
      id: 1,
      title: "Facebook",
      link: "/facebook",
      svg: <FooterSvgs facebook />,
    },
    { id: 2, title: "Twitter", link: "/twitter", svg: <FooterSvgs twitter /> },
  ];
  const path = usePathname();
  return (
    <div className={`font-proximaNova `}>
      {path !== "/explore-health" && path !== "/work-with-me" && (
        <div className=" md:max-w-[894px] md:mx-auto    lg:max-w-[850px] xl:max-w-[1136px] max-w-[342px] pt-[38px] md:pt-0 md:border-t-0 border-t-[#0000004D] border-t w-full mx-auto font-proximaNova flex-col items-center md:items-start md:text-start text-center md:flex-row flex justify-between md:px-[34px] lg:px-0 pb-[38px] md:pb-[42px]  xl:px-0 lg:pb-[69px] xl:pb-[57px]">
          {/* left-div */}
          <div className="max-w-[320px] w-full">
            <Link href={"/"} className="max-w-[251px] lg:max-w-[324px] w-full ">
              <h1 className="text-[16px] md:text-[18px] lg:text-[23px]  font-[600] leading-[24px] tracking-[4px] text-[#0F4708]">
                LIFELONG WELLNESS
              </h1>
              <p className=" max-w-[324px] md:max-w-[269px] lg:max-w-[320px] w-full font-[400] text-[14px] md:text-[14px] lg:text-[16px] leading-[23px] text-[#614C12BF] mt-[8px] md:mt-[4.7px] lg:mt-[18px]  xl:mt-[10px]">
                Join our community of wellness enthusiasts committed to
                transforming lives.
              </p>
            </Link>
          </div>
          {/* right-div */}
          <div className="max-w-[377px] mt-[37px] md:mt-[0px] w-full flex flex-col-reverse md:flex-row justify-between font-proximaNova items-center md:items-start  ">
            <div className="justify-center md:justify-start   md:max-w-[253px] max-w-[315px]  grid grid-cols-2  w-full md:flex  md:flex-col  gap-[12px] md:gap-[15px] items-start text-start mt-[32px]  md:mt-0">
              {pages.map((data, id) => {
                return (
                  <Link
                    href={data.link}
                    key={data.id}
                    className="w-full max-w-fit flex-wrap  md:max-w-[253px]   text-[16px] leading-[24px] tracking-[0.1px] text-[#614C12] font-[400] hover:underline transition-all duration-200 ease-in-out"
                  >
                    {data.title}
                  </Link>
                );
              })}
            </div>
            {/* social-media */}
            <div className="max-w-[93px] w-full flex md:flex-col gap-[7px] ">
              {social.map((data, id) => {
                return (
                  <Link
                    href={data.link}
                    key={data.id}
                    className="max-w-[93px] w-full  flex gap-[12px] items-center justify-center"
                  >
                    <div className="w-full max-w-[16px]">{data.svg}</div>
                    <p className="text-[#614C12] max-[62px] w-full text-[14px] leading-[20px] md:block hidden">
                      {" "}
                      {data.title}
                    </p>
                  </Link>
                );
              })}
            </div>{" "}
          </div>
        </div>
      )}
      <div className="w-full md:px-[43px] lg:pl-[46px] lg:pr-[28px] bg-[#614C12] text-center md:text-start">
        <div className="max-w-[1144px] w-full mx-auto font-[400] text-[14px] leading-[20px] font-proximaNova text-[#FFFFFFBF] flex justify-between items-center">
          <p className=" w-full  py-[20px] ">
            © 2024 Lifelong Wellness. All rights reserved.
          </p>

          <div className=" hidden  md:max-w-[275px] w-full md:flex justify-between items-center   ">
            <Link className=" w-full" href={"/privacy-policy "}>
              Privacy Policy
            </Link>
            <Link className=" w-full " href={"#"}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
