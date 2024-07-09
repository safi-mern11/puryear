import Recommended from "@/app/components/common/Recommended";
import BlogUser from "@/assets/icons/BlogUser";
import EmaiFacebookSvg from "@/assets/icons/EmaiFacebookSvg";
import InstaEmailSvg from "@/assets/icons/InstaEmailSvg";
import ThreadEmailSvg from "@/assets/icons/ThreadEmailSvg";
import TwitterEmailSvg from "@/assets/icons/TwitterEmailSvg";
import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";
import { draftMode } from "next/headers";
import Link from "next/link";

const fetchBlogPage = async (slug) => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client?.getStory(`blogs/${slug}`, {
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response?.data?.story;
};

const fetchRecommendedBlogs = async () => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client?.getStory(`recommended-blogs`, {
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
    resolve_relations: "recommended_blogs.blogs",
  });
  return response?.data?.story;
};

const Page = async ({ params }) => {
  const story = await fetchBlogPage(params.slug);
  const recommendedBlogs = await fetchRecommendedBlogs();
  return (
    <section className="xl:pb-[163px] lg:pb-[94px] md:pb-[76px] pb-[87px]">
      <StoryblokStory story={story} />
      <div className="max-w-[342px] md:max-w-[672px] lg:hidden w-full mx-auto pt-[14px] pb-[18px] border-y-[#0000004D] border-y mt-[56px] ">
        <p className="text-[14px] leading-[26px] font-proximaNova text-[#000000BF]">
          Share article:
        </p>
        {/* social */}
        <div className="w-full flex gap-[23px] mt-[3px] items-center">
          <Link href={"/"}>
            <InstaEmailSvg />
          </Link>

          <Link href={"/"}>
            <EmaiFacebookSvg />
          </Link>
          <Link href={"/"}>
            <TwitterEmailSvg />
          </Link>
        </div>
      </div>
      <div className=" max-w-[1345px] w-full mx-auto xl:mt-[127px] lg:mt-[59px] md:mt-[63px] mt-[42px]">
        <StoryblokStory
          bridgeOptions={{ resolveRelations: ["recommended_blogs.blogs"] }}
          story={recommendedBlogs}
        />
      </div>
    </section>
  );
};

export default Page;
