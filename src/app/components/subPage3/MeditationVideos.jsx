"use client";
import React, { useState } from "react";
import CustomeDropDown from "../common/CustomDropDown";
import VideoIconSvg from "@/assets/icons/VideoIconSvg";
import { useRouter } from "next/navigation";

const options = [
  { option: "All", value: "All" },
  { option: "Stillness", value: "Stillness" },
  { option: "Inspiration", value: "Inspiration" },
  { option: "Relaxation", value: "Relaxation" },
  { option: "Sleep", value: "Sleep" },
  { option: "Empathy", value: "Empathy" },
  { option: "Gratitude,Empathy", value: "Gratitude,Empathy" },
];

const ITEMS_PER_PAGE = 6;

function MeditationVideos({ videos }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredVideos =
    selectedCategory === "All"
      ? videos
      : videos.filter((video) => video.content?.category === selectedCategory);

  const totalPages = Math.ceil(filteredVideos?.length / ITEMS_PER_PAGE);

  const paginatedVideos = filteredVideos?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const router = useRouter();
  return (
    <div className="max-w-[359px] md:max-w-[612px] lg:max-w-[942px]  xl:max-w-[1237px] mx-auto pt-[57px] md:pt-[50px] lg:pt-[59px] xl:pt-[119px] pb-[68px] md:pb-[93px] lg:pb-[68px]  xl:pb-[112px]">
      <div className="w-full max-w-[342px] md:max-w-[612px] lg:max-w-[942px]  xl:max-w-[1237px] xl:flex justify-between mx-auto md:mx-0 ">
        {/* heading */}
        <div className="text-center xl:text-start">
          <h1 className="w-full font-[600] text-[28px] leading-[32px] md:text-[36px] md:leading-[56px] lg:text-[48px] xl:text-[50px] lg:leading-[68px]  text-[#5E480A]">
            Meditation Videos
          </h1>
          <p className="xl:max-w-[625px] lg:max-w-[712px]  w-full mx-auto  text-[16px]  md:text-[20px] md:leading-[28pxpx] lg:text-[20px]  xl:text-[22px] font-[400] lg:leading-[28px]  xl:mx-0 font-proximaNova mt-[10px]">
            Explore diverse health and wellness videos, offering insights from
            fitness to mental well-being, to enrich your lifestyle journey.
          </p>
        </div>

        {/* sorting-div */}
        <div className="xl:max-w-[442px] md:max-w-[382px] w-full flex justify-between items-center font-proximaNova mx-auto xl:mx-0 mt-[30px] md:mt-[40px] lg:mt-[35px] xl:mt-0">
          <p className="max-w-[69px] w-full text-[20px] font-[600] leading-[34px] hidden md:flex">
            Sort by:
          </p>
          <CustomeDropDown
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
            options={options}
          />
        </div>
      </div>

      <div className="max-w-[359px] md:max-w-[612px] lg:max-w-[829px]  xl:max-w-[1237px] w-full xl:mt-[34px] lg:mt-[58px] md:mt-[50px] mt-[34px] mx-auto ">
        {paginatedVideos?.length != 0 ? (
          <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 md:gap-[35px] gap-[25px] lg:gap-[30px] items-center   ">
            {paginatedVideos?.map((video) => (
              <div
                key={video?.content?.id}
                className="border mx-auto rounded-[8px] md:pb-[16px] md:pl-[13px] md:pr-[16px] md:pt-[14px] max-w-[359px] md:max-w-[399px] w-full border-[#8B7B4D80]   font-proximaNova cursor-pointer pb-[30px] "
                onClick={() => {
                  router.push(`/meditation/${video?.slug}`);
                }}
              >
                <div className="relative ">
                  <div className="absolute h-[193px] inset-0 md:h-[198px] flex justify-center items-center max-w-[357px] xl:max-w-[365px] md:max-w-[370px] w-full bg-[#000000BF] z-[20] md:rounded-[8px] rounded-t-lg ">
                    <img
                      src="/mindful-meditation-video/button_play-icon.png"
                      alt="Play button"
                    />
                  </div>
                  <video
                    src={video?.content?.videoUrl}
                    alt={video?.content?.title}
                    className="md:max-h-[198px] md:rounded-[8px] rounded-t-lg  md:max-w-[370px] md:min-h-[198px] md:min-w-[370px] max-h-[193px] max-w-[357px] min-h-[193px] min-w-[357px] object-cover object-center    xl:pr-[6px]"
                  />{" "}
                </div>
                <div className="w-full flex gap-[9px] items-center md:px-[4px] px-[20px] ">
                  <div className="max-w-[26px] w-full ">
                    {" "}
                    <VideoIconSvg />
                  </div>
                  <h3 className="text-[22px] md:text-[24px] font-[600] leading-[64px] text-[#4A4946]">
                    {" "}
                    {video?.content?.title}
                  </h3>
                </div>
                <p className="text-[#5E480ABF] md:px-[4px] px-[20px] ">
                  categories:{" "}
                  <span className="text-[#245A1E] underline cursor-pointer text-[16px] font-[600] leading-[20px]">
                    {video?.content?.category}
                  </span>{" "}
                </p>
                <p className="text-[#000000BF] break-words md:pl-[5px] px-[20px] md:pr-[0px] xl:max-w-[354px] min-h-[120px]  mt-[14px]  w-full text-[16px] font-[400] leading-[26px] md:leading-[20px] font-proximaNova">
                  {video?.content?.description
                    ?.split("")
                    .slice(0, 220)
                    .join("")}
                  ...
                </p>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="w-full flex justify-center font-proximaNova text-[28px] leading-[24px] font-[700] mt-[100px]">
            No Video To Show
          </h1>
        )}
        {/* Pagination */}
        <div className="flex justify-between items-center lg:mt-[60px] md:mt-[40px] mt-[45px] max-w-[586px] w-full mx-auto">
          <button
            className="py-[23px]  max-w-[64px] w-full text-[18px] leading-[18px] text-[#245A1E] font-[900] font-proximaNova cursor-pointer"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </button>
          <div className="flex space-x-2  justify-center w-full  ">
            {[...Array(totalPages || 1)]?.map((_, index) => (
              <button
                key={index}
                className={`py-[23px] rounded-[6px]  max-w-[64px] w-full text-[18px] leading-[18px]  font-[900] ${currentPage === index + 1
                  ? "bg-[#245A1E] border-[#245A1E] border text-[#fff] "
                  : "bg-transparent   text-[#00000040] border-[#00000040] border-[1px] "
                  }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            className="py-[23px]  max-w-[64px] w-full text-[18px] leading-[18px] text-[#245A1E] font-[900] font-proximaNova cursor-pointer"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeditationVideos;
