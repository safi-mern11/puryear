import PrivacyAndTerms from '@/app/components/common/PrivacyAndTerms';
import React from 'react'

const Page = () => {
  const data = {
    title: "Website and Mobile App Disclaimer",
    article: (
      <div className=" font-proximaNova ">

        <p className="">
          The information, including but not limited to, text, graphics, images,
          and other material contained on this website or mobile devices are for
          informational purposes only. No material on this site is intended to
          be a substitute for professional medical advice, diagnosis, or
          treatment and does not establish any kind of physician-patient or
          coach-client relationship by your use of this website. A coach-client
          relationship with you is only formed after we have expressly entered
          into a written agreement with you that you have signed including our
          fee structure and other terms to represent you in a specific matter. A
          physician patient relationship will never be established under any
          agreement of any kind. Always seek the advice of your physician or
          other qualified health care provider with any questions you may have
          regarding a medical condition or treatment and before undertaking a
          new health care regimen, and never disregard professional medical
          advice or delay in seeking it because of something you have read on
          this website. Under no circumstance shall we have any liability to you
          for any loss or damage of any kind incurred because of the use of the
          site or our mobile application or reliance on any information provided
          on the site and our mobile application. Your use of the site and our
          mobile application and your reliance on any information on the site
          and our mobile application is solely at your own risk. Last updated:
          June 1, 2024
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

export default Page