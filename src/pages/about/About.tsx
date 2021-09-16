import React from "react";
import { about } from "../../common/constants/media";
import { MediaBG } from "../../components/MediaBackground/MediaBG";
import { Navbar } from "../../components/Navbar/Navbar";
import "./About.scss";
import { People } from "./people/People";

export const About: React.FC = () => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <MediaBG
        image={about.image}
        title={about.title}
        subTitle={about.subTitle}
        content={about.content}
      />
      <div className="content-wrapper">
        <h2 className="content-title">Who we are</h2>
        <p className="content-paragraph">
          We began in 1967, as a scrappy group of scientists and a lawyer on
          Long Island, New York, fighting to save osprey from the toxic
          pesticide DDT. Using scientific evidence, our founders got DDT banned
          nationwide
        </p>
        <p className="content-paragraph">
          Today, we’re one of the world's leading environmental organizations.
          In the U.S., <i>Fortune</i> magazine called our board one of the
          country's most influential nonprofit boards
        </p>
        <p className="content-paragraph">
          And science still guides everything we do.
        </p>
      </div>
      <People />
    </div>
  );
};
