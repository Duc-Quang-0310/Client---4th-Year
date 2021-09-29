import React from "react";
import { Link } from "react-router-dom";
import { route } from "../../../common/config/routes/routesName";

export const Actions: React.FunctionComponent = () => {
  return (
    <div className="content-wrapper">
      <h2 className="content-title">Take action</h2>
      <p style={{ width: "100%" }} className="content-paragraph">
        Use your voice where it counts. Here’s how to speak up for the health
        and safety of the environment and people everywhere.
      </p>
      <div
        style={{
          justifyContent: "space-between",
          marginBlockStart: "1rem",
          marginBlockEnd: "2rem",
        }}
        className="img-container"
      >
        <Link
          style={{
            width: "49%",
          }}
          className="img-wrapper"
          to={route.INVOLVED}
        >
          <img
            className="img-mainImg"
            src="https://res.cloudinary.com/dsykf3mo9/image/upload/v1632899672/4th-Years/861a1cee-a1f7-11eb-9298-a0369f10330e_kwn430.webp"
            alt=""
          />
          <p>It’s Time To Go Bold</p>
        </Link>
        <Link
          style={{ width: "49%" }}
          className="img-wrapper"
          to={route.INVOLVED}
        >
          <img
            className="img-mainImg"
            src="https://res.cloudinary.com/dsykf3mo9/image/upload/v1632899696/4th-Years/iF4PcCWLeAWgab3ue9zp0IoA8W4698jpg_msc2vq.jpg"
            alt=""
          />
          <p>Restoring U.S. climate leadership on the world stage!</p>
        </Link>
      </div>
    </div>
  );
};
