import React from "react";
import { useHistory } from "react-router-dom";
import { route } from "../../../../common/config/routes/routesName";
import { AnnounceForm } from "../../../../components/AnnounceForm/AnnounceForm";

export const NewPWSuccess = () => {
  const history = useHistory();
  const PWRecoverSuccessImgURL = "/img/success.svg";
  const message = "Khôi phục mật khẩu thành công";
  const handleClick = (): void => {
    history.push(route.SIGNIN);
  };
  const buttonName = "Về trang đăng nhập";
  return (
    <AnnounceForm
      announceImg={PWRecoverSuccessImgURL}
      handleSubmitEvent={handleClick}
      buttonName={buttonName}
      message={message}
    />
  );
};
