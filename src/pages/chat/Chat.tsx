import React from "react";
import { useAppSelector } from "../../reduxToolKit-Saga/hooks";
import { RootState } from "../../reduxToolKit-Saga/store";
import { iMatchProps } from "../auth/registration/Phase2/SignUpSuccess";
import "./Chat.scss";
import { ChatDialog } from "./ChatDialog/ChatDialog";
import { ChatList } from "./ChatList/ChatList";

interface iAccountProps {
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
  const idParams = match.params.id;
  const account: iAccountProps = useAppSelector(
    (state: RootState) => state.auth.userInfo
  );

  console.log(account);
  return (
    <div className="chat-wrapper">
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
    </div>
  );
};
