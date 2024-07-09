import React from "react";
import SubpagesTitleAndPara from "@/app/components/common/SubpagesTitleAndPara";
import AllBlogs from "@/app/components/subPage4/AllBlogs";
import { draftMode } from "next/headers";
import { getStoryblokApi } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";
import FeaturedBlog from "@/app/components/subPage4/FeaturedBlog";
export const metadata = {
  title: "Self Care Blog",
};

const SelfCareBlog = async () => {
  const info = {
    title: "Self Care Blog",
    paragraph: "Check out our blog for interesting health stories",
  };

  const fetchFeaturedBlog = async () => {
    const { isEnabled } = draftMode();
    const client = getStoryblokApi();
    const response = await client?.getStory(`featured-blog`, {
      version:
        process.env.NODE_ENV === "development" || isEnabled
          ? "draft"
          : "published",
      resolve_relations: "featured_blog.blogs",
    });
    return response?.data?.story;
  };

  const fetchAllBlogs = async () => {
    const { isEnabled } = draftMode();
    const client = getStoryblokApi();
    const response = await client?.getStories({
      content_type: "blog",
      version:
        process.env.NODE_ENV === "development" || isEnabled
          ? "draft"
          : "published",
    });
    return response?.data?.stories;
  };
  const featuredBlog = await fetchFeaturedBlog();
  const blogs = await fetchAllBlogs();
  return (
    <div>
      <SubpagesTitleAndPara
        subpage2
        subpage_paragraph={info.paragraph}
        subpage_title={info.title}
        paraStyle={
          "mx-auto  max-w-[272px] w-full md:max-w-[941px] text-center font-[500] text-[16px] leading-[26px] mt-0  md:text-[20px] md:leading-[36px] lg:text-[32px] lg:leading-[39px] "
        }
        extraMainStyle={
          "max-w-[941px] py-[60px] md:py-[77px] lg:pt-[99px] lg:pb-[88px] xl:pt-[81px] xl:pb-[121px] "
        }
        extraTitleStyle={
          "max-w-[628px] text-[30px] leading-[34px] md:text-[44px] md:leading-[52px]  lg:text-[56px] lg:leading-[62px] xl:text-[70px] w-full font-[700] xl:leading-[70px] leading-[34px] text-center mx-auto"
        }
      />
      {/* <StoryblokStory
        bridgeOptions={{ resolveRelations: ["featured_blog.blogs"] }}
        story={featuredBlog}
      /> */}
      <FeaturedBlog featured={featuredBlog?.content?.body[0]?.blogs?.content} slug={featuredBlog?.content?.body[0]?.blogs?.full_slug} />
      <AllBlogs data={blogs} />
    </div>
  );
};

export default SelfCareBlog;
