"use client"
import React, { useState } from 'react'
import Button from '../common/Button'
import Link from 'next/link'
import DisclaimerModal from '../common/DisclaimerModal'

const AreYouReady = () => {
  const actions = [
    "Are you ready to take real steps and get the expert confidential support you need,  without fear of judgment? ",
    "Are you ready to stop worrying about your weight, dealing with chronic problems like diabetes and heart issues, never getting enough sleep, and feeling over-stressed at work and at home?",
    "Are you ready to gain mental clarity, accept yourself, reduce your stress levels, and achieve the best health outcome possible?",
    "Are you ready to start living the life you want and deserve? Then let's talk."
  ]
  const [disclaimerModel, setDisclaimerModel] = useState(false);
  return (
    <>
      {disclaimerModel && (
        <DisclaimerModal setDisclaimerModel={setDisclaimerModel} />
      )}
      <div className="xl:py-[77px] lg:py-[54px] md:py-[41px] py-[32px]  bg-[#EDEAE4]">
        <h1 className="xl:text-[44px] lg:text-[31px] text-[23px] xl:leading-[54px] lg:leading-[38px] leading-[29px] text-[#5E480A] font-proximaNova max-w-[890px] mx-auto text-center">Are you ready to take action to achieve lifelong <span className="font-bold">wellness?</span></h1>
        <div className="flex flex-col xl:gap-[23.5px] lg:gap-[17px] md:gap-[13px] gap-[11px] xl:pt-[49px] lg:pt-[34px] md:pt-[26px] pt-[15px]">
          {actions.map((i, index) => (
            <div className="xl:max-w-[952px] lg:max-w-[679px] md:max-w-[513px] max-w-[307px] w-full mx-auto xl:py-[22px] lg:py-[15px] md:py-[11px] md:px-[20px] px-[13px] py-[9px] xl:px-[39px] lg:px-[27px] bg-[#FFFFFF3D] rounded-[12px]" key={index + "action"}>
              <p className="xl:text-[18px] lg:text-[13px] text-[10px] xl:leading-[28px] lg:leading-[20px] leading-[15px] text-[#000000BF] font-proximaNova tracking-[0.1px]">{i}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col xl:gap-[30px] lg:gap-[21px] md:gap-[16px] gap-[11px] items-center xl:pt-[45px] lg:pt-[31px] md:pt-[35px] pt-[24px]">
          {/* <Button
            target
            href={"https://calendar.drjeromepuryear.com/"}
            text={"Book A Call"}
            lg
            extraClasses={
              "lg:max-w-[147px] md:max-w-[110px] max-w-[127px] xl:max-w-[207px] bg-[#0F4708] text-[#FFFFFF] xl:min-h-[60px]  lg:min-h-[42.72px] min-h-[31px]     font-[700] lg:text-[14px] text-[10px] lg:leading-[17px] leading-[12px] lg:text-[20px] lg:leading-[24px]"
            }
          /> */}
          <button
            onClick={() => {
              setDisclaimerModel(true);
            }}
            className="hover:scale-105 font-proximaNova hover:opacity-90 justify-center transition-all duration-100 ease-linear lg:max-w-[147px] md:max-w-[110px] max-w-[127px] xl:max-w-[207px] bg-[#0F4708] text-[#FFFFFF] xl:min-h-[60px]  lg:min-h-[42.72px] min-h-[31px]     font-[700]  text-[10px]  leading-[12px] lg:text-[20px] lg:leading-[24px] w-full rounded-[30px]"
          >
            Book A Call
          </button>
          <p className="lg:text-[15px] text-[11px] leading-[15px] lg:leading-[20px] xl:text-[20px] xl:leading-[24px] text-[#5E480A]">Want more information? <Link href={""}>See</Link></p>
          <Button
            text={"How It Works"}
            lg
            extraClasses={
              "lg:max-w-[147px] md:max-w-[110px] max-w-[127px] xl:max-w-[207px] bg-transparent text-[#827040] border-[2px] border-[#827040]  xl:min-h-[60px]  lg:min-h-[42.72px] min-h-[31px]  flex items-center    font-[700] lg:text-[14px] text-[10px] lg:leading-[17px] leading-[12px] lg:text-[20px] lg:leading-[24px]"
            }
          />
        </div>
      </div>
    </>
  )
}

export default AreYouReady;
