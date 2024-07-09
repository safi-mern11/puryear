import Faqs from "@/app/components/common/Faqs";
import HowItWorks from "@/app/components/subPage1/HowItWorks";
import Mindfulness from "@/app/components/subPage1/Mindfulness";
import WhyChooseUs from "@/app/components/subPage1/WhyChooseUs";


export const metadata = {
  title: "Create A Life Full of Longevity",
};
function ExploreHealth() {
  const data = {
    title: "Create the Life You Want to Live,  Starting Today",
  };
  return (
    <>
      <div className='xl:px-[50px] lg:px-[140px] md:px-[100px] px-[50px] xl:pt-[106px] lg:pt-[75px] xl:pb-[98px] lg:pb-[65px] md:pt-[56px] md:pb-[48px] pt-[60px] pb-[60px] bg-[#3C523F]'>
        <h1 className='xl:text-[64px] lg:text-[45px] md:text-[34px] text-[30px] text-[#DCCEA4] xl:leading-[64px] lg:leading-[44px] md:leading-[38px] leading-[34px] font-normal text-center font-proximaNova max-w-[930px] mx-auto'>
          Create the Life You Want to Live, Starting <span className='font-bold'>Today</span>
        </h1>
      </div>

      <HowItWorks />
      <WhyChooseUs />
      {/* <WhoWeHelp />
      <InvestInYourSelf /> */}
      <Mindfulness />

      <div className='xl:pt-[67px] lg:pt-[47px] md:pt-[35px] pt-[23px] xl:pb-[100px] lg:pb-[90px] md:pb-[67px] pb-[43px] flex flex-col xl:gap-[63px] lg:gap-[44.41px] md:gap-[33.55px] gap-[23px]'>
        <h1 className='xl:text-[50px] lg:text-[35px] text-[29px] text-[#5E480A] xl:leading-[60px] lg:leading-[42px] leading-[31px] font-bold text-center font-proximaNova md:hidden block'>
          (FAQs)
        </h1>
        <h1 className='xl:text-[50px] lg:text-[35px] text-[29px] text-[#5E480A] xl:leading-[60px] lg:leading-[42px] leading-[31px] font-normal text-center font-proximaNova md:block hidden'>
          Frequently Asked Questions <span className='font-bold'>(FAQs)</span>
        </h1>
        <Faqs />
      </div>
    </>
  )
}

export default ExploreHealth;
