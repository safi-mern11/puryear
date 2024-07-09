"use client";
import { useState } from "react";
import LeftBtn from "@/assets/icons/LeftBtn";
import RightBtn from "@/assets/icons/RightBtn";

function GuidedMeditation() {
  const data = [
    {
      title: "The Awareness of Breathing",
      paragraph:
        "Unlock inner peace and let go of destructive anger. This guided meditation will show you how to transform your rage into calm clarity. Experience the freedom of emotional balance. Start your journey to a happier, more harmonious life.",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      title: "The Power of Mindfulness",
      paragraph:
        "Discover the power of mindfulness to reduce stress and improve your mental well-being. This meditation will guide you through techniques to stay present and focused.",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    },
    {
      title: "Finding Inner Peace",
      paragraph:
        "Explore methods to find inner peace amidst the chaos of daily life. This session will help you cultivate a sense of calm and tranquility.",
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    },
    {
      title: "Embracing Gratitude",
      paragraph:
        "Learn to embrace gratitude and appreciate the little things in life. This guided meditation will help you develop a grateful mindset.",
      video: "https://www.w3schools.com/html/movie.mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < data.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  const { title, paragraph, video } = data[currentIndex];

  return (
    <div className="max-w-[375px] md:max-w-[670px] lg:max-w-[942px]  xl:max-w-[1284px] w-full mx-auto xl:pt-[90px] lg:pt-[58px] md:pt-[61px] pt-[22px]  xl:pb-[67px] lg:pb-[59px] md:pb-[50px] pb-[0px]  border-b-[#0000004D] md:border-b font-proximaNova">
      <div className="max-w-[346px] md:max-w-[612px] lg:max-w-[942px]  xl:max-w-[1237px] w-full mx-auto border-b-[#0000004D] border-b md:border-b-0 pb-[54px] md:pb-0 lg:pb-0">
        <div className="w-full flex justify-between">
          <h1 className="w-full font-[600] text-[28px] leading-[32px] md:text-[36px] md:leading-[56px] lg:text-[48px] xl:text-[50px] lg:leading-[68px] text-[#5E480A] lg:text-center md:text-left text-center xl:text-start">
            Guided Meditation
          </h1>

          <div className="max-w-[108px] w-full  justify-between items-center hidden xl:flex">
            <button onClick={handlePrev} className="max-w-[45px] w-full">
              <LeftBtn />
            </button>
            <button onClick={handleNext} className="max-w-[45px] w-full">
              <RightBtn />
            </button>
          </div>
        </div>
        {/* video */}
        <video key={currentIndex} controls className="w-full mt-[22px]">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>{" "}
        <div className="mt-[20px]">
          {/* title */}
          <h1 className="font-[600] text-[#4A4946] xl:text-[34px] text-[22px] leading-[32px] md:text-[24px]  lg:text-[34px] lg:leading-[68px]">
            {title}
          </h1>
          {/* paragraph */}
          <p className="text-[16px] leading-[26px] md:text-[20px] md:leading-[28px] lg:text-[22px]   font-[400] lg:mt-0 md:mt-[10px] mt-[5px] text-[#000000BF]">
            {paragraph}
          </p>
        </div>
        <div className="max-w-[226px] w-full  justify-between items-center flex mx-auto mt-[25px] lg:hidden ">
          <button onClick={handlePrev}>
            <LeftBtn />
          </button>
          <div className="max-w-[56px] w-full flex justify-between">
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="6"
                cy="6.00858"
                rx="6"
                ry="6.00858"
                fill={currentIndex === 0 ? "#11411F " : "#738478"}
              />
            </svg>
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="6"
                cy="6.00858"
                rx="6"
                ry="6.00858"
                fill={currentIndex === 1 ? "#11411F " : "#738478"}
              />
            </svg>
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="6"
                cy="6.00858"
                rx="6"
                ry="6.00858"
                fill={currentIndex >= 2 ? "#11411F " : "#738478"}
              />
            </svg>
          </div>

          <button onClick={handleNext}>
            <RightBtn />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GuidedMeditation;
