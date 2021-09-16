import React from "react";

export const Media: React.FC = () => {
  return (
    <div className="media-background">
      <img src="{imageAbout}" alt="" />
      <div className="circle">
        <div className="circle-border">
          <h3>about</h3>
          <h2 style={{ color: "#00bfa6" }}>
            Building a better future together
          </h2>
          <div className="block"></div>
          <p>
            For more than 50 years we’ve been pioneers, using science and
            different perspectives to make the environment safer and healthier
            for us all.
          </p>
        </div>
      </div>
    </div>
  );
};
