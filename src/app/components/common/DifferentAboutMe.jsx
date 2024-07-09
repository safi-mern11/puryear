import Button from "./Button";

function DifferentAboutMe({ landing }) {
  const about = [
    {
      id: 0,
      description:
        'Bridges the common "gap" that occurs between receiving medical advice and actually sticking with it - even if you have failed multiple times before. ',
    },
    {
      id: 1,
      description:
        "Gives you a safe, non-judgmental, no-embarrassment zone where you can make sustainable lifestyle changes and maximize your overall well-being ",
    },
    {
      id: 2,
      description:
        "Expertly guides you to the goals YOU want, customized to your own specific qualities and deep self-knowledge. ",
    },
    {
      id: 3,
      description:
        "Complements the guidance you get from your healthcare professional and illuminating the specific steps to take, tailored to your situation.",
    },
    {
      id: 4,
      description:
        "Takes a uniquely holistic and tailored approach that goes far beyond fitness coaching to address not only your physical well-being, but your mental and emotional well-being as well. ",
    },
    {
      id: 5,
      description:
        "Provides clarity and expertise in weight management, stress reduction, chronic disease management, behavior change, and overall lifestyle improvement.",
    },
  ];
  return (
    <div className="w-full bg-[#EDEAE4]  xl:pb-[100px]  lg:pb-[72px]  md:pb-[53px]  pb-[35px] font-proximaNova">
      <div className="max-w-[319px] md:max-w-[634px] lg:max-w-[843px] xl:max-w-[1192px] w-full mx-auto">
        {landing && (
          <h1 className="hidden md:block xl:pt-[111px] lg:pt-[54px] md:pt-[41px] pt-[40px] md:max-w-[368px] lg:max-w-[489px] xl:max-w-[687px] w-full text-[20.6px]  leading-[25.1px]  md:text-[23.8px]  md:leading-[29px]  lg:text-[31.76px]  lg:leading-[38.5px] xl:text-[44.5px] text-[#5E480A] font-[400] xl:leading-[54px] mx-auto text-center">
            What’s different about me?
            <span className="inline-block font-[600]">
              6-Pillar Lifelong Wellness Bridge
            </span>
          </h1>
        )}
        <div>
          {/*  */}
          {!landing && (
            <div className="xl:max-w-[1192px] xl:pt-[111px] lg:pt-[79px] md:pt-[59px] pt-[26px] lg:max-w-[850px] md:max-w-[643px] w-full mx-auto flex-col-reverse md:flex-row flex justify-between  xl:pb-[109px] md:pb-[30px] bg-[#EDEAE4]">
              <div className="xl:max-w-[438px] lg:max-w-[312px] md:max-w-[236px] w-full rounded-[30px] ">
                <img
                  className="xl:max-w-[438px] w-full rounded-[30px] lg:max-w-[348px] max-w-[236px] mx-auto md:mx-0  mt-[20px] md:mt-0"
                  style={{ boxShadow: " 0px 9px 10px 0px #0000001F" }}
                  src="/about-images/about-author-section.png"
                  alt="about-author"
                />
              </div>

              <div className="xl:max-w-[687px] lg:max-w-[490px] md:max-w-[370px] w-full text-center md:text-start">
                <h1 className="xl:max-w-[687px] lg:max-w-[490px] md:max-w-[370px] w-full text-[20px] leading-[25px] xl:text-[44.5px] lg:text-[31px] md:text-[24px] text-[#5E480A] font-[400] lg:leading-[38px] md:leading-[29px] xl:leading-[54px] ">
                  What’s different about me?
                  <span className="inline-block font-[700]  ">
                    6-Pillar Lifelong Wellness Bridge
                  </span>
                </h1>
                <p className="xl:max-w-[641px] w-full text-[10px] leading-[15px] xl:text-[20px] lg:text-[14px] font-[400] xl:leading-[28px] lg:leading-[20px] md:text-[10px] md:leading-[15px] text-[#5E480A] mt-[12px] md:mt-[18px]">
                  Hi, I'm <span className="font-[700]">Jerome Puryear.</span> I
                  specialize in creating personalized health and well-being
                  plans that bridge the gap between getting health advice and
                  taking action. Using a holistic and comprehensive approach,
                  your own customized 6-Pillar Lifelong Wellness Bridge will
                  address the many facets of your life and behavior to help you
                  making actual progress and improve your health, your
                  well-being, and your life... even if you haven't succeeded
                  before.
                  <br />
                  <br />
                  <span className="inline-block text-[#5E480A6B]">
                    I work with people from all walks who want to embrace a
                    healthier lifestyle and transform their existing health into
                    lasting wellness. You will receive personalized sessions,
                    behavior change support, goal setting, lifestyle management
                    guidance, and motivational strategies tailored to your
                    individual needs. I can help you gain clarity, set and
                    achieve better goals, develop healthier habits, improve
                    self-confidence, and sustain long-term positive change.
                  </span>
                </p>
              </div>
            </div>
          )}

          {/* main-div */}
          <div
            className={`max-w-[319px] md:max-w-[634px] lg:max-w-[843px] xl:max-w-[1183px] w-full md:mt-[33px] lg:mt-[44px] xl:mt-[63px] flex md:flex-row ${
              landing ? "flex-col-reverse" : "flex-col"
            }  justify-between mx-auto`}
          >
            {/* left-div */}
            <div className="max-w-[314px] md:max-w-[343.7px] mt-[13px] md:mt-0 lg:max-w-[457px] xl:max-w-[641px] w-full font-[400] xl:py-[19px] lg:py-[12px] md:py-[10px] mx-auto md:mx-0">
              <ul className="pl-[15px] md:pl-[30px]">
                {about.map((data) => {
                  return (
                    <li
                      key={data.id}
                      className="text-[9.8px] leading-[13.7px] xl:text-[20px] xl:leading-[28px]  lg:text-[14px]  lg:leading-[20px]   md:text-[10.7px]  md:leading-[15px] list-disc text-[#5E480A] "
                    >
                      {data.description}
                    </li>
                  );
                })}
              </ul>
            </div>

            {landing && (
              <>
                <h1 className="max-w-[319px] md:hidden w-full text-[20.6px] mt-[32px]  leading-[25.1px]  md:text-[23.8px]  md:leading-[29px]  lg:text-[31.76px]  lg:leading-[38.5px] xl:text-[44.5px] text-[#5E480A] font-[400] xl:leading-[54px] mx-auto text-center">
                  What’s different about me?
                  <span className="inline-block font-[600]">
                    6-Pillar Lifelong Wellness Bridge
                  </span>
                </h1>

                <div className=" mx-auto md:mx-0 max-w-[264px] lg:max-w-[351px] xl:max-w-[493px] w-full mt-[20px] md:mt-0">
                  <img
                    src="/different-about/main-right-image.png"
                    alt="main-right"
                  />
                </div>
              </>
            )}
            {!landing && (
              <div className="hidden md:block mx-auto md:mx-0 max-w-[264px] lg:max-w-[351px] xl:max-w-[493px] w-full mt-[20px] md:mt-0">
                <img
                  src="/different-about/main-right-image.png"
                  alt="main-right"
                />
              </div>
            )}
          </div>
          <div className="max-w-[102px]  md:max-w-[88px] lg:max-w-[117.6px]  xl:max-w-[165px] mx-auto w-full pt-[13px] lg:pt-[44.9px] xl:pt-[63px]  md:pt-[40px]">
            <Button
              lg
              extraClasses={
                "max-w-[102px] py-[10px]  md:max-w-[88px] xl:max-w-[165px] lg:max-w-[117.6px] w-full xl:pt-[19px] xl:pb-[17px] lg:pt-[13px] lg:pb-[11px] bg-[#8B7B4D] rounded-[30px] text-[#FFFFFF] text-[12px] leading-[14px] xl:text-[20px] font-[400] xl:leading-[24px] lg:text-[14.2px] lg:leading-[17px] md:text-[10.7px] md:leading-[13px] "
              }
              text={"Learn More"}
            />
          </div>

          {!landing && (
            <div className="md:hidden mx-auto md:mx-0 max-w-[264px] lg:max-w-[351px] xl:max-w-[493px] w-full mt-[20px] md:mt-0">
              <img src="/different-about/main-right-image.png" alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DifferentAboutMe;
