import React from "react";
import "./AuthForm.scss";

interface iAuthFormProps {
  outerImg?: string;
  centeredImg?: string;
  title?: string;
  logo?: string;
  children?: React.ReactNode;
  classes?: string | undefined;
}

export const AuthForm: React.FunctionComponent<iAuthFormProps> = ({
  outerImg,
  classes,
  centeredImg,
  title,
  logo,
  children,
}) => {
  return (
    <div className={`form-container ${classes}`}>
      <div className="signin-photo">
        <img className="signin-outerImg" src={outerImg} alt="" />
        <div className="center-photo">
          <img src={centeredImg} alt="" />
        </div>
      </div>
      <div className="signin-form">
        <img className="form-decoration" src={outerImg} alt="" />
        <div className="form-input">
          <img src={logo} alt="" />
          <h1 className="text-center">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};
