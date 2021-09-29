import React from "react";
import { ButtonForm } from "../../../components/ButtonForm/ButtonForm";
import { InputForm } from "../../../components/InputForm/InputForm";

export const styled = {
  background: "#00bfa6",
  color: "white",
  fontSize: "1.3rem",
  padding: "0.4rem 7.5rem",
  textTransform: "none",
  marginBottom: "2rem",
};

export const inputStyled = {
  width: "20rem",
  fontSize: "11rem",
  opacity: "0.9",
  marginBottom: "2rem",
};

export const Act: React.FC = () => {
  return (
    <div className="content-wrapper">
      <h2 className="content-title">Act when it matters most</h2>
      <div className="content-main">
        <div className="left-main">
          <p style={{ width: "85%" }} className="content-paragraph">
            Every day <b> more than 60 people</b> sign up for news and alerts,
            to find out when their support helps most. Will you join them?
          </p>
        </div>
        <div className="right-main">
          <InputForm
            label="Email"
            type="email"
            name="email"
            styling={inputStyled}
          />
          <ButtonForm styling={styled} buttonName="Sign up" />
        </div>
      </div>
    </div>
  );
};
