"use client"
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../common/Button';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function StayMindful() {
  const [loading, setLoading] = useState(false);
  const radioRefs = {
    speakingEngagements: useRef(null),
    mediaEngagements: useRef(null),
    advertising: useRef(null),
    bulkBookPurchases: useRef(null),
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      reason: "",
      message: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u, 'Invalid email address').required('Email is required'),
      phone: Yup.number(),
      reason: Yup.string().required('Reason is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const res = await axios.post("https://backend.leadconnectorhq.com/hooks/3mv66Scju4B1b5492Tr9/webhook-trigger/e2c075ea-30db-4eca-bf54-6eb5d98bfb37", values);
        if (res.status === 200) {
          console.log(res, "data");
          toast.success("Message sent successfully!");
          Object.values(radioRefs).forEach(ref => ref.current.checked = false);
          resetForm();
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error)
      }
    }
  });
  return (
    <div className="pb-[37px] md:pb-[116px] lg:pb-[85px] xl:pb-[197px]">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div className="mt-[43px] xl:mt-[203px] bg-[url('/stay-mindful-section/background-image.png')] bg-cover bg-center relative font-proximaNova min-h-[689px] md:min-h-[790px] xl:min-h-[1474px] lg:min-h-[1050px] h-full md:pb-[41px] lg:pb-[81px] pb-[36px] xl:pb-[114px]">
        <h1 className="max-w-[290px] lg:max-w-[463px] md:max-w-[464px] md:text-[40px] lg:text-[40px] lg:leading-[34px] w-full mx-auto font-[400] text-[25px] leading-[21px] md:leading-[48px] pt-[26px] md:pt-[60px] lg:pt-[80px] xl:pt-[113px] text-[#fff]">
          Stay mindful & <span className="font-[700]">connected</span>
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="max-w-[304px] md:max-w-[332px] xl:max-w-[620px] lg:max-w-[463px] items-center xl:items-start w-full flex flex-col justify-center mx-auto gap-[10px]">
            <div className="w-full flex flex-col items-center xl:items-start justify-center xl:gap-[20px] lg:gap-[14px] md:gap-[10px] gap-[6px] mt-[10px] text-[#FFF]">
              <div className="w-full lg:max-w-[442px] xl:max-w-[620px] flex flex-col items-center xl:items-start md:flex-row gap-[14px] text-[#FFF]">
                <div className="md:max-w-[214px] xl:max-w-[300px] w-full max-w-[282px]">
                  <p className="text-[#fff] text-[12.8px] leading-[25px] lg:text-[16px] font-[400] lg:leading-[32px]">
                    First name*
                  </p>
                  <input
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onFocus={formik.handleBlur}
                    value={formik.values.firstName}
                    className="bg-opacity-10 w-full bg-[#FFFFFF] border-[0.75px] border-solid focus:border-white py-1 lg:py-2 xl:py-[17px] rounded-[5.36px] lg:rounded-[10px] p-[17px] outline-none border-transparent focus:ring-0"
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-red-500">{formik.errors.firstName}</div>
                  ) : null}
                </div>
                <div className="md:max-w-[214px] xl:max-w-[300px] w-full max-w-[282px]">
                  <p className="text-[#fff] text-[12.8px] leading-[25px] lg:text-[16px] font-[400] lg:leading-[32px]">
                    Last name*
                  </p>
                  <input
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onFocus={formik.handleBlur}
                    value={formik.values.lastName}
                    className="bg-opacity-10 w-full bg-[#FFFFFF] border-[0.75px] border-solid focus:border-white py-1 lg:py-2 xl:py-[17px] rounded-[5.36px] lg:rounded-[10px] p-[17px] outline-none border-transparent focus:ring-0"
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-red-500">{formik.errors.lastName}</div>
                  ) : null}
                </div>
              </div>
              <div className="w-full flex items-center xl:items-start justify-center lg:max-w-[442px] xl:max-w-[620px] md:max-w-[348px] max-w-[282px]">
                <div className="lg:max-w-[442px] xl:max-w-[620px] w-full">
                  <p className="text-[#fff] text-[16px] font-[400] leading-[32px]">
                    Email*
                  </p>
                  <input
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    onFocus={formik.handleBlur}
                    value={formik.values.email}
                    className="bg-opacity-10 lg:max-w-[442px] xl:max-w-[620px] w-full bg-[#FFFFFF] border-[0.75px] border-solid focus:border-white py-1 lg:py-2 xl:py-[17px] rounded-[5.36px] lg:rounded-[10px] p-[17px] outline-none border-transparent focus:ring-0"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500">{formik.errors.email}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex justify-center lg:max-w-[442px] xl:max-w-[620px] md:max-w-[348px] w-full max-w-[282px]">
                <div className="max-w-[620px] w-full">
                  <p className="text-[#fff] text-[16px] font-[400] leading-[32px]">
                    Phone number (optional)
                  </p>
                  <input
                    name="phone"
                    type="number"
                    onChange={formik.handleChange}
                    onFocus={formik.handleBlur}
                    value={formik.values.phone}
                    className="bg-opacity-10 max-w-[620px] w-full bg-[#FFFFFF] border-[0.75px] border-solid focus:border-white py-1 lg:py-2 xl:py-[17px] rounded-[5.36px] lg:rounded-[10px] p-[17px] outline-none border-transparent focus:ring-0"
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-red-500">{formik.errors.phone}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="max-w-[304px] md:max-w-[332px] xl:max-w-[620px] lg:max-w-[463px] w-full flex flex-col justify-center">
              <legend className="text-[#fff] text-[16px] font-[400] leading-[32px] ml-[10px] md:ml-0">
                Reason for contact*
              </legend>
              <div className="md:max-w-[246px] w-full grid md:grid-cols-1 grid-cols-2 justify-center gap-[15px] ml-[10px] md:ml-0">
                <label className="text-[#fff] text-[11.6px] leading-[18px] whitespace-nowrap xl:text-[20px] font-[400] xl:leading-[32px] tracking-[0.1px] flex w-full xl:gap-[12px] gap-[6px] items-center">
                  <input
                    ref={radioRefs.speakingEngagements}
                    type="radio"
                    name="reason"
                    value="speaking-engagements"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="custom-radio xl:w-5 xl:h-5 w-4 h-4"
                  />
                  Speaking Engagements
                </label>
                <label className="text-[#fff] text-[11.6px] leading-[18px] whitespace-nowrap xl:text-[20px] font-[400] xl:leading-[32px] tracking-[0.1px] flex w-full xl:gap-[12px] gap-[6px] items-center">
                  <input
                    ref={radioRefs.mediaEngagements}
                    type="radio"
                    name="reason"
                    value="media-engagements"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="custom-radio xl:w-5 xl:h-5 w-4 h-4"
                  />
                  Media Engagements
                </label>
                <label className="text-[#fff] text-[11.6px] leading-[18px] whitespace-nowrap xl:text-[20px] font-[400] xl:leading-[32px] tracking-[0.1px] flex w-full xl:gap-[12px] gap-[6px] items-center">
                  <input
                    ref={radioRefs.advertising}
                    type="radio"
                    name="reason"
                    value="advertising"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="custom-radio xl:w-5 xl:h-5 w-4 h-4"
                  />
                  Advertising
                </label>
                <label className="text-[#fff] text-[11.6px] leading-[18px] whitespace-nowrap xl:text-[20px] font-[400] xl:leading-[32px] tracking-[0.1px] flex w-full xl:gap-[12px] gap-[6px] items-center">
                  <input
                    ref={radioRefs.bulkBookPurchases}
                    type="radio"
                    name="reason"
                    value="bulk-book-purchases"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="custom-radio xl:w-5 xl:h-5 w-4 h-4"
                  />
                  Bulk Book Purchases
                </label>
                {formik.touched.reason && formik.errors.reason ? (
                  <div className="text-red-500">{formik.errors.reason}</div>
                ) : null}
              </div>
            </div>
            <div className="w-full xl:max-w-[620px] lg:max-w-[463px] md:max-w-[348px] max-w-[282px]">
              <legend className="text-[#fff] text-[16px] font-[400] leading-[32px]">
                Message*
              </legend>
              <textarea
                name="message"
                onChange={formik.handleChange}
                onFocus={formik.handleBlur}
                value={formik.values.message}
                className="bg-opacity-10 max-w-[620px] text-[#fff] text-[16px] font-[600] leading-[32px] w-full min-h-[115px] max-h-[115px] h-full bg-[#FFFFFF] border-[0.75px] border-solid focus:border-white py-1 lg:py-2 xl:py-[17px] rounded-[5.36px] lg:rounded-[10px] p-[17px] outline-none border-transparent focus:ring-0 resize-none"
                cols="30"
                rows="10"
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500">{formik.errors.message}</div>
              ) : null}
            </div>
            <div className="w-full flex justify-center xl:justify-start mt-[20px]">
              <button type="submit" disabled={loading} className="hover:scale-105 relative xl:min-h-[60px] lg:min-h-[42px] md:min-h-[36px] min-h-[27px] font-proximaNova hover:opacity-90 transition-all duration-100 ease-linear bg-[#C8B377]  max-w-[282px] md:max-w-[332px] lg:max-w-[442px] xl:max-w-[620px] lg:text-[17.8px] lg:leading-[17px] text-[black] xl:text-[25px] text-[11.37px] leading-[11.37px] xl:leading-[25px] md:text-[13.41px] md:leading-[13.41px] font-[700]    w-full rounded-[30px]">
                {!loading ? "Send message" : <div class="loader lg:!w-[35px] md:!w-[28px] !w-[20px]"></div>}
              </button>
            </div>
          </div>
        </form>
        <div className="mx-auto w-full flex items-center xl:max-w-[421px] lg:max-w-[300px] max-w-[225px] justify-between lg:mt-[60px] mt-[16px] font-proximaNova ">
          <div className="xl:max-w-[148px] lg:max-w-[105px] max-w-[79px] w-full border-t-[3px] lg:border-t-[5px] h-0  opacity-[19%]"></div>
          <p className="xl:max-w-[77px] lg:max-w-[55px] max-w-[42px]  w-full font-[400] text-[30px] leading-[25px] lg:text-[39.9px] lg:leading-[34px] xl:leading-[48px] xl:text-[56px] text-[#FFFFFF] opacity-[27%]">
            OR
          </p>
          <div className="xl:max-w-[148px] lg:max-w-[105px] max-w-[79px] w-full border-t-[3px] lg:border-t-[5px] h-0 opacity-[19%]"></div>
        </div>

        <p className="xl:max-w-[649px] lg:max-w-[463px] max-w-[348px] w-full text-center mx-auto font-[400] xl:text-[50px] xl:leading-[48px] text-[25px] leading-[25px] lg:text-[35.6px] lg:leading-[34px] text-[#FFFFFF] xl:mt-[41px] lg:mt-[28px] md:mt-[21px] mt-[7px]">
          For General <span className="font-[700]">Inquiries</span>
        </p>
        <div className="xl:max-w-[573px] lg:max-w-[409px] md:max-w-[307px] max-w-[234px] w-full flex justify-between mx-auto  mt-[15px] lg:mt-[28px] xl:mt-[41px]">
          <Button
            href={"/faq"}
            extraClasses={
              "xl:max-w-[275px] lg:max-w-[196px] md:max-w-[147px]  py-[3px] max-w-[112px] xl:text-[27px] xl:leading-[55px] lg:text-[19.8px] lg:leading-[39.6px] md:text-[14.9px] md:leading-[29.8px] text-[11.3px] leading-[22.7px]  text-[#fff] bg-[#C8B37729] border-[#C8B37733] border-[1.68px] md:border-[2.21px] lg:border-[2.94px] xl:border-[4px] rounded-[55.6px] opacity-[88%] "
            }
            text={"See our FAQs"}
            lg
          />
          <Button
            href={""}
            extraClasses={
              "xl:max-w-[275px] lg:max-w-[196px] md:max-w-[147px] py-[3px] max-w-[112px] xl:text-[27px] xl:leading-[55px] lg:text-[19.8px] lg:leading-[39.6px] md:text-[14.9px] md:leading-[29.8px] text-[11.3px] leading-[22.7px] text-[#fff] bg-[#C8B37729] border-[#C8B37733] border-[1.68px] md:border-[2.21px] lg:border-[2.94px] xl:border-[4px] rounded-[55.6px] opacity-[88%]"
            }
            text={"Talk to AI Agent"}
            lg
          />
        </div>
      </div>
    </div>
  );
}

export default StayMindful;
