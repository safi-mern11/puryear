import Recommended from "@/app/components/common/Recommended";
import BackBtn from "@/assets/icons/BackBtn";
import { getStoryblokApi } from "@storyblok/react";
import { draftMode } from "next/headers";
import StoryblokStory from "@storyblok/react/story";

const fetchVideoPage = async (slug) => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client?.getStory(`meditation/${slug}`, {
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response.data.story;
};

const fetchRecommendedVideos = async () => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client?.getStory(`recommended-videos`, {
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
    resolve_relations: "recommended_videos.videos",
  });
  return response.data.story;
};

async function page({ params }) {
  const video = await fetchVideoPage(params.slug);
  const recommendedVideos = await fetchRecommendedVideos();
  // console.log(video ,"video")
  return (
    <div>
      <StoryblokStory story={video} />
      <div className=" pb-[65px] xl:pt-[67px]  lg:pt-[70px] md:pt-[43px] pt-[44px]   max-w-[1278px] xl:max-w-[1345px] xl:pb-[105px] lg:pb-[88px] md:pb-[67px] w-full md:mx-auto overflow-hidden ">
        <StoryblokStory
          bridgeOptions={{ resolveRelations: ["recommended_videos.videos"] }}
          story={recommendedVideos}
        />
      </div>
    </div>
  );
}

export default page;
