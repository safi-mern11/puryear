import NotASuperHuman from "../workWithMePage/NotASuperHuman";
import StartLivingBestLife from "../workWithMePage/StartLivingBestLife";
import DifferentAboutMe from "./DifferentAboutMe";
import DoAny from "./DoAny";
import ItsAboutGiving from "./ItsAboutGiving";
import WhatOtherHave from "./WhatOtherHave";

function WorkWithMe() {
  return (
    <>
      <StartLivingBestLife />
      <DoAny workWithMe />
      <NotASuperHuman />
      <ItsAboutGiving />
      <DifferentAboutMe />
      <WhatOtherHave />
    </>
  );
}

export default WorkWithMe;
