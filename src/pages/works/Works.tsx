import React from "react";
import "./Works.scss";
import { work } from "../../common/constants/media";
import { Navbar } from "../../components/Navbar/Navbar";
import { MediaBG } from "../../components/MediaBackground/MediaBG";
import { Impact } from "./impact/Impact";
import { WhatWeDo } from "./whatWeDo/WhatWeDo";
import { HowWeDo } from "./howWeDo/HowWeDo";

export const Works: React.FC = () => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <MediaBG
        image={work.image}
        title={work.title}
        subTitle={work.subTitle}
        content={work.content}
      />
      <Impact />
      <WhatWeDo />
      <HowWeDo />
    </div>
  );
};
