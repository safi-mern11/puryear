"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import Button from "../common/Button";
import DownloadSvg from "@/assets/icons/DownloadSvg";

function NewEbook() {
  const [active, setActive] = useState(null);
  const swiperRef = useRef();

  const booksData = [
    {
      id: 1,
      download: "sample.pdf",
      href: "/pdfs/sample.pdf",
      name: ` Obesity Secrets Your Doctor Didn't`,
      description: (
        <>
          Discover the secrets to optimal health and wellness that aren't
          discussed during doctor visits. in this free downloadable PDF eBook.
          <br />
          <br />
          <span className="text-[#000000BF] opacity-[62%]">
            Download your free copy of this go-to e-book to start on your path
            towards a healthier, happier you.
          </span>
        </>
      ),
      img: "/new-book-section/understang-book-cover.png",
    },
    {
      id: 2,
      download: "meditation.pdf",
      href: "/pdfs/sample.pdf",
      name: ` Obesity Secrets Your Doctor Didn't`,
      description: (
        <>
          Discover the secrets to optimal health and wellness that aren't
          discussed during doctor visits. in this free downloadable PDF eBook.
          <br />
          <br />
          <span className="text-[#000000BF] opacity-[62%]">
            Download your free copy of this go-to e-book to start on your path
            towards a healthier, happier you.
          </span>
        </>
      ),
      img: "/new-book-section/understang-book-cover.png",
    },
    {
      id: 3,
      download: "ali.pdf",
      href: "/pdfs/sample.pdf",
      name: ` Obesity Secrets Your Doctor Didn't`,
      description: (
        <>
          Discover the secrets to optimal health and wellness that aren't
          discussed during doctor visits. in this free downloadable PDF eBook.
          <br />
          <br />
          <span className="text-[#000000BF] opacity-[62%]">
            Download your free copy of this go-to e-book to start on your path
            towards a healthier, happier you.
          </span>
        </>
      ),
      img: "/new-book-section/understang-book-cover.png",
    },
  ];
  return (
    <div className="w-full bg-[#EDEAE4]  ">
      {/* navigation */}
      <div className="absolute max-w-[345px] xl:max-w-[1356px] md:max-w-[727px] lg:max-w-[966px] flex  mt-[390px] inset-x-0 w-full justify-between items-center md:mt-[193px] lg:mt-[244px] xl:mt-[332px] z-30 mx-auto">
        <button
          onClick={() => {
            swiperRef.current?.slidePrev();
            setActive(swiperRef?.current?.activeIndex);
          }}
          className="max-w-[34px] lg:max-w-[45px] xl:max-w-[64px] w-full"
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32" cy="32" r="32" fill="white" fill-opacity="0.32" />
            <path
              d="M22.5129 32.8689L35.8881 45.6129C36.1112 45.8257 36.4077 45.9443 36.7161 45.9443C37.0244 45.9443 37.3209 45.8257 37.5441 45.6129L37.5585 45.5985C37.667 45.4954 37.7535 45.3712 37.8126 45.2336C37.8716 45.096 37.9021 44.9479 37.9021 44.7981C37.9021 44.6484 37.8716 44.5002 37.8126 44.3626C37.7535 44.225 37.667 44.1008 37.5585 43.9977L24.9633 31.9977L37.5585 20.0025C37.667 19.8994 37.7535 19.7752 37.8125 19.6376C37.8716 19.5 37.9021 19.3518 37.9021 19.2021C37.9021 19.0524 37.8716 18.9042 37.8125 18.7666C37.7535 18.629 37.667 18.5048 37.5585 18.4017L37.5441 18.3873C37.3209 18.1746 37.0244 18.0559 36.7161 18.0559C36.4077 18.0559 36.1112 18.1746 35.8881 18.3873L22.5129 31.1313C22.3952 31.2434 22.3016 31.3782 22.2376 31.5275C22.1736 31.6769 22.1406 31.8376 22.1406 32.0001C22.1406 32.1626 22.1736 32.3234 22.2376 32.4727C22.3016 32.622 22.3952 32.7568 22.5129 32.8689Z"
              fill="black"
              fillOpacity={active > 0 ? "1" : "0.15"}
            />
          </svg>
        </button>
        <button
          onClick={() => {
            swiperRef.current?.slideNext();
            setActive(swiperRef?.current?.activeIndex);
          }}
          className="max-w-[34px] lg:max-w-[45px] xl:max-w-[64px] w-full "
        >
          <svg
            className="rotate-180"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32" cy="32" r="32" fill="white" fill-opacity="0.32" />
            <path
              d="M22.5129 32.8689L35.8881 45.6129C36.1112 45.8257 36.4077 45.9443 36.7161 45.9443C37.0244 45.9443 37.3209 45.8257 37.5441 45.6129L37.5585 45.5985C37.667 45.4954 37.7535 45.3712 37.8126 45.2336C37.8716 45.096 37.9021 44.9479 37.9021 44.7981C37.9021 44.6484 37.8716 44.5002 37.8126 44.3626C37.7535 44.225 37.667 44.1008 37.5585 43.9977L24.9633 31.9977L37.5585 20.0025C37.667 19.8994 37.7535 19.7752 37.8125 19.6376C37.8716 19.5 37.9021 19.3518 37.9021 19.2021C37.9021 19.0524 37.8716 18.9042 37.8125 18.7666C37.7535 18.629 37.667 18.5048 37.5585 18.4017L37.5441 18.3873C37.3209 18.1746 37.0244 18.0559 36.7161 18.0559C36.4077 18.0559 36.1112 18.1746 35.8881 18.3873L22.5129 31.1313C22.3952 31.2434 22.3016 31.3782 22.2376 31.5275C22.1736 31.6769 22.1406 31.8376 22.1406 32.0001C22.1406 32.1626 22.1736 32.3234 22.2376 32.4727C22.3016 32.622 22.3952 32.7568 22.5129 32.8689Z"
              fill="black"
              fillOpacity={active < booksData.length - 1 ? "1" : "0.15"}
            />
          </svg>
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {booksData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-[343px] md:max-w-[575px] lg:max-w-[765px] pt-[30px] xl:max-w-[1073px] w-full mx-auto  lg:pt-[69px] md:pb-[58px] lg:pb-[78px] md:pt-[52px]  flex flex-col-reverse md:flex-row font-proximaNova justify-between pb-[45px]  ">
              {/* left-image */}
              <div className=" w-full max-w-[211px] md:mx-0 mx-auto xl:mx-0 mt-[24px] md:mt-0  lg:max-w-[281px] xl:max-w-[394px]">
                <img
                  src="/new-book-section/understang-book-cover.png"
                  alt="understang-book-cover"
                />
              </div>

              {/* right-content */}
              <div className="md:max-w-[312px] lg:max-w-[414px] xl:max-w-[582px]  w-full flex flex-col md:flex-row  lg:mt-0  justify-center items-center md:block text-center md:text-start">
                <div className="md:max-w-[71px] lg:max-w-[94px]  xl:max-w-[133px] w-full lg:pt-[54px]  md:pt-[40px] flex justify-center md:block  ">
                  <Button
                    lg
                    extraClasses={
                      "xl:max-w-[133px] lg:max-w-[94px] max-w-[71px]  border-[0.54px] md:rounded-[16px]  w-full  border-[#5E480A] lg:border-[0.1px] xl:border-[2px] lg:border-[0.71px] lg:rounded-[21.3px] xl:rounded-[217px] text-[#5E480A] text-[14.52px] leading-[18.5px] tracking-[-0.27px] text-[9.2px] leading-[18.5px] lg:text-[12.6px] lg:leading-[24.6px] xl:text-[17px] font-[400] xl:leading-[34px] border-opacity-[38%] "
                    }
                    href={"#"}
                    text={"Free eBooks"}
                  />
                </div>

                <div
                  key={item.id}
                  className="flex  flex-col  items-center lg:flex-none lg:items-start lg:mt-[13.5px] xl:mt-[19px]"
                >
                  <h1 className="max-w-[343px] text-[23px] leading-[25px] lg:text-start md:text-[23px] lg:mt-0 md:leading-[25.8px] md:max-w-[673px] xl:max-w-[651px] w-full font-[400] mt-[10px] lg:text-[31.7px] lg:leading-[34px] xl:text-[44px] text-[#5E480A] xl:leading-[48px] ">
                    {item.name} <span className="font-[700]"> Tell You </span>
                  </h1>
                  {/* <div className="max-w-[260px] xl:max-w-[565px] w-full md:hidden block mt-[38px] lg:mt-0 mx-auto ">
                    <img
                      src="/new-book-section/understang-book-cover.png"
                      alt="counquering-obesity"
                    />
                  </div> */}
                  <p className="xl:max-w-[580px] lg:max-w-[442px] max-w-[311px] text-[10px] leading-[15px] md:mt-[9.42px]  md:tracking-[0.05px]  w-full md:max-w-[530px]  lg:mt-[11px] xl:mt-[16px] lg:text-[14.2px] lg:leading-[20px] xl:text-[20px] xl:leading-[28px]  lg:tracking-[0.07px] xl:tracking-[0.1px] font-[400] text-[#000000BF]">
                    {item.description}
                  </p>
                  {/* svgs */}
                </div>

                <div className="max-w-[163px] w-full md:max-w-[142px] lg:max-w-[189px]  lg:pt-[34px] pt-[12px] md:pt-[17px]  xl:max-w-[266px] ">
                  <a href={item.href} download={item.download}>
                    <button
                      className="bg-[#8B7B4D] max-w-[163px] xl:max-w-[266px] md:max-w-[142px] lg:max-w-[189px] text-[12.3px] leading-[14.8px] pl-[17px] pr-[11px] xl:pl-[47px] xl:pr-[38px] md:pl-[25px] pr-[20px] lg:pl-[33px] lg:pr-[27px] xl:pt-[19px] xl:pb-[17px] lg:py-[12px] md:text-[10.7px] md:leading-[13px] py-[11px]  md:py-[9px]  lg:text-[14px] lg:leading-[17px] font-[600] xl:text-[20px] text-[#fff] xl:leading-[24px] flex gap-[7px] md:gap-[5px] lg:gap-[10px] xl:gap-[23px] lg:mr-0 w-full rounded-[30px] ">
                      Download PDF
                      <div className="max-w-[14px]  xl:max-w-[24px] md:max-w-[12.8px] lg:max-w-[17.11px] w-full">
                        <DownloadSvg />
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewEbook;
