import React from "react";
import { experts } from "../../../common/constants/about";
import { Card } from "../../../components/CardForm/Card";

export const People: React.FC = () => {
  const perspective = "PARTNER PERSPECTIVE";
  const speech =
    " EDF does constructive, thoughtful, hard work, and that gains respect — and results. ";
  const name = "George P. Shultz";
  const job = "Former U.S. Secretary of State";

  return (
    <div className="content-wrapper">
      <h2 className="content-title">Our people</h2>
      <div className="content-main">
        <div className="left-main">
          <p style={{ width: "100%" }} className="content-paragraph">
            We bring the right people together to solve environmental challenges
            from many different angles. Meet some of the experts who represent
            key parts of our work.
          </p>

          {experts.map((expert, index) => {
            return (
              <div
                style={{ marginLeft: "15px" }}
                className="expert-wrapper"
                key={index}
              >
                <img src={expert.imageLink} alt="" />
                <p style={{ textTransform: "uppercase", marginBlock: "1em" }}>
                  {expert.subject}
                </p>
                <p style={{ paddingInline: "5px" }}>{expert.expert}</p>
              </div>
            );
          })}
        </div>
        <div className="right-main">
          <Card
            perspective={perspective}
            speech={speech}
            job={job}
            name={name}
          />
        </div>
      </div>
    </div>
  );
};
