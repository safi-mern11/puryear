"use client";
import SubscribeSvg from "@/assets/icons/SubscribeSvg";
import InputFieldWithButton from "./InputFieldWithButton";
import Button from "./Button";
import * as Yup from 'yup';
import { usePathname } from "next/navigation";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

function SubscribeSection() {
  const path = usePathname();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object(
      {
        email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u, 'Invalid email address').required('Email is required'),
      }
    ),
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const res = await axios.post("https://backend.leadconnectorhq.com/hooks/3mv66Scju4B1b5492Tr9/webhook-trigger/c8901511-1f33-4958-b436-885101b1c5bc", values);
        if (res.status === 200) {
          console.log(res, "data");
          toast.success("Subscribed successfully!")
          resetForm();
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error)
      }
    }
  });
  if (
    path == "/explore-health" ||
    path == "/work-with-me" ||
    path == "/privacy-policy" ||
    path == "/app-disclaimer" ||
    path == "/medical-disclaimer"
  ) {
    return;
  };

  return (
    <div className="bg-[#E7E4DC] pb-[54px] md:pb-[80px] max-w-[375px] md:max-w-[768px] lg:max-w-[894px]  w-full xl:max-w-[1440px] mx-auto">
      <div className=" max-w-[343px] md:max-w-[700px] lg:max-w-[894px] xl:max-w-[1136px] w-full md:flex mx-auto   rounded-[15px] md:rounded-[30px] lg:rounded-[50px] bg-[#294431] pt-[39px] pb-[54px] lg:pl-[39px] lg:pr-[43px] lg:py-[61px] md:py-[45px] items-center justify-between px-[30px] xl:pl-[79px] xl:pr-[68px]">
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        {/* left-div-content */}
        <div className="max-w-[283px] lg:max-w-[449px] md:max-w-[366px]  xl:max-w-[566px] w-full font-proximaNova flex flex-col justify-between items-center md:items-start ">
          <div className=" max-w-[283px] lg:max-w-[449px] md:max-w-[366px] xl:max-w-[532px]  w-full">
            <h1 className="md:max-w-[366px]  lg:max-w-[449px] xl:max-w-[496px]  w-full text-[30px] md:text-[31px] text-center md:text-start lg:text-[38px]  xl:text-[42px] leading-[30px] md:leading-[41px]  lg:leading-[48px] text-[#fff] font-[700]">
              Subscribe & stay updated.
            </h1>
            <p className="md:text-[12px] lg:max-w-[423px] xl:max-w-[532px] lg:mt-[10px]  md:leading-[20px]  max-w-[532px] w-full mt-[10px] md:mt-[2px] text-[#FFFFFFBF] text-[12px] lg:text-[14px] xl:text-[18px] lg:leading-[20px] font-[400] leading-[20px] text-center md:text-start xl:leading-[30px]  ">
              Don't miss out on the latest in health and wellness! Subscribe to
              our newsletter for exclusive content from our health experts.
            </p>
          </div>
          {/* right-div-image */}
          <div className="max-w-[220px] mx-auto mt-[20px]  w-full md:hidden">
            <SubscribeSvg />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <InputFieldWithButton
              loading={loading}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              mainStyle={
                "md:max-w-[351px] lg:max-w-[449px] xl:max-w-[566px] max-w-[277px] rounded-[3px] md:rounded-[30px] border-none md:border w-full   "
              }
              inputtype={"text"}
              placeholder={"Enter your email"}
              inputStyle={
                "max-w-[277px] lg:max-w-[264px] xl:max-w-[381px]  md:px-[20px] pl-[15px] outline-none md:py-[9px] md:pl-[20px] lg:pl-[43px] md:max-w-[207px] lg:max-w-[381px]  rounded-[3px] md:rounded-tl-[30px] md:rounded-bl-[30px] border-none md:border "
              }
              btnText={"Subscribe"}
              btnDivStyle={
                "xl:max-w-[185px] md:max-w-[144px] lg:max-w-[185px] hidden md:block "
              }
              btnStyle={
                "max-w-[185px] min-w-[185px] w-full rounded-e-[30px] rounded-s-none bg-[#C8B377] text-[#042200] min-h-[54px] max-h-[54px] lg:px-[52px] font-[700] md:text-[16px] lg:font-[600] lg:leading-[18px] lg:text-[18px]  "
              }
              subBtn
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="pl-[5px] text-red-500">{formik.errors.email}</div>
            ) : null}
          </form>
        </div>
        {/* right-div-image */}
        <div className=" md:max-w-[220px] xl:max-w-[315px] w-full hidden md:block">
          <SubscribeSvg />
        </div>
        <div className="max-w-[266px]   w-full mx-auto pt-[16px]  md:hidden">
          {/* Send-Button */}

          <button onClick={formik.handleSubmit} className="bg-[#C8B377] relative min-h-[50px] max-w-[520px] text-[#042200]  text-[18px] leading-[18px] font-[700]  pt-[16px] pb-[16px] w-full rounded-[30px]">
            {loading ? <div class="loader"></div> : "Subscribe"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeSection;
