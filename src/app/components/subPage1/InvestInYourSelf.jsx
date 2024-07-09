import InvestInYourSelfSvg from "@/assets/icons/InvestInYourSelfSvg";
import TitleAndPara from "../common/TitleAndPara";
import InvestInYourSwipper from "./InvestInYourSwipper";

function InvestInYourSelf() {
  const data = {
    title: "Invest In Yourself.",
    paragraph:
      "Lifestyle changes take time, education, and yes, funds. Investing in your health is the greatest of all investments.",
  };
  const videoConsultaionData = [
    {
      title: "Video Consulting",
      subtitle: "HIPAA Complaint",
      svg: "videoConsultaion",
    },
    {
      title: "Personalized Plan",
      subtitle: "Custom goal-setting",
      svg: "PersonalizedPlan",
    },
    {
      title: "Progress Tracking",
      subtitle: "Maintain your results",
      svg: "ProgressTracking",
    },
    {
      title: "No Medical Advice",
      subtitle: "Limited scope of practice",
      svg: "NoMedicalAdvise",
    },
  ];
  return (
    <div className="xl:max-w-[1307px] lg:max-w-[690px] md:max-w-[573px] max-w-[375px] w-full mx-auto mt-[50px] md:mt-[87px] lg:mt-[100px] xl:mt-[130px] xl:flex xl:justify-between pb-[40px] md:pb-[73px] lg:pb-[109px] xl:pb-[163px]">
      {/* left -div */}
      <div className=" max-w-[343px] mx-auto lg:m-0 lg:max-w-[690px] md:max-w-[573px] xl:max-w-[677px] w-full ">
        <TitleAndPara
          title={data.title}
          para={data.paragraph}
          extraClasses={
            "xl:max-w-[606px] lg:max-w-[690px] lg:max-w-[571px] max-w-[534px] mx-auto xl:mx-0 text-center xl:text-start  w-full  "
          }
          titleStyle={
            "xl:text-[56px] md:text-[36px] xl:mx-0 mx-auto  md:leading-[56px] xl:leading-[48px] md:font-[600] text-[28px] leading-[32px] max-w-[343px] md:max-w-[534px]  font-[600] xl:font-[700] text-[#5E480A]"
          }
          paraStyle={
            "font-[400] md:leading-[28px] lg:max-w-[571px] leading-[26px] text-[16px] md:text-[20px] mt-[10px] md:mt-[2px] lg:mt-[12px] xl:mx-0 mx-auto"
          }
        />
        <div className="xl:max-w-[677px] lg:max-w-[690px] max-w-[218px] mx-auto lg:mx-0 w-full font-proximaNova lg:flex   justify-between lg:mt-[35px] xl:mt-[28px] flex-wrap">
          {videoConsultaionData.map((item, index) => {
            return (
              <div
                className=" max-w-[218px] md:max-w-[318px] w-full  lg:flex gap-[7px] mt-[25px]  xl:mt-[30px]  "
                key={index}
              >
                <div className=" lg:max-w-[34px] lg:block  flex justify-center items-center  w-full ">
                  <InvestInYourSelfSvg InvestInYourSelf={item.svg} />
                </div>

                <div className=" max-w-[251px] w-full flex-col gap-[7px] md:mt-[10px] ">
                  <h1 className=" w-full text-[#5E480A] font-[600] lg:text-[30px] text-[26px]  leading-[28px]">
                    {item.title}
                  </h1>
                  <p className=" w-full text-[#5D6E5B] font-[400]  text-[16px] lg:text-[22px] leading-[28px] tracking-[0.1px] mt-[7px]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="hidden lg:block  max-w-[677px] lg:text-center xl:text-start w-full font-[400] text-[20px] leading-[28px] text-[#000000BF] mt-[51px]  lg:mt-[46px] ">
          Getting started is not always easy. At Lifelong Wellness, we make it
          simple. No tiers. Everyone gets what they need. You just pick the
          number of sessions and re-book as needed
          <br />
          <br /> With Dr. Puryear by your side as a trusted and knowledgeable
          accountability partner, take charge of your health and reclaim it now.
        </p>
      </div>
      {/* right-div */}

      <InvestInYourSwipper />

      <p className="flex lg:hidden  max-w-[343px] md:max-w-[534px]  md:mt-[54px] mt-[45px] mx-auto lg:text-center xl:text-start w-full font-[400] text-[16px] leading-[26px] md:text-[20px] md:leading-[28px]  text-center text-[#000000BF] ">
        Getting started is not always easy. At Lifelong Wellness, we make it
        simple. No tiers. Everyone gets what they need. You just pick the number
        of sessions and re-book as needed.
        <br />
        <br /> With Jerome by your side as a trusted and knowledgeable
        accountability partner, take charge of your health and reclaim it now
      </p>
    </div>
  );
}

export default InvestInYourSelf;
