import React from "react";

interface iMediaProps {
  title: string;
  image: string;
  subTitle: string;
  content: string;
}

export const MediaBG: React.FunctionComponent<iMediaProps> = ({
  title,
  image,
  subTitle,
  content,
}) => {
  return (
    <div className="media-background">
      <img style={{ marginBlockStart: "1rem" }} src={image} alt="" />
      <div className="circle">
        <div className="circle-border">
          <h3>{title}</h3>
          <h2 style={{ color: "#00bfa6" }}>{subTitle}</h2>
          <div className="block"></div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
