import SubpagesTitleAndPara from "../common/SubpagesTitleAndPara";
const data = {
  title: "Mindful Meditation Moments ",
  paragraph:
    " True Meditation has no direction or goal. It is a space we create for ourselves to surrender. Its a silent prayer.",
};

function MindfulMeditationMoments() {
  return (
    <>
      <SubpagesTitleAndPara
        subpage2
        mindfulMeditation
        subpage_paragraph={data.paragraph}
        subpage_title={data.title}
        extraStyleParaTitle={
          "xl:pt-[71px] lg:pt-0 lg:pl-0 lg:max-w-[492px] md:max-w-[422px] lg:max-w-[492px]  xl:max-w-[704px]  w-full "
        }
        extraMainStyle={
          "xl:max-w-[1284px] lg:max-w-[942px] md:max-w-[786px] md:ml-[45px] ml-0 xl:pt-[52px] lg:pt-[107px] pb-[30px] lg:pb-[57px]  md:pb-[21px] xl:pb-[63px] md:flex md:gap-[20px] xl:gap-[54px] xl:mx-auto md:pt-[43px] pt-[60px] max-w-[375px]  "
        }
        extraTitleStyle={
          "max-w-[271px]  lg:max-w-[492px] md:max-w-[395px]  md:mx-0 mx-auto   md:pt-[34px] lg:pt-0 xl:max-w-[704px] text-[30px] leading-[34px] text-center md:text-start md:text-[44px] md:leading-[48px] lg:text-[56px] lg:leading-[56px] xl:text-[70px] w-full font-[700] xl:leading-[70px]"
        }
        paraStyle={
          " max-w-[294px] md:max-w-[395px] md:text-[20px] md:leading-[28px] md:mt-[11px] mt-0  lg:max-w-[458px] lg:leading-[33px] lg:text-[23px] lg:mt-[20px] lg:max-w-[458px] xl:text-[26px] xl:leading-[36px] xl:max-w-[641px] mx-auto md:mx-0 lg:mx-0 text-center md:text-start  w-full font-[400]  text-[16px] leading-[26px]"
        }
      />
    </>
  );
}

export default MindfulMeditationMoments;
