import React from "react";
import { ButtonForm } from "../ButtonForm/ButtonForm";
import "./AnnounceForm.scss";

interface iAnnounceFormProps {
  announceImg: string;
  handleSubmitEvent: () => void;
  buttonName: string;
  message: string;
}

const styling = {
  background: "#00bfa6",
  borderRadius: 5,
  border: 0,
  color: "white",
  padding: "1em 3em",
  textTransform: "none",
  fontSize: "1.5em",
  marginTop: "1.5em",
};

export const AnnounceForm: React.FunctionComponent<iAnnounceFormProps> = ({
  announceImg,
  handleSubmitEvent,
  buttonName,
  message,
}) => {
  return (
    <div className="container ">
      <img className="wave" src="/img/wave.svg" alt="" />
      <img className="wave w-rotate" src="/img/wave.svg" alt="" />
      <div className="err-center">
        <img className="err-img" src={announceImg} alt="ERROR" />
        <p className="err-message">{message}</p>
        <ButtonForm
          styling={styling}
          handleSubmitEvent={handleSubmitEvent}
          buttonName={buttonName}
        />
      </div>
    </div>
  );
};
