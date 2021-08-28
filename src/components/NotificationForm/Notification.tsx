import React from "react";
import { useHistory } from "react-router-dom";
import { authButtonStyle, ButtonForm } from "../ButtonForm/ButtonForm";

interface iAuthNotiProps {
  message?: string;
  imgLink?: string;
  redirectTitle: string;
  redirectToAdress: string;
}

export const AuthNotification: React.FunctionComponent<iAuthNotiProps> = ({
  message,
  imgLink,
  redirectTitle,
  redirectToAdress,
}) => {
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "100%",
      }}
    >
      <img
        src={imgLink}
        alt=""
        style={{ width: "30%", height: "100%", marginInline: "3rem" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBlockStart: "5em",
        }}
      >
        <p
          style={{
            fontSize: "18px",
          }}
        >
          {message}
        </p>
        <ButtonForm
          styling={authButtonStyle}
          buttonName={redirectTitle}
          handleSubmitEvent={() => history.push(redirectToAdress)}
        />
      </div>
    </div>
  );
};
