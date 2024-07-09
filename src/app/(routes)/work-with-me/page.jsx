import Contact from "@/app/components/common/Contact";
import WorkWithMe from "@/app/components/common/WorkWithMe";
import AreYouReady from "@/app/components/subPage2/AreYouReady";


function Page() {
  return (
    <>
      <WorkWithMe />
      <AreYouReady />
      <Contact />
      <div className="bg-[#EDEAE4] xl:pt-[63px] lg:pt-[44px] md:pt-[33px] xl:pb-[57px] lg:pb-[40px] md:pb-[30px] pt-[24px] pb-[26px]">
        <h1 className="xl:text-[45px] lg:text-[32px] md:text-[24px] text-[24px] xl:leading-[55px] lg:leading-[39px] md:leading-[29px] leading-[29px] text-[#5E480A]  xl:max-w-[638px] lg:max-w-[455px] md:max-w-[344px] max-w-[342px] w-full mx-auto text-center font-proximaNova">Let's get you living with wellness, joy, and <span className="font-bold">purpose</span></h1>
      </div>
    </>
  );
}

export default Page;
