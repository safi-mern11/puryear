import ToInspireFacbook from "@/assets/icons/ToInspireFacbook";
import ToInspireInst from "@/assets/icons/ToInspireInst";
import ToInspireThread from "@/assets/icons/ToInspireThread";
import ToInspireTwitter from "@/assets/icons/ToInspireTwitter";
import Link from "next/link";

function SapienId() {
  const ebookData = [
    {
      email: "@jeromepuryear",
      svgId: <ToInspireFacbook />,
      href: "https://www.facebook.com/",
    },
    {
      email: "jeromepuryear",
      svgId: <ToInspireInst />,
      href: "https://www.instagram.com",
    },
    { email: "jeromepuryear", svgId: <ToInspireThread />, href: "/thread.com" },
    {
      email: "@jeromepuryear",
      svgId: <ToInspireTwitter />,
      href: "https://twitter.com/login",
    },
  ];
  return (
    <div className="max-w-[342px] xl:max-w-[1284px]  lg:max-w-[948px] md:max-w-[650px] w-full mx-auto font-proximaNova mt-[33px] md:mt-[61px] lg:mt-[82px] xl:mt-[115px] flex flex-col justify-center items-center  ">
      <h1 className="max-w-[725px] text-center text-[22.5px] leading-[21.6px] capitalize text-[#5E480A] w-full  font-[400] mx-auto  xl:text-[50px] lg:text-[35.6px] md:text-[26.8px] md:leading-[25.7px] lg:leading-[34.2px]">
        To inspire & build our <span className="font-[700]"> best lives </span>
      </h1>
      <p className="max-w-[290px] lg:max-w-[404px] xl:max-w-[518px] opacity-[58%] md:max-w-[331px] w-full font-[400] text-[#5E480A] text-center text-[12.61px] leading-[12.6px] mt-[6.1px] md:mt-[8.32px] lg:mt-[10.63px] xl:mt-[16px] md:text-[15px] md:leading-[15px] lg:text-[19.96px] xl:text-[28px]  lg:leading-[20px] ">
        Connect with Dr. Puryear on Social Media
      </p>

      <div className="w-full max-w-[282px] xl:max-w-[1284px] md:max-w-[650px] lg:max-w-[864px] xl:mt-[66px] md:mt-[34px] mt-[31px] lg:mt-[44px] gap-y-[11.36px] grid grid-cols-2 md:grid-cols-4 md:gap-[12px] lg:gap-[16px]  xl:gap-[23px]">
        {ebookData.map((data, index) => {
          return (
            <Link
              key={index}
              href={data.href}
              className=" hover:scale-105 font-proximaNova hover:opacity-90 transition-all duration-100 ease-linear cursor-pointer xl:max-w-[285px] lg:max-w-[203px] md:max-w-[153px] max-w-[135px] py-[18px] px-[15px] md:px-[17px] lg:pr-[18px] lg:pl-[22px] lg:pt-[27px] lg:pb-[25px] md:py-[21px] xl:px-[32px] xl:py-[39px]   flex justify-between items-center md:rounded-[16px] rounded-[14px]  lg:rounded-[21px] xl:rounded-[29px] bg-[#FFFFFF3D] "
            >
              <div className="max-w-[168px] xl:max-w-[261px]   lg:max-w-[168px] w-full flex xl:justify-between lg:gap-[8px] gap-[3.5px]  items-center">
                <div className="xl:max-w-[27px] lg:max-w-[29px] max-w-[14px]  w-full">
                  {/* logo */}
                  {data.svgId}
                </div>
                {/* Email */}
                <p className="w-full text-[12px] xl:text-[25px] lg:text-[18px] lg:leading-[13px] md:text-[13.5px] md:leading-[9.7px] font-[400] text-center leading-[8.6px] text-[#614C12]">
                  {data.email}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SapienId;
