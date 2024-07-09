"use client";
import React, { useState } from "react";
import faqQuestion from "../../../../utils/faqs";

const Faqs = () => {
  const [selectOpen, setSelectOpen] = useState(true);
  const [selectValue, setSelectValue] = useState("general");
  const [faqs, setFaqs] = useState(faqQuestion);

  const selectValues = [
    { title: "General Information", value: "general" },
    { title: "Session Details, Logistics and Cancellations", value: "session" },
    {
      title: "Coaching Philosophy, Methods and Medical Advice",
      value: "coaching",
    },
    {
      title: "Credentials and Professional Collaboration",
      value: "credentials",
    },
    { title: "Cost, Payment, and Support", value: "payment" },
  ];

  return (
    <div className="flex md:flex-row flex-col xl:gap-[31px] lg:gap-[22px] md:gap-[16px] gap-[14px] xl:max-w-[1156.19px] lg:max-w-[820px] md:max-w-[615px] max-w-[327px] w-full mx-auto">
      {/* Select */}
      <div
        className={`xl:py-[12.5px] lg:py-[8.5px] md:py-[6.5px] py-[5px] xl:px-[13.5px] lg:px-[13.5px] md:px-[8.5px] px-[4.5px] bg-[#F9F9F8]  xl:max-w-[367px] lg:max-w-[261px] md:max-w-[195px] max-w-full w-full rounded-[14.35px] transition-all duration-300 ease-in-out ${selectOpen
          ? "h-fit"
          : " xl:h-[92px] lg:h-[62px] md:h-[44px] h-[40px] overflow-hidden"
          }`}
      >
        {selectValues.map((item, index) => (
          <button
            onClick={() => {
              setSelectValue(item.value);
              setFaqs((prev) => ({
                ...prev,
                [selectValue]: prev[selectValue].map((i) => ({
                  ...i,
                  isOpened: false,
                })),
              }));
            }}
            key={index + "selectValue"}
            className={` xl:py-[21px] lg:py-[14px] md:py-[10px] py-[8px] ${item.value == "general"
              ? "xl:pr-[28px] lg:pr-[16px] md:pr-[12.54px] pr-[8.5px]"
              : "xl:pr-[15px] lg:pr-[1px] md:pr-[11px] pr-[9px]"
              } xl:pl-[24px] lg:pl-[17px] md:pl-[12.8px] pl-[8px] flex  justify-between cursor-pointer  rounded-[10px] items-center w-full ${selectValue == item.value
                ? `${!selectOpen && index == 0 ? "xl:bg-[#E7E4DC63]" : !selectOpen && index !== 0 ? "" : "xl:bg-[#E7E4DC63]"}  font-bold`
                : "bg-[#F9F9F8] opacity-65 font-normal"
              }`}
          >
            <p className=" w-full xl:text-[22.38px] lg:text-[16px] text-[12px] text-[#5E480A] font-proximaNova xl:leading-[25px] lg:leading-[18px] leading-[14px] text-start ">
              {item.title}
            </p>
            {item.value == "general" && (
              <i
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectOpen(!selectOpen);
                }}
              >
                <svg
                  className={`${selectOpen ? "rotate-180" : "rotate-0"
                    } xl:w-[16px] xl:h-[8px] lg:w-[11px] lg:h-[6px] w-[8.25px] h-[4.25px]   transition-all ease-in-out duration-300`}
                  width={18}
                  height={10}
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.97314L8.73831 1.00017L16.4766 8.97314"
                    stroke="#928359"
                    strokeWidth="1.87446"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
            )}
          </button>
        ))}
      </div>
      {/* faqs */}
      <div className="xl:max-w-[759px] max-w-[539px] w-full flex flex-col xl:gap-[25px] lg:gap-[18px]  gap-[14px]">
        {faqs[selectValue].map((item, index) => (
          <div
            style={{
              boxShadow: " 0px 4.09px 13.1px 0px rgba(8, 15, 52, 0.06)",
            }}
            key={index + "faqs"}
            className="w-full xl:pt-[16px] lg:pt-[11px] lg:pb-[17px] pt-[9px] pb-[12px]  xl:px-[33px] lg:px-[22px] md:px-[17px] px-[14px]  rounded-[15px] bg-[#FFFFFF] bg-opacity-85 transition-all ease-in-out duration-300"
          >
            <div className="flex justify-between items-center">
              <p className="xl:max-w-[605px] lg:max-w-[430px] md:max-w-[322px] max-w-[248px] w-full xl:text-[18px] lg:text-[12px] text-[10px] leading-[13px] xl:leading-[22px] lg:leading-[16.3px] text-[#5E480A] font-proximaNova">
                {item.question}
              </p>
              <button
                onClick={() =>
                  setFaqs((prev) => ({
                    ...prev,
                    [selectValue]: prev[selectValue].map((faq, i) =>
                      i === index
                        ? { ...faq, isOpened: !faq.isOpened }
                        : { ...faq, isOpened: false }
                    ),
                  }))
                }
                style={{
                  boxShadow: "0px 4.09px 13.1px 0px rgba(8, 15, 52, 0.06)",
                }}
                className="rounded-full xl:w-[42px] xl:h-[42px] lg:w-[30px] lg:h-[30px] w-[22px] h-[22px] flex items-center justify-center bg-[#fff]"
              >
                <svg
                  className={`${item.isOpened ? "rotate-180" : "rotate-0"
                    } transition-all ease-in-out duration-300 xl:w-[20px] xl:h-[20px] lg:w-[13x] lg:h-[13px] w-[8px] h-[8px]`}
                  width={16}
                  height={10}
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.44336 1.4375L8.20096 8.40003L14.9586 1.4375"
                    stroke="#0F4708"
                    strokeWidth="1.6369"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {item.isOpened && (
              <p className="text-[#5E480A] xl:mt-[5px] lg:mt-[4px] md:mt-[3px] mt-[4px] font-proximaNova xl:max-w-[614px] lg:max-w-[436px] md:max-w-[327px] max-w-[264px] w-full xl:leading-[28px] lg:leading-[20px] leading-[14px] xl:text-[18px] lg:text-[13px] text-[10px] opacity-[45%]">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
