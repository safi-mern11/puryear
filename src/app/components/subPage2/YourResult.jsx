import CircumferenceChart from "./CircumferenceChart";
import GaugeChart from "./GaugeChart";

function YourResult({ circumference, bmi }) {
  return (
    <div
      style={{ boxShadow: "0px 7.11px 11.69px 0px #8E8E8E40" }}
      className="xl:max-w-[601px] lg:px-[34px] max-w-[320px] lg:max-w-[428px] md:mx-0 md:mt-[47px]  mt-[21px] w-full font-proximaNova bg-[#CAC0A3BF] mx-auto rounded-[5.08px] pt-[27px] pb-[20px]  lg:pb-[30px] lg:pt-[26px] xl:pt-[37px]   "
    >
      <h1 className="max-w-[255px] xl:max-w-[478px] lg:max-w-[341px]  w-full  mx-auto font-[700] text-[#FFFFFF] xl:text-[22px] lg:text-[15.9px] lg:leading-[18.8px] text-[11.93px] xl:leading-[26px] leading-[14.1px] bg-[#1E6921] text-center pt-[6.5px] pb-[5.5px] lg:py-[12px]">
        Your Results!
      </h1>
      <h2 className="max-w-[165px] md:max-w-[285px]  w-full xl:mt-[30px] lg:mt-[22px]  mt-[16px] mx-auto font-[600] text-[11.39px] leading-[18.4px]  lg:text-[15px] lg:leading-[24px]  text-[#000000] text-center">
        You’re done with the numbers
      </h2>
      <h1 className="lg:max-w-[519px] max-w-[270px]  w-full mx-auto text-center text-[#000000BF] font-[400] text-[7.47px] leading-[10.1px] xl:text-[14px] lg:text-[9px] lg:leading-[13px] lg:tracking-[0.04px] xl:leading-[19px] tracking-[0.05px]'">
        Now, let’s unpack these numbers and what light they shed on your overall
        health.{circumference && "You have a waist circumference of"}
        {bmi && "You have a BMI of "}
        {circumference && (
          <span className="max-w-[91px] w-full lg:pb-[4px]  border-b-[#3C523F] border-b justify-center text-center ">
            {" "}
            <p className="max-w-[15px] lg:max-w-[53px] inline-block w-full xl:text-[26px] lg:text-[15px] text-[11.3px] leading-[18.4px] lg:leading-[24px] font-[700] text-[#000] ">
              {" "}
              00{" "}
            </p>{" "}
          </span>
        )}
        {bmi && (
          <span className="max-w-[91px] w-full lg:pb-[4px]  border-b-[#3C523F] border-b justify-center text-center ">
            {" "}
            <p className="max-w-[15px] lg:max-w-[53px] inline-block w-full xl:text-[26px] lg:text-[15px] lg:leading-[24px] text-[11.3px] leading-[18.4px] font-[700] text-[#000] ">
              {" "}
              90{" "}
            </p>{" "}
          </span>
        )}
      </h1>
      {circumference && <CircumferenceChart value={90} />}
      {bmi && <GaugeChart value={90} />}
      <div className="max-w-[255px] lg:max-w-[479px] w-full  border-[#000000] border-[0.51px] px-[14px] pb-[9.9px] rounded-[12.75px] lg:rounded-[23.88px] xl:pt-[13px] xl:pb-[19px] xl:px-[27px] lg:px-[18px]  lg:pb-[14px] pt-[6.94px]   border-dashed  mx-auto ">
        <h2 className="max-w-[142px] text-[8.68px] leading-[18.4px] lg:max-w-[266px]  w-full mx-auto font-[600] xl:text-[16px] xl:leading-[34px] lg:text-[11.6px] lg:leading-[24.6px] text-[#000000] text-center">
          What’s the deal with these numbers?
        </h2>
        {bmi && (
          <h1 className="xl:max-w-[479px] w-full mx-auto text-center text-[#000000BF] font-[400] text-[7.47px] leading-[10.1px]  xl:text-[14px] xl:leading-[19px] xl:tracking-[0.05px] lg:text-[9.98px] lg:leading-[13.5px]">
            <span className="font-[700] inline-block"> BMI </span> — BMI is a
            screening tool for obesity. Being overweight or having a high BMI
            can lead to o future health risks including Type 2 diabetes, heart
            disease, gallstones, bone and joint problems and several cancers.
            However, BMI alone can be insufficient marker of abdominal adiposity
            (fat).
          </h1>
        )}
        {circumference && (
          <h1 className="max-w-[226px] lg:max-w-[425px] mt-[3px] w-full mx-auto text-center text-[#000000BF] font-[400] text-[7.47px] leading-[10.1px]  xl:text-[14px] xl:leading-[19px] xl:tracking-[0.05px] lg:text-[9.98px] lg:leading-[13.5px]">
            <span className="font-[700] inline-block">
              {" "}
              Waist Circumference{" "}
            </span>{" "}
            — Higher waist circumference is strongly associated with all-cause
            and cardiovascular mortality with or without adjustment for BMI.
          </h1>
        )}
      </div>

      <div className=" w-full mx-auto text-center xl:mt-[26px] mt-[17px]  lg:mt-[22px] xl:max-w-[439px] lg:max-w-[313px] max-w-[233px] ">
        <h1 className="xl:text-[19px] xl:leading-[17px] lg:text-[13px] lg:leading-[12px] xl:max-w-[218px] md:max-w-[513px] text-[10.3px] leading-[9.22px] w-full mx-auto font-[700] text-[#5B4200]">
          Transformational Change
        </h1>
        <p className="xl:max-w-[439px] lg:max-w-[313px] w-full font-[400] xl:text-[14px] xl:leading-[20px] lg:text-[9.98px] lg:leading-[14.26px] text-[7.47px] leading-[10.67px] text-[#604D19] mx-auto ">
          If you want to fully maximize your health and wellness which may
          require transformational change consider health coaching. This change
          occurs one step at a time. The first step is often the hardest, but
          when made the result can be the most rewarding.
        </p>
      </div>
    </div>
  );
}

export default YourResult;
