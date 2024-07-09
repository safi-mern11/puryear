import { getStoryblokApi } from "@storyblok/react";

// export async function fetchData() {
//   let sbParams = { version: "published", starts_with: "self-care-blog", };
//   const client = getStoryblokApi();
//   const data = await client?.get(`cdn/stories`, sbParams, { cache: "no-store" })
//   return data;

// }
// export async function fetchVideos() {
//   let sbParams = { version: "published", starts_with: "mindful-meditation-moments", };
//   const client = getStoryblokApi();
//   const data = await client?.get(`cdn/stories`, sbParams, { cache: "no-store" })
//   return data;

// }
export  const getCategoryColor = (category) => {
    switch (category) {
      case "FINANCIAL":
        return "bg-[#3EBBCA] border-[#0793A4] border-[1.3px] max-w-[146px]";
      case "SOCIAL":
        return "bg-[#BE457B] border-[#901049] border-[1.3px] max-w-[116px]";
      case "INTELLECTUAL":
        return "bg-[#DE5B4F] border-[#9B2317] border-[1.3px] max-w-[183px]";
      case "PHYSICAL":
        return "bg-[#2F86FF] border-[#166DE7] border-[1.3px] max-w-[146px]";
      default:
        return "bg-[#DE5B4F] border-[#0793A4] border-[1.3px] max-w-[146px]";
    }
  };
  export  const getBlogCardImage = (category) => {
    switch (category) {
      case "FINANCIAL":
        return "/blogs/financial.png";
      case "SOCIAL":
        return "/blogs/social.png";
      case "INTELLECTUAL":
        return "/blogs/intellectual.png";
      case "PHYSICAL":
        return "/blogs/physical.png";
    }
  };