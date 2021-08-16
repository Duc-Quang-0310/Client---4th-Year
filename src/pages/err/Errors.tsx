import React from "react";
import "./Errors.scss";
import { ButtonForm } from "../../components/ButtonForm/ButtonForm";
import { useHistory } from "react-router";

export const Errors: React.FunctionComponent = () => {
  const history = useHistory();
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
  const handleClick = (): void => {
    history.push("/home");
  };
  const buttonName = "Về trang chủ";

  return (
    <div className="container ">
      <img className="wave" src="/img/wave.svg" alt="" />
      <img className="wave w-rotate" src="/img/wave.svg" alt="" />
      <div className="err-center">
        <img className="err-img" src="img/404_errors.svg" alt="ERROR" />
        <p className="err-message">Xin lỗi đã có lỗi xảy ra</p>
        <ButtonForm
          styling={styling}
          handleSubmitEvent={handleClick}
          buttonName={buttonName}
        />
      </div>
    </div>
  );
};
