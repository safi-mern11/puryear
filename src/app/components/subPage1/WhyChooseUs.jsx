import Button from "../common/Button";
import TitleAndPara from "../common/TitleAndPara";

function WhyChooseUs() {
  const data = {
    title: (
      <p>
        Why choose <span className="font-bold">Me?</span>
      </p>
    ),
    paragraph:
      "We know that change is not linear and that you need something unique to build resilience and grit. We offer personalized guidance, evidence-based strategies, and unwavering support to help you achieve lasting health and wellness.",
  };
  const resonsOfChoosing = [
    {
      imagePath: "/how-It-Works/consult.svg",
      title: "Video Consulting",
      para: "HIPAA Complaint",
    },
    {
      imagePath: "/how-It-Works/plan.svg",
      title: "Personalized Plan",
      para: "Custom goal-setting",
    },
    {
      imagePath: "/how-It-Works/progress.svg",
      title: "Progress Tracking",
      para: "Maintain your results",
    },
    {
      imagePath: "/how-It-Works/no.svg",
      title: "No Medical Advice",
      para: "Limited scope of practice",
    },
  ];
  return (
    <div className="xl:mt-[115px]  mt-[60px] md:mt-[90px] lg:mt-[100px] pt-[50px] pb-[70px]  md:py-[91px] lg:pt-[100px] lg:pb-[126px]  xl:pt-[120px] xl:pb-[132px] w-full font-proximaNova  mx-auto bg-[#EDEAE4] ">
      <TitleAndPara
        extraClasses={
          " lg:max-w-[758px] md:max-w-[580px] max-w-[343px] text-center mx-auto "
        }
        titleStyle={
          "xl:text-[54px] lg:max-w-[758px] lg:leading-[56px] max-w-[580px] xl:font-[400] text-[28px] md:text-[36px] md:leading-[56px] leading-[32px]  text-[#5E480A]   xl:leading-[68px]"
        }
        paraStyle={
          "lg:max-w-[758px] max-w-[580px] w-full text-[16px] leading-[26px] md:text-[20px]  font-[400] text-[#000000BF] md:leading-[28px] mt-[23px] "
        }
        title={data.title}
        para={data.paragraph}
      />
      <div className="xl:max-w-[670px] lg:max-w-[500px] md:max-w-[400px] max-w-[360px] w-full mx-auto flex flex-wrap md:justify-start justify-center xl:gap-x-[60px] lg:gap-x-[49px] md:gap-x-[36px] gap-x-[32px] xl:gap-y-[30px] lg:gap-y-[21px] md:gap-y-[15px] gap-y-[13px] xl:pt-[53px] lg:pt-[37px] md:pt-[28px] pt-[23px]">
        {resonsOfChoosing.map((i, index) => (
          <div className="flex gap-[7px] items-start " key={index + "reasons"}>
            <img
              className="xl:w-[34px] xl:h-[34px] lg:w-[24px] lg:h-[24px] md:w-[18px] md:h-[18px] w-[16px] h-[16px]"
              src={i.imagePath}
              alt=""
            />
            <div className="flex flex-col gap-[7px]">
              <h1 className="xl:text-[30px] lg:text-[21px]  md:text-[16px] text-[14px]  xl:leading-[28px] lg:leading-[20px] md:leading-[15px] leading-[13px] font-semibold text-[#5E480A] font-proximaNova">
                {i.title}
              </h1>
              <p className="xl:text-[22px] lg:text-[16px] md:text-[12px] text-[10px] flex items-center gap-[6px] tracking-[0.1px] xl:leading-[28px] lg:leading-[20px] md:leading-[15px] leading-[13px] text-[#5D6E5B] font-proximaNova">
                {i.para}
                {index == 3 && (
                  <button>
                    <svg
                      className="md:w-5 w-4"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6981 9.06779C10.6981 8.68249 10.3857 8.37012 10.0004 8.37012C9.61511 8.37012 9.30273 8.68249 9.30273 9.06779V14.6492C9.30273 15.0345 9.61511 15.3469 10.0004 15.3469C10.3857 15.3469 10.6981 15.0345 10.6981 14.6492V9.06779Z"
                        fill="#245A1E"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5229 4.47715 20 10 20C15.5229 20 20 15.5229 20 10C20 4.47715 15.5229 0 10 0ZM1.39535 10C1.39535 5.24779 5.24779 1.39535 10 1.39535C14.7522 1.39535 18.6047 5.24779 18.6047 10C18.6047 14.7522 14.7522 18.6047 10 18.6047C5.24779 18.6047 1.39535 14.7522 1.39535 10Z"
                        fill="#245A1E"
                      />
                      <path
                        d="M10.9308 6.28009C10.9308 6.79383 10.5143 7.21032 10.0005 7.21032C9.48678 7.21032 9.07031 6.79383 9.07031 6.28009C9.07031 5.76634 9.48678 5.34985 10.0005 5.34985C10.5143 5.34985 10.9308 5.76634 10.9308 6.28009Z"
                        fill="#245A1E"
                      />
                    </svg>
                  </button>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="xl:max-w-[758px] lg:max-w-[481px] md:max-w-[360px] max-w-[276px] w-full text-[16px] leading-[26px] md:text-[20px]  font-[400] text-[#000000BF] md:leading-[28px] xl:mt-[50px] lg:mt-[36px] md:mt-[27px] mt-[23px] text-center mx-auto">
        With Dr. Puryear by your side as a trusted and knowledgeable
        accountability partner, take charge of your health and reclaim it now.{" "}
      </p>
      <div className=" xl:pt-[53px] lg:pt-[37px] md:pt-[28px] pt-[30px]  flex justify-center w-full ">
        <Button
          lg
          href={"/work-with-me"}
          text={"Work With Me"}
          extraClasses={
            "lg:max-w-[147px] md:max-w-[110px] max-w-[119px] xl:max-w-[207px] bg-[#0F4708] text-[#FFFFFF] xl:min-h-[60px]  lg:min-h-[42.72px] min-h-[37px]  flex items-center    font-[700] lg:text-[14px] text-[10px] lg:leading-[17px] leading-[12px] xl:text-[20px] xl:leading-[24px]"
          }
        />
      </div>
    </div>
  );
}

export default WhyChooseUs;
