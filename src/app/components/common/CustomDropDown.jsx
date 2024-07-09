"use client";
import React, { useState } from "react";

const CustomDropDown = ({ selectedCategory, onSelectCategory, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (category) => {
    onSelectCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="lg:max-w-[360px] md:max-w-[297px] w-full bg-[#FFFFFF] rounded-[8px] gap-[14px] cursor-pointer relative ">
      <div
        className="max-w-[360px] w-full bg-[#FFFFFF] rounded-[8px] outline-none text-[18px] font-[600] leading-[18px] pt-[17px] pb-[19px] pl-[20px] pr-[21px] cursor-pointer flex justify-between items-center text-[#222222]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCategory}
        <svg
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6968 1L9.43042 9L1.16406 1"
            stroke="#245A1E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {isOpen && (
        <ul className="absolute z-50 bg-white border rounded-[8px] w-full">
          {options.map((items) => (
            <li
              key={items.option}
              className="py-[18px] px-[12px] cursor-pointer hover:bg-[#F5EBCE] hover:font-[700]"
              onClick={() => handleSelect(items.value)}
            >
              {items.option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropDown;
