"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef, useState, useEffect } from "react";
import NavigationsBtns from "@/assets/icons/NavigationsBtns";

function FeaturesSwiper() {
  const data = [
    {
      xl: "/more-feature-swiper/self-care.png",
      lg: "/more-feature-swiper/self-care-lg.png",
      md: "/more-feature-swiper/self-care-md.png",
      sm: "/more-feature-swiper/sm-self-care.png",
    },
    {
      xl: "/more-feature-swiper/mindful-meditation-videos-xl.png",
      md: "/more-feature-swiper/mindful-meditation-videos-lg.png",
      sm: "/more-feature-swiper/sm-self-care.png",
      lg: "/more-feature-swiper/mindful-meditation-videos-lg.png",
    },
    {
      xl: "/more-feature-swiper/coaching-xl.png",
      md: "/more-feature-swiper/self-care-md.png",
      lg: "/more-feature-swiper/coaching-lg.png",
      sm: "/more-feature-swiper/sm-self-care.png",
    },
    {
      lg: "/more-feature-swiper/mindful-meditation-videos-lg.png",
      xl: "/more-feature-swiper/faq-xl.png",
      md: "/more-feature-swiper/self-care-md.png",
      sm: "/more-feature-swiper/sm-self-care.png",
    },
    {
      xl: "/more-feature-swiper/self-care.png",
      lg: "/more-feature-swiper/self-care-md.png",
      md: "/more-feature-swiper/self-care-md.png",
      sm: "/more-feature-swiper/sm-self-care.png",
    },
    {
      xl: "/more-feature-swiper/mindful-meditation-videos-xl.png",
      lg: "/more-feature-swiper/self-care-md.png",
      md: "/more-feature-swiper/self-care-md.png",
      sm: "/more-feature-swiper/sm-self-care.png",
    },
  ];

  const swiperRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const getImageUrl = (item) => {
    if (windowWidth >= 1440) return item.xl;
    if (windowWidth >= 1024) return item.lg;
    if (windowWidth >= 768) return item.md;
    return item.sm;
  };

  return (
    <div className="w-full  md:max-w-[1709px] ">
      <div className="hidden md:max-w-[1709px] px-[5px] md: mt-[35px]  lg:mt-[56px] md:px-[20px] lg:pl-[20px] lg:pr-[45px] absolute  max-w-[343px]  xl:px-[30px] xl:mt-[85px] w-full md:flex mx-auto justify-between items-center ">
        <button
          className="z-30"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous Slide"
        >
          <NavigationsBtns left />
        </button>
        <button
          className="z-30 inline-block md:hidden lg:inline-block"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next Slide"
        >
          <NavigationsBtns right />
        </button>
      </div>

      <div className="absolute max-w-[351px] md:max-w-[727px] lg:max-w-[966px] flex md:px-[20px] lg:px-[24px] mt-[50px]  inset-x-0 w-full justify-between items-center md:hidden  z-30 mx-auto">
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
              fillOpacity={active < data.length - 1 ? "1" : "0.15"}
            />
          </svg>
        </button>
      </div>

      <div className=" max-w-[264px] md:max-w-[1709px] mt-[28px] md:mt-[11px] lg:mt-[37px] xl:mt-[45px]  w-full relative mx-auto">
        <Swiper
          className="my-swiper cursor-pointer"
          modules={[Navigation, Pagination]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={9}
          slidesPerView={1}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            1440: {
              slidesPerView: 3.3,
            },
            1024: {
              slidesPerView: 3.4,
            },
            768: {
              slidesPerView: 3.2,
            },
            375: {
              slidesPerView: 1,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              {windowWidth && (
                <img src={getImageUrl(item)} alt={`Slide ${index + 1}`} />
              )}
            </SwiperSlide>
          ))}
          {/* <div id="feature-pagination" className="swiper-pagination bg-[#738478]"></div> */}
        </Swiper>
      </div>
    </div>
  );
}

export default FeaturesSwiper;
