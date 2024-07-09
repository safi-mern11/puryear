"use client";
import React, { useState } from "react";
import CustomDropDown from "../common/CustomDropDown";
import Blogs from "./Blogs";

const options = [
  { option: "All Blogs", value: "All Blogs" },
  { option: "Physical Wellness", value: "PHYSICAL" },
  { option: "Social Wellness", value: "SOCIAL" },
  { option: "Financial Wellness", value: "FINANCIAL" },
  { option: "Mindfulness (Intellectual)", value: "INTELLECTUAL" },
];

const ITEMS_PER_PAGE = 4;

function AllBlogs({ data }) {
  const [selectedCategory, setSelectedCategory] = useState("All Blogs");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredBlogs =
    selectedCategory === "All Blogs"
      ? data
      : data?.filter((blog) => blog?.content?.category == selectedCategory);

  const totalPages = Math.ceil(filteredBlogs?.length / ITEMS_PER_PAGE);

  const paginatedBlogs = filteredBlogs?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="xl:max-w-[1260px] max-w-[350px] md:max-w-[612px] lg:max-w-[942px]   mx-auto pt-[38px] border-t-[#0000004D] border-t lg:mt-[110px] mt-0 lg:border-none md:pt-[50px] xl:pb-[114px]  xl:mt-[170px] w-full lg:pt-0 lg:pb-[78px] md:pb-[90px] pb-[72px] ">
      <div className="max-w-[350px] md:max-w-[399px] lg:max-w-[829px] xl:max-w-[1260px] mx-auto   w-full   md:block lg:flex justify-between">
        {/* heading */}
        <div className="hidden md:block lg:flex justify-center items-center  ">
          <h1 className=" w-full lg:text-[#505050] font-[600] text-center md:text-[36px] md:leading-[56px] lg:text-start lg:text-[24px] text-[#5E480A] lg:leading-[34px] uppercase xl:tracking-[3px]">
            {selectedCategory}
          </h1>
        </div>

        {/* sorting-div */}
        <div className="max-w-[442px] w-full flex lg:gap-[14px] items-center font-proximaNova  mt-[11px] lg:mt-0">
          <p className="max-w-[78px] w-full text-[20px] font-[600] leading-[34px] hidden md:inline-block">
            Sort by:
          </p>
          <CustomDropDown
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
            options={options}
          />
        </div>
      </div>
      <div className=" max-w-[350px] md:max-w-[399px] lg:max-w-[829px] xl:max-w-[1260px] w-full mt-[34px] md:mt-[58px] lg:mt-[55px] xl:mt-[41px] mx-auto ">
        {paginatedBlogs.length !== 0 ? (
          <div className="max-w-[1260px] w-full grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-2 xl:gap-y-[65px] gap-[25px] lg:gap-[30px] items-center ">
            {paginatedBlogs?.map((blog) => (
              <Blogs blog={blog?.content} slug={blog?.slug} />
            ))}
          </div>
        ) : (
          <h1 className="w-full flex justify-center font-proximaNova text-[28px] leading-[24px] font-[700] mt-[100px]">
            No BLog To Show
          </h1>
        )}

        {/* Pagination */}
        <div className="flex justify-between items-center md:mt-[40px] mt-[68px] max-w-[586px] w-full mx-auto ">
          <button
            className="py-[23px] max-w-[64px] w-full text-[18px] leading-[18px] text-[#245A1E] font-[900] font-proximaNova cursor-pointer"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </button>
          <div className="flex space-x-2 justify-center w-full">
            {[...Array(totalPages)]?.map((_, index) => (
              <button
                key={index}
                className={`py-[23px] rounded-[6px] max-w-[64px] w-full text-[18px] leading-[18px] font-[900] ${
                  currentPage === index + 1
                    ? "bg-[#245A1E] border-[#245A1E] border text-[#fff]"
                    : "bg-transparent text-[#00000040] border-[#00000040] border-[1px]"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            className="py-[23px] max-w-[64px] w-full text-[18px] leading-[18px] text-[#245A1E] font-[900] font-proximaNova cursor-pointer"
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

export default AllBlogs;
