"use client"
import Button from '@/app/components/common/Button'
import DisclaimerModal from '@/app/components/common/DisclaimerModal'
import Faqs from '@/app/components/common/Faqs'
import React, { useState } from 'react'

const Page = () => {
    const paragraphs = [
        { title: "Chronic Conditions", desce: "I specialize in guiding patients dealing with chronic conditions such as obesity, cardiac disease, diabetes, and cancer prevention. " },
        { title: "Align choices with values", desce: "With a holistic perspective on patient care, I'm passionate about empowering my clients to create sustainable improvements in their health by aligning their choices with their values." }
    ];
    const [disclaimerModel, setDisclaimerModel] = useState(false);
    return (
        <>
            {disclaimerModel && (
                <DisclaimerModal setDisclaimerModel={setDisclaimerModel} />
            )}
            <div className=' w-full mx-auto'>
                <div className='px-[40px] xl:pt-[90px] lg:pt-[80px]  pt-[60px] xl:pb-[80px] lg:pb-[75px] md:pb-[56px] pb-[53px] bg-[#3C523F] '>
                    <h1 className='xl:text-[70px] lg:text-[45px] md:text-[38px] text-[30px] text-[#DCCEA4] xl:leading-[70px] lg:leading-[45px] leading-[38px] font-normal text-center font-proximaNova '>About Jerome Puryear, <span className='font-bold'>MD, MBA</span></h1>
                </div>
                <div className='flex flex-col xl:gap-[25px] lg:gap-[19px] md:gap-[14px] gap-[9px] w-full xl:pt-[79px] lg:pt-[52px] md:pt-[39px] pt-[20px] xl:px-0 px-4'>
                    <p className='max-w-[1150px] xl:text-[35px] lg:text-[26px] md:text-[19px] text-[14px] xl:leading-[51px] lg:leading-[38px] md:leading-[29px] leading-[22px] font-proximaNova w-full text-center mx-auto ' style={{ color: "rgba(94, 72, 10, 0.6)" }}>I am a <span style={{ color: "rgba(94, 72, 10, 1)" }}>Health and Well-Being Coach</span> with certification in Obesity in Medicine and Health and Wellness Coaching. I am Board Certified in Health & Wellness Coaching (NBC-HWC). </p>
                    <h1 className='xl:text-[40px] lg:text-[30px] md:text-[22px] text-[16px] xl:leading-[60px] lg:leading-[45.56px]  leading-[34px] font-proximaNova font-normal text-center text-[#5E480A] '>Health and Well-Being <span className='font-bold'>Coach</span></h1>
                    <p className='max-w-[1106px] w-full mx-auto text-[#5E480A] opacity-65 xl:text-[23px] lg:text-[17px] md:text-[13px] text-[12px] xl:leading-[39px] lg:leading-[29px]  leading-[22px] text-center'>I completed my residency at The University of Alabama at Birmingham, served two consecutive fellowships at Jackson Memorial Hospital, and then completed the Duke Health and Wellness Coaching program.</p>
                </div>
                <div className='flex md:flex-row md:text-start text-center flex-col xl:gap-[96px] lg:gap-[72.77px] md:gap-[54.61px] gap-[px] xl:pt-[20px] lg:pt-[14px] md:pt-[10.75px] pt-[9px] xl:max-w-[1106px] lg:max-w-[837px] md:max-w-[624px] max-w-[313px] justify-center  w-full mx-auto'>
                    {paragraphs.map((item, index) => (
                        <div key={index + "para"}
                            className='flex flex-col md:items-start items-center  max-w-[500px] w-full'>
                            <h1 className='xl:text-[22px] lg:text-[16.66px] text-[12.52px]  xl:leading-[60px] lg:leading-[45.56px] leading-[34px]  text-[#5E480A] font-bold font-proximaNova'>{item.title}</h1>
                            <p className='xl:text-[19px] lg:text-[14.4px] text-[11px]  xl:leading-[29px] lg:leading-[22px] leading-[16.5px]  text-[#5E480A] opacity-65 font-proximaNova'>{item.desce}</p>
                        </div>
                    ))
                    }
                </div>
                <div className='flex md:flex-row flex-col  xl:gap-[77px] justify-center items-center lg:gap-[58.37px] md:gap-[44px] gap-[9.13px] max-w-[1132px] w-full mx-auto xl:pt-[53px] lg:pt-[40px] md:pt-[29.65px] pt-[21px]'>
                    <img src="/about-images/green-cout.png" alt="" className='xl:w-[505px] xl:h-[564px] lg:w-[382px] lg:h-[427px] w-[287px] h-[320px]' />
                    <div className='flex flex-col md:text-start text-center xl:gap-[18px] lg:gap-[13.51px] md:gap-[10.23px] gap-[3px] xl:max-w-[560px] lg:max-w-[424px] max-w-[318px]  w-full xl:pt-[27px] lg:pt-[20px] md:pt-[15.36px] pt-[0px]'>
                        <div className='flex flex-col   w-full'>
                            <h1 className='xl:text-[22px] lg:text-[16.66px] text-[12.52px]  xl:leading-[60px] lg:leading-[45.56px] leading-[34px] text-[#5E480A] font-bold font-proximaNova'>Faith-Based Inspiration</h1>
                            <p className='xl:text-[19px] lg:text-[14.4px] text-[11px]  xl:leading-[29px] lg:leading-[22px] leading-[16.5px] text-[#5E480A] opacity-65 font-proximaNova'>As a specialist, my inspiration stems from my deep-rooted faith and the teachings of the Bible. Christ and the church have always played a central role in my life, shaping my empathy and compassion for those in need. It is a natural extension of my beliefs to care for individuals and support them in navigating their health and wellness journeys. One verse that resonates profoundly with me is 3 John 2: "Beloved, I pray that you may prosper in all things and be in health, just as your soul prospers."</p>
                        </div>
                        <div className='flex flex-col   w-full'>
                            <h1 className='xl:text-[22px] lg:text-[16.66px] text-[12.52px]  xl:leading-[60px] lg:leading-[45.56px] leading-[34px] text-[#5E480A] font-bold font-proximaNova'>Holistic Wellness Mission</h1>
                            <p className='xl:text-[19px] lg:text-[14.4px] text-[11px]  xl:leading-[29px] lg:leading-[22px] leading-[16.5px] text-[#5E480A] opacity-65 font-proximaNova'>This verse underscores the importance of nurturing physical, mental, and spiritual well-being. As a specialist, my mission is to approach my work with a holistic understanding, addressing the interconnected nature of these facets of wellness.</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center xl:gap-[55px] lg:gap-[42.82px] md:gap-[32.24px] gap-[24px] xl:pb-[91px] pb-0 xl:pt-[79px] lg:pt-[60px] md:pt-[45px] pt-[7px] xl:px-0 lg:px-[51px] md:px-[38px] px-[16px]'>
                    <p className='mx-auto max-w-[1215px] md:text-start text-center w-full xl:text-[22px] lg:text-[16.68px]  text-[12px] xl:leading-[36px] lg:leading-[27.29px] leading-[20.48px] opacity-65 font-proximaNova text-[#5E480A]  '>Drawing from my training in behavior change theory, motivational strategies, and health education, I help my clients activate their internal strengths. Throughout my training I observed that what healthcare providers were telling patients was not translating into meaningful behavioral change by those patients. This often led to symptoms of chronic disease and even premature death, rather than lifelong wellness. That's why I developed my 6-Pillar Customized Wellness Bridge system. With an emphasis in lifestyle management, I work one-on-one with you and guide you as you make self-directed changes that align with your values. I also leverage specialized training in behavior change theory, motivational strategies, health education, and promotion theories to help you activate your own internal strengths.</p>
                    {/* <Button
                    target
                    href={"https://calendar.drjeromepuryear.com/"}
                    text={"Book A Call"}
                    lg
                    extraClasses={
                        "lg:max-w-[147px] md:max-w-[110px] max-w-[127px] xl:max-w-[207px] bg-[#0F4708] text-[#FFFFFF] xl:min-h-[60px]  lg:min-h-[42.72px] min-h-[31px]  flex items-center    font-[700] lg:text-[14px] text-[10px] lg:leading-[17px] leading-[12px] xl:text-[20px] xl:leading-[24px]"
                    }
                /> */}
                    <button
                        onClick={() => {
                            setDisclaimerModel(true);
                        }}
                        className="hover:scale-105 font-proximaNova hover:opacity-90 justify-center transition-all duration-100 ease-linear lg:max-w-[147px] md:max-w-[110px] max-w-[127px] xl:max-w-[207px] bg-[#0F4708] text-[#FFFFFF] xl:min-h-[60px]  lg:min-h-[42.72px] min-h-[31px]  flex items-center    font-[700] lg:text-[14px] text-[10px] lg:leading-[17px] leading-[12px] xl:text-[20px] xl:leading-[24px] w-full rounded-[30px]"
                    >
                        Book A Call
                    </button>
                </div>
                <div className=' xl:bg-[#EDEAE4] xl:pt-[67px] lg:pt-[40px] md:pt-[40.76px] pt-[45px] xl:pb-[100px] lg:pb-[90px] md:pb-[67px] pb-[43px] flex flex-col xl:gap-[63px] lg:gap-[44px] md:gap-[33.55px] gap-[23px]'>
                    <h1 className='xl:text-[50px] lg:text-[35px] text-[29px] text-[#5E480A] xl:leading-[60px] lg:leading-[42px] leading-[31px] font-bold text-center font-proximaNova md:hidden block'>
                        (FAQs)
                    </h1>
                    <h1 className='xl:text-[50px] lg:text-[35px] text-[29px] text-[#5E480A] xl:leading-[60px] lg:leading-[42px] leading-[31px] font-normal text-center font-proximaNova md:block hidden'>
                        Frequently Asked Questions <span className='font-bold'>(FAQs)</span>
                    </h1>
                    <Faqs />
                </div>
            </div>
        </>
    )
}

export default Page
