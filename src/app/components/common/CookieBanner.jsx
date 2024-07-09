import Image from "next/image";
import React from "react";

const CookieBanner = ({ haveCookie }) => {
  return (
    <div className="max-w-[1555px] w-full flex items-center gap-[44px] mx-auto max-h-[225px] pl-[64px] pr-[82px] pt-[62px] pb-[66px] rounded-[33px] bg-[#F9F9F8] ">
      <Image src={"/cookie/cookie.svg"} width={97} height={97} />
      <div className="max-w-[777px] w-full flex flex-col gap-[7px]">
        {haveCookie && (
          <h1 className="text-[36px] text-[#5E480A] font-bold leading-[44px]">
            Have a cookie :)
          </h1>
        )}
        <p className=" text-[29px] leading-[44px] font-normal text-[#5E480A]">
          By using our site, you agree to our use of cookies for a better
          experience. Learn more in our{" "}
          <span className="border-b  border-[#5E480A]">Privacy Policy.</span>
        </p>
      </div>
      <div className="flex gap-[27px] max-w-[447px] w-full ">
        <button className="max-w-[210px] w-full min-h-[73px] max-h-[73px] text-[#fff] text-[29px] leading-[44px] text-center font-bold bg-[#465748] rounded-full">
          Accept
        </button>
        <button className="max-w-[210px] w-full min-h-[73px] max-h-[73px] text-[#00000059] text-[29px] leading-[44px] text-center font-bold bg-[#E7E4DC] rounded-full">
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
