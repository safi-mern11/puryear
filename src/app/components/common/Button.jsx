"use client";
import DownloadSvg from "@/assets/icons/DownloadSvg";
import { useRouter } from "next/navigation";

function Button({ extraClasses, extraClasses2, text, href, download, sm, lg, target, type, disabled }) {
  const router = useRouter();
  return (
    <button
      disabled={disabled}
      type={type && type}
      onClick={() => {
        if (target) {
          target && window.open(href)
        } else {
          href && router.push(href);
        }
      }}
      className={`  hover:scale-105 font-proximaNova hover:opacity-90 transition-all duration-100 ease-linear flex   items-center text-center  w-full rounded-[30px]   ${extraClasses}`}
    >
      {lg && (
        <span
          className={`items-center  text-center  w-full rounded-[30px] ${extraClasses2}`}
        >
          {" "}
          {text}{" "}
        </span>
      )}
      {sm && (
        <span className="inline-block md:hidden text-[14px] leading-[14px] font-[700] mx-auto  ">
          {" "}
          Explore{" "}
        </span>
      )}
      {download && (
        <div className="max-w-[14px]  xl:max-w-[24px] md:max-w-[12.8px] lg:max-w-[17.11px] w-full">
          {download && <DownloadSvg />}
        </div>
      )}
    </button>
  );
}

export default Button;
