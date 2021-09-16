import React from "react";
import { issues } from "../../../common/constants/home";
import { Link } from "react-router-dom";

export const Issue: React.FunctionComponent = React.memo(() => {
  return (
    <div className="slogan-container">
      <h2>Issues we address</h2>
      <p className="sub-slogan">
        Explore the full range of our work around the world.
      </p>
      <div className="issue-container">
        {issues.map((issue, index) => {
          return (
            <Link className="issue-wrapper" to={issue.link} key={index}>
              <img src={issue.img} alt="" className="issue-img" />
              <div className="issue-content">
                <h3>{issue.content}</h3>
                <p className="issue-plaintext">{issue.text}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
});
