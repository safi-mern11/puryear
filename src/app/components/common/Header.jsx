"use client";
import { useState, useEffect } from "react";
import { Hamburger } from "@/assets/icons/Hamburger";
import Button from "./Button";
import CrossSvg from "@/assets/icons/CrossSvg";
import WebsiteLogo from "@/assets/icons/WebsiteLogo";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [approuchOpen, setApprouchOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".menu-container")) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="bg-[#E7E4DC]  w-full xl:mt-[12px]  py-[10px] pl-[16px] pr-[19px]  md:pl-[16px] md:pr-[19px]   xl:pl-[40px] xl:pr-[78px] xl:py-[17px] lg:pr-[46px] lg:py-[14px] flex justify-between items-center xl:max-w-[1440px]  xl:mx-auto ">
      {/* logo */}
      <div className="  max-w-[167px] md:max-w-[199.5px]  xl:max-w-[199px] w-full flex justify-between items-center">
        <div
          className="cursor-pointer"
          onClick={menuOpen ? closeMenu : openMenu}
        >
          <Hamburger />
        </div>
        {/* Menu */}
        <div
          style={{ boxShadow: "0px 4px 11px 0px #00000040" }}
          className={`${
            menuOpen
              ? `fixed max-w-full lg:max-w-[400px]  left-0 top-0 min-h-fit  h-screen overflow-y-auto hiseScrollbar overflow-x-hidden w-full z-30 bg-[#344E3C] lg:bg-[#F5F4F4]  transition-all duration-300 transform menu-container lg:pr-[36px]`
              : "fixed z-30 opacity-0 min-h-screen h-full max-w-[400px] left-0 top-0 lg:bg-[#F5F4F4] bg-[#344E3C] transition-all duration-300 transform -translate-x-full menu-container"
          }`}
        >
          <div className="flex lg:pt-[31px] pt-[26px]  lg:max-w-[400px]   w-full md:pl-[45px] pl-[16px] lg:pl-[43px] lg:pr-0 md:pr-[40px] pr-[17px]  justify-between items-center">
            <h1 className="hidden lg:block text-[28px] font-proximaNova leading-[24px] tracking-[10px] font-[500]">
              MENU
            </h1>

            <img
              className="block lg:hidden"
              src="/mobile-view-log.png"
              alt="mobile-logo"
            />

            <div className="cursor-pointer" onClick={closeMenu}>
              <CrossSvg className={"lg:hidden block"} fill={"#fff"} />
              <CrossSvg className={"lg:block  hidden"} fill={"#0F4708"} />
            </div>
          </div>
          <ul className="flex flex-col text-center  text-[#C8B377] lg:text-start lg:mt-[40px] md:mt-[115px] mt-[60px]  max-w-full lg:max-w-[400px] w-full text-[30px] font-[500] leading-[36px] lg:text-[#0F4708]">
            <li>
              <Link
                href="/"
                className="group flex lg:ml-[36px]  justify-center md:justify-start"
                onClick={closeMenu}
              >
                <div className=" lg:max-w-[333px] w-full border-y-[#0000004D] lg:border-t py-[30px]">
                  <p className="group-hover:translate-x-2 transition-all duration-150 ease-in-out">
                    Home
                  </p>
                </div>
              </Link>
            </li>
            {/* <li>
                <Link
                  href="/book-consultation"
                  className="flex md:justify-center lg:justify-start lg:pl-[36px] "
                  onClick={closeMenu}
                >
                  <div className="md:max-w-[333px] w-full border-y-[#0000004D] lg:border-y py-[30px]">
                    Book Consultation
                  </div>
                </Link>
              </li> */}
            <li>
              <Link
                href="/explore-health"
                className="group  flex lg:ml-[36px]  justify-center lg:justify-start"
                onClick={closeMenu}
              >
                <div className="lg:max-w-[333px] w-full py-[30px] border-y-[#0000004D] lg:border-y">
                  <p className="group-hover:translate-x-2 transition-all duration-150 ease-in-out">
                    Explore Your Health
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <button
                onClick={() => setApprouchOpen(!approuchOpen)}
                className={`lg:max-w-[333px] max-w-[230px] items-center w-full lg:ml-[36px]  ${
                  approuchOpen ? "border-b-[#0000041d]" : ""
                } lg:border-b py-[30px] lg:mx-0 mx-auto  flex justify-between gap-3`}
              >
                Our Approach
                <svg
                  className={`mt-[5px] ${
                    approuchOpen ? "rotate-0" : "rotate-180"
                  } transition-all duration-300 ease-in-out lg:block hidden`}
                  width={21}
                  height={13}
                  viewBox="0 0 21 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L10.5 2L19 11"
                    stroke="#0F4708"
                    strokeWidth="2.50425"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className={`mt-[5px] ${
                    approuchOpen ? "rotate-0" : "rotate-180"
                  } transition-all duration-300 ease-in-out lg:hidden block`}
                  width={19}
                  height={11}
                  viewBox="0 0 19 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.79427 1.41667L9.5026 9.125L17.2109 1.41667"
                    stroke="#C8B377"
                    strokeWidth="2.3125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {approuchOpen && (
                <div className="">
                  <Link
                    href="/how-it-works"
                    className="flex lg:ml-[36px] group justify-center lg:justify-start"
                    onClick={closeMenu}
                  >
                    <div className="lg:max-w-[333px] text-[25px] leading-[25px] md:pl-[37px] lg:text-[#0F4708] text-[#C8B377] md:opacity-100 opacity-65 font-normal w-full border-b-[#0000041d]  lg:border-b py-[30px]">
                      <p className="group-hover:translate-x-2 transition-all duration-150 ease-in-out">
                        How It Works
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/work-with-me"
                    className="group flex lg:ml-[36px]  justify-center lg:justify-start"
                    onClick={closeMenu}
                  >
                    <div className="lg:max-w-[333px] text-[25px] leading-[25px] md:pl-[37px] lg:text-[#0F4708] text-[#C8B377] md:opacity-100 opacity-65 font-normal w-full py-[30px] justify-center lg:justify-start">
                      <p className="group-hover:translate-x-2 transition-all duration-150 ease-in-out">
                        Work With Me
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/meditation"
                className="group flex lg:ml-[36px]  justify-center lg:justify-start"
                onClick={closeMenu}
              >
                <div className="lg:max-w-[333px] w-full border-y-[#0000004D] lg:border-y py-[30px]">
                  <p className="group-hover:translate-x-2 transition-all duration-150 ease-in-out">
                    Mindful Meditation
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="group flex lg:ml-[36px]  justify-center lg:justify-start"
                onClick={closeMenu}
              >
                <div className="lg:max-w-[333px] w-full py-[30px] justify-center lg:justify-start">
                  <p className="group-hover:translate-x-2 transition-all duration-150 ease-in-out">
                    Self Care Blog
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="group flex lg:ml-[36px]  justify-center lg:justify-start"
                onClick={closeMenu}
              >
                <div className="lg:max-w-[333px] w-full border-y-[#0000004D] lg:border-t py-[30px]">
                  <p className="group-hover:translate-x-2 transition-all duration-150 ease-in-out">
                    About
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="group flex lg:ml-[36px]  justify-center lg:justify-start"
                onClick={closeMenu}
              >
                <div className="lg:max-w-[333px] w-full border-y-[#0000004D] lg:border-y py-[30px]">
                  <p className="group-hover:translate-x-2 transition-all duration-150 ease-in-out">
                    FAQs
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        {/* Website-Name */}
        <Link
          className="max-w-[120px] lg:max-w-[139px]  xl:max-w-[139px] w-full"
          href="/"
          onClick={closeMenu}
        >
          <WebsiteLogo />
        </Link>
      </div>

      <Button
        extraClasses={
          "max-w-[102px] pt-[12.3px] pb-[13.6px] text-[14px] leading-[14px] xl:py-[16px] xl:text-[18px] xl:leading-[18px] xl:max-w-[246px]   lg:max-w-[256px] lg:text-[18px] lg:leading-[18px] lg:py-[15px]   md:pt-[11.3px] md:pb-[11.6px] md:pl-[30.6px] md:pr-[22px] md:max-w-[196px]   md:text-[16px] md:leading-[16px] font-[700] bg-[#8B7B4D] text-[#fff] "
        }
        href="/explore-health"
        text={"Explore Your Health "}
        extraClasses2={"text-[#fff] hidden md:inline-block"}
        lg
        sm
      />
    </div>
  );
}

export default Header;
