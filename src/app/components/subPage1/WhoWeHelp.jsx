import TitleAndPara from "../common/TitleAndPara";
import WhoWeHelpSwiper from "./WhoWeHelpSwiper";

function WhoWeHelp() {
  const data = {
    title: "Who We Help",
    paragraph:
      "Those who want to embrace a healthier lifestyle and transform their existing health into wellness.",
  };
  return (
    <div className="bg-[#3C523F] pt-[46px]  lg:pt-[115px] md:pt-[84px] md:pb-[30px] pb-[34px] font-proximaNova lg:pb-[55px]  overflow-hidden">
      <TitleAndPara
        extraClasses={
          "xl:max-w-[758px] max-w-[343px] md:max-w-[541px] text-center  mx-auto font-proximaNova "
        }
        titleStyle={
          "xl:text-[56px] md:text-[36px] lg:text-[46px] md:text-[36px] text-[28px] leading-[32px] text-[#E7E4DC] font-[600] xl:font-[700] text-[#5E480A] lg:leading-[48px]"
        }
        paraStyle={
          "xl:max-w-[723px] md:max-w-[541px]  max-w-[343px] mx-auto text-[#E7E4DCBF] xl:text-[24px] md:text-[20px] text-[16px] leading-[26px] md:leading-[28px]  font-[400] text-[#000000BF] text-center xl:leading-[30px] xl:mt-[17px]  mt-[10px]"
        }
        title={data.title}
        para={data.paragraph}
      />
      <div className="xl:mt-[76px] lg:mt-[55px] md:mt-[33px] mt-[21px] w-full xl:max-w-[1450px] lg:max-w-[1020px] md:max-w-[710px]  max-w-[343px] mx-auto ">
        <WhoWeHelpSwiper />
      </div>
    </div>
  );
}

export default WhoWeHelp;
