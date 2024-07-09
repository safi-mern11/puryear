"use client";

import { useState } from "react";

function Faqs() {
  const [faqs, setFaqs] = useState([
    {
      id: 0,
      question: "What is considered health and well-being coaching?",
      answer:
        "Health and well-being coaching is a process where a coach works with individuals to help them achieve their personal health and wellness goals. This can include areas such as nutrition, exercise, stress management, and overall lifestyle improvements.",
      open: true,
    },
    {
      id: 1,
      question: "Who is health and well-being coaching for?",
      answer:
        "Health and well-being coaching is for anyone looking to improve their health, manage stress, achieve personal goals, and enhance their overall quality of life. It can be beneficial for people of all ages and backgrounds.",
      open: false,
    },
    {
      id: 2,
      question:
        "What specific services do you offer as a health and well-being coach?",
      answer:
        "As a health and well-being coach, I offer personalized coaching sessions, nutritional guidance, fitness plans, stress management techniques, and support for mental and emotional well-being.",
      open: false,
    },
    {
      id: 3,
      question: "What are the benefits of health and well-being coaching?",
      answer:
        "The benefits of health and well-being coaching include improved physical health, enhanced mental clarity, better stress management, increased motivation, and the achievement of personal health goals.",
      open: false,
    },
    {
      id: 4,
      question:
        "How do you ensure a comfortable and supportive coaching environment for clients?",
      answer:
        "I ensure a comfortable and supportive coaching environment by creating a safe, non-judgmental space for clients to express themselves. I use active listening, empathy, and tailored coaching strategies to meet each client's unique needs.",
      open: false,
    },
    {
      id: 5,
      question:
        "How often should I have health and well-being coaching sessions?",
      answer:
        "The frequency of coaching sessions can vary depending on individual needs and goals. Typically, sessions are held weekly or bi-weekly to provide consistent support and guidance.",
      open: false,
    },
    {
      id: 6,
      question:
        "Can health and well-being coaching help with chronic illnesses?",
      answer:
        "Yes, health and well-being coaching can be beneficial for managing chronic illnesses. Coaches can work with clients to develop personalized plans that address their specific health challenges and improve their overall quality of life.",
      open: false,
    },
    {
      id: 7,
      question:
        "What qualifications should a health and well-being coach have?",
      answer:
        "A qualified health and well-being coach should have formal training and certification in health coaching, nutrition, fitness, or a related field. They should also have experience working with clients to achieve health and wellness goals.",
      open: false,
    },
    {
      id: 8,
      question: "How do I get started with health and well-being coaching?",
      answer:
        "To get started with health and well-being coaching, you can schedule an initial consultation to discuss your goals and determine if the coaching services are a good fit for you.",
      open: false,
    },
    {
      id: 9,
      question: "What is the difference between health coaching and therapy?",
      answer:
        "Health coaching focuses on helping clients achieve specific health and wellness goals through lifestyle changes and personalized plans. Therapy, on the other hand, addresses mental health issues and emotional well-being through psychological methods and interventions.",
      open: false,
    },
  ]);

  const toggleFaq = (id) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) =>
        faq.id === id ? { ...faq, open: !faq.open } : { ...faq, open: false }
      )
    );
  };

  return (
    <div className="max-w-[343px] md:max-w-[670px] lg:max-w-[927px] xl:max-w-[927px] w-full mx-auto xl:mt-[158px] lg:mt-[109px] md:mt-[107px]  mt-[60px] xl:pb-[147px] lg:pb-[83px] md:pb-[94px] pb-[58px]">
      <h1 className="text-[#5E480A] text-[28px] leading-[32px] font-[600] lg:text-[46px] lg:leading-[56px] md:text-[36px] md:leading-[56px] text-center xl:text-[52px] font-proximaNova lg:font-[700] max-w-[221px] md:max-w-[667px] w-full mx-auto">
        Frequently Asked Questions
      </h1>
      <p className="max-w-[343px] md:hidden w-full text-center font-proximaNova font-[400] leading-[26px] mx-auto mt-[12px]">
        Lifestyle changes take time, education, and yes, funds. Investing in
        your health is the greatest of all investments.
      </p>

      <div className="lg:max-w-[927px] md:max-w-[670px]  flex flex-col gap-[15px] md:gap-[12px] lg:gap-[20px] xl:gap-[30px] w-full xl:mt-[58px] lg:mt-[42px] mx-auto mt-[30px]">
        {faqs.map(({ id, question, answer, open }) => (
          <div
            key={id}
            className="bg-[#FFFFFFD9] lg:max-w-[927px] rounded-[18px] pt-[22px] pb-[20px] xl:py-[25px] pl-[31px] pr-[24px] px-[40px] max-w-[927px] md:max-w-[670px] w-full cursor-pointer relative shadow-md"
            onClick={() => toggleFaq(id)}
          >
            <div className="max-w-[286px] md:max-w-[592px] lg:max-w-[846px] w-full flex justify-between font-proximaNova items-center">
              <h1 className="max-w-[238px] md:max-w-[477px] lg:max-w-[732px] w-full text-[16px] leading-[20px] lg:text-[22px] lg:leading-[28px] xl:text-[22px] font-[500] xl:leading-[28px] text-[#5E480A]">
                {question}
              </h1>
              <div className="max-w-[31px] w-full md:max-w-[52px] lg:max-w-[85px]">
                <svg
                  viewBox="0 0 85 83"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: `rotate(${open ? 90 : 0}deg)`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <g filter="url(#filter0_d_1283_91846)">
                    <ellipse
                      cx="42.5925"
                      cy="36.659"
                      rx="26.2175"
                      ry="25.3309"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M39.375 44.916L47.882 36.6594L39.375 28.4028"
                    stroke="#0F4708"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <filter
                      id="filter0_d_1283_91846"
                      x="0.375"
                      y="0.328125"
                      width="84.4346"
                      height="82.6621"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="5" />
                      <feGaussianBlur stdDeviation="8" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1283_91846"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1283_91846"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              className={`max-w-[236px] md:max-w-[592px] lg:max-w-[846px] w-full transition-all duration-700 ease-in-out overflow-hidden ${
                open ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <h1 className="w-full text-[18px] font-[500] mt-4 leading-[30px] text-[#5E480A]">
                {answer}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
