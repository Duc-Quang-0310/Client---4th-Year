import React from "react";
import { ButtonForm } from "../../../components/ButtonForm/ButtonForm";
import { Card } from "../../../components/CardForm/Card";
import { InputForm } from "../../../components/InputForm/InputForm";
import { styled, inputStyled } from "../../about/act/Act";

export const Alert: React.FC = () => {
  const perspective = "MEMBER PERSPECTIVE";
  const speech =
    "EDF looks for pragmatic, win-win solutions that help the environment and the economy. That is the type of leadership needed to get action done.";
  const name = "Logan S.";
  const Address = "New City, New York";

  return (
    <div className="content-wrapper">
      <div style={{ marginBlock: "4rem 2.5rem" }} className="content-main">
        <div className="left-main column-flex">
          <h2>Get our alerts</h2>
          <p style={{ width: "85%" }} className="content-paragraph">
            Timing is everything. Sign up for our latest news and alerts, to
            find out when your support and your voice help most.
          </p>
          <div style={{ width: 500, marginTop: "2rem" }}>
            <InputForm
              label="Email"
              type="email"
              name="email"
              styling={inputStyled}
            />
            <ButtonForm styling={styled} buttonName="Sign up" />
          </div>
        </div>
        <div className="right-main">
          <Card
            perspective={perspective}
            speech={speech}
            name={name}
            job={Address}
          />
        </div>
      </div>
    </div>
  );
};
