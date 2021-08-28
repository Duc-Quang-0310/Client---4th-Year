import React from "react";
import { useHistory } from "react-router";
import { AnnounceForm } from "../../components/AnnounceForm/AnnounceForm";
import { route } from "../../common/config/routes/routesName";

export const Errors: React.FunctionComponent = () => {
  const history = useHistory();
  const errImgURL = "img/404_errors.svg";
  const message = "Xin lỗi đã có lỗi xảy ra";
  const handleClick = (): void => {
    history.push(route.HOME);
  };
  const buttonName = "Về trang chủ";

  return (
    <AnnounceForm
      announceImg={errImgURL}
      handleSubmitEvent={handleClick}
      buttonName={buttonName}
      message={message}
    />
  );
};
