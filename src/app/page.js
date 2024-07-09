import About from "./components/landingPage/About";
import Hero from "./components/landingPage/Hero";
import MoreFeatures from "./components/landingPage/MoreFeatures";
import NewEbook from "./components/landingPage/NewEbook";
import SapienId from "./components/landingPage/SapienId";
import StayMindful from "./components/landingPage/StayMindful";
import DoAny from "./components/common/DoAny";
import LetGetUnstuck from "./components/landingPage/LetGetUnstuck";
import ItsAboutGiving from "./components/common/ItsAboutGiving";
import DifferentAboutMe from "./components/common/DifferentAboutMe";
import Marque from "./components/landingPage/Marquee";
import WhatOtherHave from "./components/common/WhatOtherHave";

export const fetchCache = 'force-no-store';
export default async function Home() {

  return (
    <div className=" w-full mx-auto ">
      <Hero />
      <DoAny landing />
      <LetGetUnstuck />
      <ItsAboutGiving />
      <DifferentAboutMe landing />
      <About />
      <NewEbook />
      <Marque />
      <WhatOtherHave bg />
      <MoreFeatures />
      <SapienId />
      <StayMindful />
      {/* <StoryblokStory story={data?.story} /> */}
    </div>
  );
}
