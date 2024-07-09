import Link from "next/link";
import React from "react";

const BmiPopUp = () => {
  return (
    <div className="absolute xl:max-h-[848px] lg:max-h-[603px] md:max-h-[452px] max-h-[836px] z-[10] inset-0 m-auto">
      <div className="xl:max-w-[1182px]  lg:max-w-[840px] md:max-w-[630px] max-w-[315px] w-full rounded-[35px] bg-[#D3CBB3] xl:px-[55px] lg:px-[43px] md:px-[33px] px-[21px] xl:py-[48px] lg:py-[33px] md:py-[23px] py-[18px] mx-auto relative">
        <button className="absolute xl:top-[29px] lg:top-[20px] xl:right-[28px] lg:right-[19px] top-[15px] right-[15px] ">
          <svg
            className="xl:w-[33px] xl:h-[33px] lg:w-[23px] lg:h-[23px] w-[17px] h-[17px]"
            width={33}
            height={33}
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.34">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.52034 7.52132C7.7137 7.3282 7.97581 7.21973 8.24909 7.21973C8.52237 7.21973 8.78448 7.3282 8.97784 7.52132L25.4778 24.0213C25.5792 24.1157 25.6604 24.2296 25.7168 24.3561C25.7732 24.4826 25.8035 24.6191 25.8059 24.7576C25.8083 24.8961 25.7829 25.0336 25.731 25.162C25.6791 25.2904 25.6019 25.4071 25.504 25.505C25.4061 25.6029 25.2894 25.6801 25.161 25.732C25.0326 25.7839 24.8951 25.8093 24.7566 25.8069C24.6182 25.8044 24.4816 25.7741 24.3551 25.7178C24.2286 25.6614 24.1148 25.5801 24.0203 25.4788L7.52034 8.97882C7.32722 8.78546 7.21875 8.52335 7.21875 8.25007C7.21875 7.97679 7.32722 7.71468 7.52034 7.52132Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.4735 7.52132C25.6667 7.71468 25.7751 7.97679 25.7751 8.25007C25.7751 8.52335 25.6667 8.78546 25.4735 8.97882L8.97353 25.4788C8.77804 25.661 8.51948 25.7601 8.25232 25.7554C7.98515 25.7507 7.73025 25.6425 7.5413 25.4535C7.35236 25.2646 7.24413 25.0097 7.23942 24.7425C7.2347 24.4754 7.33387 24.2168 7.51603 24.0213L24.016 7.52132C24.2094 7.3282 24.4715 7.21973 24.7448 7.21973C25.0181 7.21973 25.2802 7.3282 25.4735 7.52132Z"
                fill="black"
              />
            </g>
          </svg>
        </button>
        <img
          className="mx-auto xl:w-[114px] xl:h-[47px] lg:w-[81px] lg:h-[33px] md:w-[60px] w-[60px] md:h-[25px] h-[25px]"
          src="/explore-your-health/ama.svg"
          alt=""
        />
        <h1 className="text-center xl:text-[30px] lg:text-[21px] md:text-[16px] text-[25px] xl:leading-[55px] lg:leading-[38px] leading-[29px] font-medium w-fit mx-auto mt-[11px]">
          Clarify Role of BMI as a Measure of Obesity
        </h1>
        <p className="max-w-[1034px] w-full mx-auto xl:text-[20px] lg:text-[15px] text-[12px] xl:leading-[35px] lg:leading-[26px] leading-[19px] mt-[10px] text-center opacity-50">
          Under the newly adopted policy, the AMA recognizes issues with using
          BMI as a measurement due to its historical harm, its use for racist
          exclusion, and because BMI is based primarily on data collected from
          previous generations of non-Hispanic white populations. Due to
          significant limitations associated with the widespread use of BMI in
          clinical settings, the AMA suggests that it be used in conjunction
          with other valid measures of risk such as, but not limited to,
          measurements of visceral fat, body adiposity index, body composition,
          relative fat mass, waist circumference and genetic/metabolic factors.
          The policy noted that BMI is significantly correlated with the amount
          of fat mass in the general population but loses predictability when
          applied on the individual level. The AMA also recognizes that relative
          body shape and composition differences across race/ethnic groups,
          sexes, genders, and age-span is essential to consider when applying
          BMI as a measure of adiposity and that BMI should not be used as a
          sole criterion to deny appropriate insurance reimbursement
        </p>
        <p className="max-w-[1034px] w-full mx-auto xl:text-[20px] lg:text-[15px] text-[12px] xl:leading-[35px] lg:leading-[26px] leading-[19px] mt-[3px] text-center opacity-50">
          AMA adopts new policy clarifying role of BMI as a measure in medicine
          June 14 2023
          <br />{" "}
          <Link
            href={
              "https://www.ama-assn.org/press-center/press-releases/ama-adopts-new-policy-clarifying-role-bmi-measure-medicine"
            }
            className="hover:underline"
          >
            https://www.ama-assn.org/press-center/press-releases/ama-adopts-new-policy-clarifying-role-bmi-measure-medicine
          </Link>
        </p>
        <div className="rounded-[13px] bg-opacity-15 mt-[21px] bg-[#AC544B] max-w-[1072px] w-full xl:px-[19px] lg:px-[13px] md:px-[10px] px-[6px] xl:py-[12px] py-[9px]">
          <p className=" text-[#960E0E] xl:text-[20px] lg:text-[15px] text-[12px] xl:leading-[35px] lg:leading-[26px] leading-[19px] text-center">
            BMI ALONE IS INSUFFIENT marker of Abdominal Adiposity (Fat), As a
            result, it’s useful to look at waist circumference in addition to
            BMI to assess abdominal adiposity (abdominal fat)
          </p>
        </div>
        <p className="max-w-[1034px] w-full mx-auto xl:text-[20px] lg:text-[15px] text-[12px] xl:leading-[35px] lg:leading-[26px] leading-[19px] mt-[21px] text-center opacity-50">
          If your waist circumference suggest abdominal obesity, you may want to
          talk with your doctor about what your next steps are, including losing
          weight.
        </p>
      </div>
    </div>
  );
};

export default BmiPopUp;
