function PrivacyAndTerms({ title, article }) {
  return (
    <div className="xl:max-w-[1204px] lg:max-w-[895px] md:max-w-[672px] max-w-[343px] w-full mx-auto font-proximaNova ">
      <h1 className="w-full font-[700] xl:text-[50px] lg:text-[46px] md:text-[36px] text-[28px] leading-[32px] md:leading-[63px] text-[#5E480A] ">
        {title}
      </h1>

      <article className="lg:mt-[41px] mt-[20px]  lg:text-[20px] font-[500] text-[16px] leading-[26px] md:leading-[28px] lg:leading-[34px] text-[#000000BF]">
        {article}
      </article>
    </div>
  );
}

export default PrivacyAndTerms;
