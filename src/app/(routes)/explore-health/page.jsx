import Contact from "@/app/components/common/Contact";
import SubpagesTitleAndPara from "@/app/components/common/SubpagesTitleAndPara";
import TitleAndPara from "@/app/components/common/TitleAndPara";
import WorkWithMe from "@/app/components/common/WorkWithMe";
import AreYouReady from "@/app/components/subPage2/AreYouReady";
import Height from "@/app/components/subPage2/Height";
import Link from "next/link";

export const metadata = {
  title: "Explore Your Health",
};
function ExploreHealth() {
  const data = {
    title: (
      <div>
        Transform Your Health and <span className="font-bold">Wellness</span>
      </div>
    ),
    paragraph: "Calculate your BMI and find out what it means",
  };
  const actions = [
    "Are you ready to take real steps and get the expert confidential support you need,  without fear of judgment? ",
    "Are you ready to stop worrying about your weight, dealing with chronic problems like diabetes and heart issues, never getting enough sleep, and feeling over-stressed at work and at home?",
    "Are you ready to gain mental clarity, accept yourself, reduce your stress levels, and achieve the best health outcome possible?",
    "Are you ready to start living the life you want and deserve? Then let's talk.",
  ];
  return (
    <div>
      <SubpagesTitleAndPara
        subpage2
        subpage_paragraph={data.paragraph}
        subpage_title={data.title}
        paraStyle={
          "mx-auto text-center font-[500] text-[16px] leading-[26px] md:text-[20px] md:leading-[36px] xl:text-[32px] xl:leading-[38px]  max-w-[255px] md:max-w-[641px] w-full "
        }
        extraMainStyle={
          "max-w-[354px] md:max-w-[745px] xl:max-w-[1141px] xl:pt-[90px] xl:pb-[92px] lg:py-[64px] md:py-[48px] pt-[47px] pb-[54px] "
        }
        extraTitleStyle={
          " max-w-[315px] md:max-w-[745px]  xl:max-w-[1141px] text-[30px] leading-[34px] md:text-[44px] md:leading-[52px] xl:text-[70px] w-full  xl:leading-[70px] text-center mx-auto"
        }
      />
      <TitleAndPara
        extraClasses={
          " max-w-[343px] md:max-w-[634px] lg:max-w-[896px] xl:max-w-[989px] mx-auto text-center lg:py-[49px] md:pt-[37px] md:pb-[36px] pt-[24px] pb-[26px] xl:pt-[75px] xl:pb-[60px] "
        }
        title={"BMI & Waist Circumference Calculator "}
        titleStyle={
          "font-[700] xl:text-[28px] xl:max-w-[690px] xl:leading-[32px] lg:max-w-[492px] md:max-w-[368px] lg:text-[28.5px] lg:leading-[28.5px]  md:text-[21.3px] md:leading-[21.3px]   xl:text-[40px] xl:leading-[40px] text-[21.3px] leading-[21px] text-[#245A1E] max-w-[259px] mx-auto"
        }
        para={
          <span className="w-full ">
            A high BMI (Body Mass Index) is associated with many chronic
            diseases such as heart disease, Type 2 Diabetes, and heart disease.
            It may need to be adjusted for some ethnic groups including some
            people of Asian descent where BMI may underestimate the risk due to
            excess abdominal fat.
            <br />
            When only height and weight are used to calculate BMI, the result
            may underestimate body fat for people with low muscle mass, such as
            the elderly. Alternately, this calculation method may overestimate
            body fat for people who are muscular.
          </span>
        }
        paraStyle={
          "xl:max-w-[989px] max-w-[315px] md:max-w-[527px] md:mt-[24.8px]  md:text-[9.61px] md:leading-[17.6px] md:tracing-[0.05px] mt-[13px] lg:mt-[32px] lg:max-w-[705px] md:max-w-[527px] xl:mt-[46px] lg:mt-[32px] font-[500]  lg:text-[12.84px] lg:leading-[23.5px] lg:tracking-[0.07px] lg:max-w-[705px] text-[12px] leading-[17.6px] tracking-[0.05px] md:leading-[28px] mx-auto   xl:text-[18px] xl:leading-[33px] tracking-[0.1px] text-[#000000BF]"
        }
      />
      <Height />
      {/* Work-With-ME */}
      <WorkWithMe />

      {/* Ready-To-Take-Action */}
      <AreYouReady />
      <Contact />
    </div>
  );
}

export default ExploreHealth;
