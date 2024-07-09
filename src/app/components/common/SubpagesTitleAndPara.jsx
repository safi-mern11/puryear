function SubpagesTitleAndPara({
  subpage_title,
  subpage_paragraph,
  extraMainStyle,
  extraTitleStyle,
  subpage2,
  mindfulMeditation,
  paraStyle,
  extraStyleParaTitle,
}) {
  return (
    <div className="w-full bg-[#3C523F] font-proximaNova overflow-x-hidden ">
      <div className={` ${extraMainStyle}   w-full mx-auto  `}>
        <div className={`${extraStyleParaTitle}`}>
          <h1 className={` ${extraTitleStyle} w-full  text-[#DCCEA4] `}>
            {subpage_title}
          </h1>
          {subpage2 && (
            <p
              className={` ${paraStyle} text-[#FFFFFF] md:mt-0  mt-[11px] xl:mt-[14px]`}
            >
              {subpage_paragraph}
            </p>
          )}
        </div>

        {mindfulMeditation && (
          <div className="xl:max-w-[472px] lg:max-w-[422px] md:max-w-[341px] max-w-[480px] mt-[28px] md:mt-0 ">
            <div className="xl:max-w-[472px] lg:max-w-[422px] md:max-w-[341px]  w-full flex justify-center items-center ">
              <img
                className="hidden lg:block lg:max-w-[199px] xl:max-w-[225px]"
                src="/mindful-meditation/section-1-image.png"
              />
              <img
                className="block md:hidden ml-[-55px] max-w-[180px]"
                src="/mindful-meditation/section-1-sm-image.png"
              />
              <img
                className="hidden md:block lg:hidden "
                src="/mindful-meditation/md-screen-1.png"
              />
            </div>
            <div className="w-full    justify-center md:justify-start  md:ml-[0px] flex lg:mt-[-35px] ">
              <img
                className="xl:max-w-[225px] w-full lg:mb-[40px] lg:mt-[40px]  lg:max-w-[199px]   lg:block hidden  "
                src="/mindful-meditation/section-2-image.png"
              />

              <img
                className="block md:hidden max-w-[180px] w-full  mb-[24px]"
                src="/mindful-meditation/section-2-md-image.png"
              />

              <img
                className="hidden md:block lg:hidden mb-[43px] md:max-w-[183px] w-full "
                src="/mindful-meditation/md-screen-2.png"
              />

              <img
                className="hidden lg:block md:mt-[40px] lg:mt-[80px] lg:max-w-[199px] xl:max-w-[225px]  max-w-[255px] w-full"
                src="/mindful-meditation/section-3-image.png"
              />
              <img
                className="block md:hidden  md:mt-[40px] lg:mt-[50px] max-w-[180px] w-full mt-[24px]"
                src="/mindful-meditation/section-3-md-image.png"
              />
              <img
                className="hidden md:block lg:hidden  md:pt-[20px] md:pb-[23px] lg:mt-[50px] md:max-w-[185px] max-w-[255px] w-full  "
                src="/mindful-meditation/md-screen-3.png"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SubpagesTitleAndPara;
