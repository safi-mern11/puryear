"use client";
import { useState } from "react";
import Button from "../common/Button";
import YourResult from "./YourResult";
import InputField from "../common/InputField";
import DisclaimerModal from "../common/DisclaimerModal";

function Height() {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("BMI");
  const selectValues = [
    { title: "BMI", value: "BMI" },
    { title: "Waist Circumference", value: "Waist Circumference" },
  ];
  const [disclaimerModel, setDisclaimerModel] = useState(false);
  return (
    <>
      {disclaimerModel && (
        <DisclaimerModal setDisclaimerModel={setDisclaimerModel} />
      )}
      <div className="bg-[#EDEAE4] ">
        {/* Calculate-Input */}
        <div className="flex xl:gap-[48px] lg:gap-[27px] md:gap-[25px] gap-[29px] lg:pt-[33px] pt-[27px] xl:pt-[47px] justify-center ">
          <h1 className="xl:text-[40px] xl:leading-[58px] lg:text-[28.5px] lg:leading-[48.5px]  text-[21px] leading-[36px]  text-[#5E480A] font-proximaNova font-bold">
            Calculate:
          </h1>

          <div
            className={`relative border  border-[#A1A1A1] bg-[#FFFFFFBF] xl:max-w-[294px] lg:max-w-[209px] max-w-[156px] w-full xl:rounded-[30px] lg:rounded-[21px] rounded-[16px]  xl:px-[29px] lg:px-[20px] xl:py-[18px] px-[14.5px] py-[0px]  `}
          >
            <div
              onClick={() => setSelectOpen(!selectOpen)}
              className={`  w-full ${
                selectOpen ? "xl:pb-[18px]  " : ""
              } cursor-pointer`}
            >
              <p className="xl:text-[20px] xl:leading-[20px] lg:text-[14px] lg:leading-[48px] text-[10px]  leading-[36px]  text-[#245A1E] font-proximaNova font-bold">
                {selectedValue}
              </p>
            </div>
            <i
              onClick={() => setSelectOpen(!selectOpen)}
              className="cursor-pointer"
            >
              <svg
                className={`${
                  selectOpen ? "rotate-0" : "rotate-180"
                } lg:max-w-[14.26px] max-w-[10.6px] absolute xl:top-[20px] lg:top-[15px] top-[8px] xl:right-[30px] right-[13px] transition-all ease-in-out duration-300`}
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.2196 4.4442L0.31951 13.3445C0.113495 13.5503 -8.96041e-08 13.8251 -7.67964e-08 14.1181C-6.39887e-08 14.4111 0.113495 14.6859 0.31951 14.8918L0.974789 15.5472C1.40178 15.9737 2.09576 15.9737 2.52209 15.5472L9.99585 8.07344L17.4779 15.5555C17.6839 15.7613 17.9586 15.875 18.2514 15.875C18.5446 15.875 18.8192 15.7613 19.0254 15.5555L19.6805 14.9C19.8865 14.694 20 14.4194 20 14.1264C20 13.8334 19.8865 13.5586 19.6805 13.3527L10.7723 4.4442C10.5656 4.23786 10.2897 4.12453 9.99634 4.12518C9.70187 4.12453 9.4261 4.23786 9.2196 4.4442Z"
                  fill="#245A1E"
                />
              </svg>
            </i>
            <button
              onClick={() => {
                selectedValue == "BMI"
                  ? setSelectedValue("Waist Circumference")
                  : setSelectedValue("BMI");
                setSelectOpen(false);
              }}
              className={`${
                selectOpen ? "border-t-[2px] border-[#614C1224] " : "hidden"
              } w-full text-start xl:text-[20px] xl:leading-[20px] lg:text-[14px] lg:leading-[48px] text-[10px] leading-[36px]  text-[#245A1E] font-proximaNova font-bold xl:pt-[18px]`}
            >
              {selectedValue == "BMI" ? "Waist Circumference" : "BMI"}
            </button>
          </div>
        </div>

        {/* Input field and chart */}
        {selectedValue === "BMI" ? (
          <div className=" xl:max-w-[1190px] lg:max-w-[848px] md:max-w-[635px] w-full md:flex justify-between mx-auto md:pb-[56px] lg:pb-[52px]  xl:pb-[73px] pb-[35px] ">
            <div className="xl:max-w-[536px] lg:max-w-[382px] max-w-[282px] w-full xl:pt-[86px] lg:pt-[60px] pt-[7px] md:pt-[58px] font-proximaNova mx-auto md:mx-0">
              <h1 className="font-[700] xl:text-[40px] xl:leading-[68px] lg:text-[28px] lg:leading-[48px] text-[21.52px] leading-[36px] text-[#5E480A]">
                Height
              </h1>
              <p className="max-w-[532px] w-full text-[#000000BF] text-[7.97px] leading-[12.8px] xl:text-[15px] xl:leading-[24px] lg:text-[10.7px] lg:leading-[17.1px] lg:tracking-[0.07px] font-[400]">
                Grab a pencil and walk to the nearest wall. Place your entire
                body flat against it. Follow this image and make a mark where
                the top of your head meets the wall. Measure the distance from
                the floor to the mark on the wall.
              </p>
              <InputField
                type={"number"}
                placeholder="Enter your height here"
                options={["inches", "lbs"]}
              />
              <h1 className="font-[700] xl:text-[40px] xl:leading-[68px] lg:text-[28px] lg:leading-[48px] text-[21.52px] leading-[36px] text-[#5E480A] lg:mt-[20px] mt-[15px]">
                Weight
              </h1>
              <p className="max-w-[532px] w-full text-[#000000BF] text-[7.97px] leading-[12.8px] xl:text-[15px] xl:leading-[24px] lg:text-[10.7px] lg:leading-[17.1px] lg:tracking-[0.07px] font-[400]">
                If you have a digital or analog weight scale at home, you simply
                step on it, read the number the scale stops on.
              </p>
              <InputField
                type={"number"}
                placeholder="Enter your weight here"
                options={["inches", "lbs"]}
              />

              <div className="xl:max-w-[532px] lg:max-w-[379px]  max-w-[283px]  w-full pt-[20px] lg:pt-[27px] xl:pt-[39px]">
                <Button
                  text={"Submit Results"}
                  lg
                  href={"#"}
                  extraClasses={
                    "xl:max-w-[532px] lg:max-w-[379px]  max-w-[283px]  text-[#FFFFFF] font-[700] xl:text-[20px] xl:leading-[24px] lg:text-[14.26px] lg:leading-[17.1px] text-[10.67px] leading-[12.8px]  w-full bg-[#0F4708] pt-[10px] pb-[8.8px] lg:pt-[13px] lg:pb-[11px] xl:pt-[19px] xl:pb-[17px]  bg-[#0F4708]"
                  }
                />
              </div>
            </div>

            <YourResult bmi />
          </div>
        ) : (
          <div className="xl:max-w-[1190px] lg:max-w-[848px] md:max-w-[635px] w-full md:flex justify-between mx-auto lg:pb-[52px] xl:pb-[73px] pb-[35px]  ">
            <div className="xl:max-w-[536px] lg:max-w-[382px] max-w-[282px] w-full xl:pt-[86px] lg:pt-[60px] pt-[7px] md:pt-[58px] font-proximaNova mx-auto md:mx-0">
              <h1 className="font-[700] xl:text-[40px] xl:leading-[68px] lg:text-[28px] lg:leading-[48px] text-[21.52px] leading-[36px]  text-[#5E480A]">
                Gender
              </h1>
              <p className="max-w-[532px] w-full text-[#000000BF] text-[7.97px] leading-[12.8px] xl:text-[15px] xl:leading-[24px] lg:text-[10.7px] lg:leading-[17.1px] lg:tracking-[0.07px] font-[400]">
                Choose your gender to correctly measure your BMI{" > "}
              </p>
              <InputField
                readOnly
                placeholder="Choose your gender"
                options={["Male", "Female"]}
              />
              <h1 className="font-[700] xl:text-[40px] xl:leading-[68px] lg:text-[28px] lg:leading-[48px] text-[21.52px] leading-[36px]  text-[#5E480A] xl:mt-[29px] lg:mt-[20px] mt-[15px]">
                Waist Circumference
              </h1>
              <p className="max-w-[532px] w-full text-[#000000BF] text-[7.97px] leading-[12.8px] xl:text-[15px] xl:leading-[24px] lg:text-[10.7px] lg:leading-[17.1px] lg:tracking-[0.07px] font-[400]">
                Find the bottom of your ribs and the top of your hips. Place a
                tape measure around your middle at a point halfway between them,
                just above the belly button or something like this.
              </p>
              <InputField
                type={"number"}
                placeholder="Enter your waist circumference here"
                options={["inches", "lbs"]}
              />

              <div className="xl:max-w-[532px] lg:max-w-[379px]  max-w-[283px] w-full pt-[20px] lg:pt-[27px] xl:pt-[39px]">
                <Button
                  text={"Submit Results"}
                  lg
                  href={"#"}
                  extraClasses={
                    "xl:max-w-[532px] lg:max-w-[379px]  max-w-[283px] text-[#FFFFFF] font-[700] xl:text-[20px] xl:leading-[24px] lg:text-[14.26px] lg:leading-[17.1px] text-[10.67px] leading-[12.8px]  w-full bg-[#0F4708] pt-[10px] pb-[8.8px] lg:pt-[13px] lg:pb-[11px] xl:pt-[19px] xl:pb-[17px] bg-[#0F4708]"
                  }
                />
              </div>
            </div>

            <YourResult circumference />
          </div>
        )}
      </div>
      {/* lets-get-you */}
      <div className="xl:max-w-[638px] lg:max-w-[451px] max-w-[342px] mx-auto flex flex-col xl:gap-[41px] lg:gap-[28px] md:gap-[21px] gap-[20px] items-center xl:mt-[90px] lg:mt-[64px] md:mt-[48px] mt-[31px]">
        <h1 className="xl:text-[45px] xl:leading-[55px] xl:tracking-[-1px] capitalize lg:text-[32px] lg:leading-[39px] lg:tracking-[-0.71px] text-[24.13px] leading-[29.5px] text-[#5E480A]  max-w-[638px] w-full mx-auto text-center font-proximaNova">
          Let's get you living with wellness, joy, and{" "}
          <span className="font-bold">purpose</span>
        </h1>
        {/* <Button
          target
          href={"https://calendar.drjeromepuryear.com/"}
          text={"Book A Call"}
          lg
          extraClasses={
            "text-[#FFFFFF] font-[700] xl:text-[20px] xl:leading-[24px] xl:max-w-[243px] lg:max-w-[173px] max-w-[118px]  w-full bg-[#0F4708] xl:pt-[19px] lg:pb-[11px] lg:pt-[13px] lg:text-[14.26px] lg:leading-[17.1px] xl:pb-[17px] py-[12px] md:text-[10px] md:leading-[12px] text-[12px] leading-[12px] bg-[#0F4708]"
          }
        /> */}
        <button
          onClick={() => {
            setDisclaimerModel(true);
          }}
          className="hover:scale-105 font-proximaNova hover:opacity-90 justify-center transition-all duration-100 ease-linear text-[#FFFFFF] font-[700] xl:text-[20px] xl:leading-[24px] xl:max-w-[243px] lg:max-w-[173px] max-w-[118px]  w-full bg-[#0F4708] xl:pt-[19px] lg:pb-[11px] lg:pt-[13px] lg:text-[14.26px] lg:leading-[17.1px] xl:pb-[17px] py-[12px] md:text-[10px] md:leading-[12px] text-[12px] leading-[12px]  rounded-[30px]"
        >
          Book A Call
        </button>
      </div>
    </>
  );
}

export default Height;
