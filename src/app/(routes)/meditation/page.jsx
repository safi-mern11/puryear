import GuidedMeditation from "@/app/components/subPage3/GuidedMeditation";
import MeditationVideos from "@/app/components/subPage3/MeditationVideos";
import MindfulMeditationMoments from "@/app/components/subPage3/MindfulMeditationMoments";
import { getStoryblokApi } from "@storyblok/react";
import { draftMode } from "next/headers";

const fetchAllVideos = async () => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client?.getStories({
    content_type: "video_blog",
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
  });
  return response?.data?.stories;
};
 
async function Page() {
  const videos =await fetchAllVideos();
  return (
    <>
      <MindfulMeditationMoments />
      <GuidedMeditation />
      <MeditationVideos videos={videos}  />
    </>
  );
}

export default Page;