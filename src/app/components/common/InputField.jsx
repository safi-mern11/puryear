"use client";
import React, { useState } from "react";

const InputField = ({ placeholder, options, readOnly, type }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="xl:max-w-[532px] lg:max-w-[379px] max-w-[282px] w-full rounded-[30px] bg-[#FFFFFF] justify-between flex mt-[10px] lg:mt-[14px] xl:mt-[33px] font-proximaNova pr-[20px] md:pr-[32px]  border-[#A1A1A1] border-solid focus:outline-none focus:border-transparent focus:ring-0 border-[1px]">
      <input
        type={type}
        placeholder={placeholder}
        className=" max-w-[285px] lg:max-w-[405px] w-full rounded-[30px] font-[400] xl:text-[18px] lg:text-[12.8px] lg:leading-[17.1px] xl:leading-[18px]  md:leading-[24px] text-[9.57px] leading-[12.8px] tracking-[0.1px] outline-none xl:pt-[19px] xl:pb-[17px] lg:py-[14px] xl:pl-[30px]  md:pl-[33px] pl-[17px]"
        value={readOnly && selectedOption}
        readOnly={readOnly}
      />
      <div className="relative xl:max-w-[87px] lg:max-w-[62px] max-w-[44px] w-full ">
        <button
          className="flex justify-between items-center text-[#245A1E] max-w-[105px] w-full xl:text-[20px] font-[700] xl:leading-[68px] lg:text-[14.2px] lg:leading-[48.5px] text-[10.63px] leading-[36px] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
          <div className="xl:max-w-[20px] lg:max-w-[14.2px] max-w-[10px] w-full">
            <img src="/inches-arrow.png" alt="arrow" />
          </div>
        </button>
        {isOpen && (
          <div className="absolute md:w-24 bg-white border border-gray-300 rounded-md shadow-lg">
            <ul className="py-1">
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
