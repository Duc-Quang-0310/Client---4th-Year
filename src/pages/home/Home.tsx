import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import {
  ChevronLeftRounded,
  ChevronRightRounded,
  ArrowForwardRounded,
} from "@material-ui/icons";
import "./Home.scss";
import {
  authButtonStyle,
  ButtonForm,
} from "../../components/ButtonForm/ButtonForm";
import { useState } from "react";
import { imgLink, title } from "../../common/constants/home";
import { Issue } from "./issue/Issue";
import { Priority } from "./priority/Priority";
import { Result } from "./result/Result";
import { Product } from "./Product/Product";

export const Home: React.FunctionComponent = () => {
  const [index, setIndex] = useState(0);
  const hero = {
    imgLink: imgLink[index],
    title: title[index],
  };

  const hanldeRightArrow = () => {
    index === 2 ? setIndex(0) : setIndex(index + 1);
  };

  const hanldeLeftArrow = () => {
    index === 0 ? setIndex(2) : setIndex(index - 1);
  };

  return (
    <div className="homepage-container">
      <Navbar />
      <div className="slideshow-wrapper">
        <div className="slideshow-btn slideshow-left" onClick={hanldeLeftArrow}>
          <ChevronLeftRounded className="slideshow-icon" fontSize="large" />
        </div>
        <div className="slideshow-hero">
          <img src={hero.imgLink} alt="" />
          <div className="slideshow-content">
            <h2>{hero.title}</h2>
            <ButtonForm
              styling={authButtonStyle}
              buttonName="Learn more"
              endIcon={<ArrowForwardRounded />}
            />
          </div>
        </div>
        <div
          className="slideshow-btn slideshow-right"
          onClick={hanldeRightArrow}
        >
          <ChevronRightRounded className="slideshow-icon" fontSize="large" />
        </div>
      </div>
      <div className="slogan-container">
        <h2>
          EDF is one of the world’s leading environmental organizations. We’ve
          been driving results for more than 50 years
        </h2>
      </div>
      <Priority />
      <Result />
      <Issue />
      <Product />
    </div>
  );
};
