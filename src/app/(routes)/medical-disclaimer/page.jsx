import PrivacyAndTerms from "@/app/components/common/PrivacyAndTerms";

function Page() {
  const data = {
    title: "Medical Advice Disclaimer",
    article: (
      <div className=" font-proximaNova lg:leading-[34px] leading-[28px] tracking-[0.1px]">
        <h1 className="lg:text-[20px] text-[16px] font-[700]">
          HEALTH & WELLNESS COACH SCOPE OF PRACTICE
        </h1>
        <p className="lg:text-[20px] text-[16px] lg:leading-[34px] leading-[28px] tracking-[0.1px]">
          Dr. Puryear adheres to the NBHWC Code of Ethics and does NOT provide
          medical advice during his Health & Wellness Consultation Services. The
          NBHWC Code of Ethics is designed to provide appropriate guidelines,
          accountability, and enforceable standards of conduct for all NBHWC
          Credential- holders. Dr. Puryear practices within the NBHWC Health and
          Wellness Coach Scope of Practice and Competencies and pledges
          accountability to the NBHWC Code of Ethics. For more information on
          the NBHCW Code of Ethics visit their website
          https://nbhwc.org/code-of-ethics
        </p>

      </div>
    ),
  };

  return (
    <div className="max-w-[1204px] w-full mx-auto font-proximaNova xl:pt-[95px] lg:pt-[99.16px] md:pt-[56px] pt-[33px] xl:pb-[135px] lg:pb-[103px] md:pb-[98px] pb-[111px]">
      <PrivacyAndTerms title={data.title} article={data.article} />
    </div>
  );
}

export default Page;
