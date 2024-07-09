"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import Button from "../common/Button";
import Link from "next/link";

const data = [
  {
    title: "1 Session",
    price: "$175.00",
    description:
      "Whatever you need, like clarity on your plan or encouragement during tough adjustments, Dr. Puryear is here for you.",
    img: "/invest-in-your-swiper/invest-in-your-swiper.png",
  },
  {
    title: "1 Session",
    price: "$175.00",
    description:
      "Whatever you need, like clarity on your plan or encouragement during tough adjustments, Dr. Puryear is here for you.",
    img: "/invest-in-your-swiper/invest-in-your-swiper.png",
  },
  {
    title: "1 Session",
    price: "$175.00",
    description:
      "Whatever you need, like clarity on your plan or encouragement during tough adjustments, Dr. Puryear is here for you.",
    img: "/invest-in-your-swiper/invest-in-your-swiper.png",
  },
  {
    title: "1 Session",
    price: "$175.00",
    description:
      "Whatever you need, like clarity on your plan or encouragement during tough adjustments, Dr. Puryear is here for you.",
    img: "/invest-in-your-swiper/invest-in-your-swiper.png",
  },
];

const InvestInYourSwipper = () => {
  const [active, setActive] = useState(null);
  const swiperRef = useRef();

  return (
    <div className="lg:max-w-[574px] md:max-w-[574px] xl:mx-0 mx-auto  w-full xl:mt-0 mt-[46px]  ">
      {/* navigation */}
      <div className="absolute flex px-[24px] md:px-0 max-w-[574px] w-full justify-between items-center mt-[385px]  md:mt-[306px] z-30 mx-auto">
        <button
          onClick={() => {
            swiperRef.current?.slidePrev();
            setActive(swiperRef?.current?.activeIndex);
          }}
        >
          <svg
            width="24"
            height="40"
            viewBox="0 0 24 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.638396 21.5608L18.4389 39.361C18.8506 39.773 19.4002 40 19.9862 40C20.5722 40 21.1218 39.773 21.5335 39.361L22.8444 38.0504C23.6974 37.1964 23.6974 35.8085 22.8444 34.9558L7.89687 20.0083L22.861 5.04419C23.2727 4.63216 23.5 4.08289 23.5 3.49721C23.5 2.91087 23.2727 2.3616 22.861 1.94925L21.5501 0.639015C21.1381 0.22699 20.5888 4.28113e-07 20.0028 5.14291e-07C19.4168 6.00468e-07 18.8672 0.22699 18.4555 0.639016L0.638396 18.4555C0.225716 18.8688 -0.000947114 19.4207 0.000353728 20.0073C-0.000947053 20.5963 0.225717 21.1478 0.638396 21.5608Z"
              fill="#245A1E"
              fillOpacity={active > 0 ? "1" : "0.25"}
            />
          </svg>
        </button>
        <button
          onClick={() => {
            swiperRef.current?.slideNext();
            setActive(swiperRef?.current?.activeIndex);
          }}
        >
          <svg
            width="24"
            height="40"
            viewBox="0 0 24 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.8616 18.4392L5.0611 0.639019C4.64939 0.22699 4.0998 0 3.51379 0C2.92778 0 2.37819 0.22699 1.96649 0.639019L0.655605 1.94958C-0.197396 2.80355 -0.197396 4.19151 0.655605 5.04419L15.6031 19.9917L0.639019 34.9558C0.227315 35.3678 0 35.9171 0 36.5028C0 37.0891 0.227315 37.6384 0.639019 38.0508L1.9499 39.361C2.36193 39.773 2.9112 40 3.49721 40C4.08322 40 4.63281 39.773 5.04451 39.361L22.8616 21.5445C23.2743 21.1312 23.5009 20.5793 23.4996 19.9927C23.5009 19.4037 23.2743 18.8522 22.8616 18.4392Z"
              fill="#245A1E"
              fillOpacity={active < data.length - 1 ? "1" : "0.25"}
            />
          </svg>
        </button>
      </div>
      {/* swiper */}
      <div className="max-w-[343px] md:max-w-[489px] w-full relative shadow-md translate-x-0 ring-0 ring-gray-900 rounded-[20px] mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-[489px] px-[21px] md:pl-[31px] md:pr-[27px]  w-full bg-[#CAC0A3] pb-[44px] pt-[50px] rounded-[20px] font-proximaNova flex flex-col items-center">
                <h1 className="max-w-[159px] w-full font-[700] text-[28px] text-center  xl:text-[38px] leading-[28px] text-[#4F3B03]">
                  {item.title}
                </h1>
                <p className="max-w-[246px] w-full mt-[8px] font-[500] text-[16px] text-center xl:text-[22px] leading-[23px] text-[#3E3E3E]">
                  Package Price — {item.price}
                </p>

                <div className="max-w-[430px] w-full rounded-[20px] mt-[27px]">
                  <img src={item.img} alt="packages" />
                </div>
                <p className=" max-w-[257px] md:max-w-[409px] w-full font-proximaNova leading-[26px] text-[16px] md:text-[18px] font-[400] text-[#3E3E3E] text-center mt-[18px]">
                  {item.description}
                </p>
                <div className="pt-[35px] max-w-[366px] w-full hidden md:block">
                  <Button
                    lg
                    text={`Purchase for ${item.price}`}
                    href="#"
                    extraClasses="max-w-[366px] bg-[#0F4708] text-[#FFFFFF] font-[600] text-[20px] leading-[20px] pt-[21px] pb-[19px] "
                  />
                </div>
                <div className="pt-[35px] max-w-[243px] w-full block md:hidden">
                  <Button
                    lg
                    text={`Purchase`}
                    href="#"
                    extraClasses="max-w-[243px] pt-[19px] pb-[17px] bg-[#0F4708] text-[#FFFFFF] font-[600] text-[20px] leading-[24px]"
                  />
                </div>

                <Link href="/" className="md:mt-[22px] mt-[20px]">
                  <div className="flex items-center text-[16px] md:text-[22px] font-[600] leading-[28px] text-[#0F4708] font-proximaNova underline">
                    View details
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InvestInYourSwipper;
