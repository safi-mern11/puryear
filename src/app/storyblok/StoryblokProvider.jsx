"use client";
import { storyblokInit } from "@storyblok/react/rsc";
import { Blog } from "./Blog";
import { RecommendedBlogs } from "./RecommendedBlogs";
import { apiPlugin } from "@storyblok/react";
import Page from "./Page";
import FeaturedBlog from "./FeaturedBlog";
import Video from "./Video";
import RecommendedVideos from "./RecommendedVideos";

const components = {
  blog: Blog,
  video_blog: Video,
  recommended_blogs: RecommendedBlogs,
  recommended_videos: RecommendedVideos,
  page: Page,
  featured_blog: FeaturedBlog,
};
storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
});

export const StoryblokProvider = ({ children }) => {
  return <>{children}</>;
};
