import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { route } from "../../../../common/config/routes/routesName";
import { AnnounceForm } from "../../../../components/AnnounceForm/AnnounceForm";
import { authServices } from "../../../../services/authServices";

export interface iMatchProps {
  match: any;
}

const SignUpSuccessImgURL = "/img/success.svg";
const message = "Đăng ký thành công";
const buttonName = "Về trang đăng nhập";

export const SignUpSuccess: React.FunctionComponent<iMatchProps> = ({
  match,
}) => {
  const params = match.params.token;
  console.log(params);
  useEffect(() => {
    authServices.register_confirm(params);
  }, [params]);

  const history = useHistory();
  const handleClick = (): void => {
    history.push(route.SIGNIN);
  };

  return (
    <AnnounceForm
      announceImg={SignUpSuccessImgURL}
      handleSubmitEvent={handleClick}
      buttonName={buttonName}
      message={message}
    />
  );
};
