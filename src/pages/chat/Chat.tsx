import React from "react";
import { webStorage } from "../../common/helper/storage";
import {
  authButtonStyle,
  ButtonForm,
} from "../../components/ButtonForm/ButtonForm";
import { useAppSelector } from "../../reduxToolKit-Saga/hooks";
import { RootState } from "../../reduxToolKit-Saga/store";
import { iMatchProps } from "../auth/registration/Phase2/SignUpSuccess";
import "./Chat.scss";
import { ChatDialog } from "./ChatDialog/ChatDialog";
import { ChatList } from "./ChatList/ChatList";
import { ArrowForward } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { route } from "../../common/config/routes/routesName";

export interface iAccountProps {
  _id: string;
  name: string;
  isAdmin: Boolean;
  isConfirmed: Boolean;
  imageUrl: string;
  username: string;
  email: string;
  password: string;
  date: string;
  __v: number;
}

export const Chat: React.FC<iMatchProps> = ({ match }) => {
  const history = useHistory();
  const token = webStorage.getToken("token");
  const idParams = match.params.id;
  const account: iAccountProps = useAppSelector(
    (state: RootState) => state.auth.userInfo
  );

  console.log(account);
  return (
    <div className="chat-wrapper">
      {token ? (
        <>
          <ChatList
            name={account.name}
            isAdmin={account.isAdmin}
            imageUrl={account.imageUrl}
          />
          <ChatDialog
            params={idParams}
            name={account.name}
            imgLink={account.imageUrl}
            id={account._id}
          />
        </>
      ) : (
        <div className="chat-fail">
          <img src="/img/key.svg" alt="" />
          <h2>Please, Login to use this function </h2>
          <ButtonForm
            styling={authButtonStyle}
            buttonName="Sign In"
            endIcon={<ArrowForward style={{ fontSize: 23 }} />}
            handleSubmitEvent={() => history.push(route.SIGNIN)}
          />
        </div>
      )}
    </div>
  );
};
