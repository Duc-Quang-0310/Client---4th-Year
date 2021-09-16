import React from "react";
import { route } from "../../../common/config/routes/routesName";
import { imgContent } from "../../../common/constants/home";
import { Link } from "react-router-dom";
export const Priority: React.FunctionComponent = React.memo(() => {
  return (
    <div className="slogan-container">
      <h2>Our key priorities</h2>
      <p className="sub-slogan">
        We take on climate change and other grave threats by identifying what’s
        most urgent and where we can make the most difference.
      </p>
      <div className="img-container">
        {imgContent.map((img, index) => {
          return (
            <Link className="img-wrapper" key={index} to={route.HOME}>
              <img className="img-mainImg" src={img.imgLink} alt="" />
              <p>{img.content}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
});
