import React from "react";
import { ModeCommentRounded } from "@material-ui/icons";
import "./ChatCloud.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../reduxToolKit-Saga/hooks";
import { RootState } from "../../reduxToolKit-Saga/store";
import { iAccountProps } from "../../pages/chat/Chat";

export const ChatCloud: React.FC = () => {
  const account: iAccountProps = useAppSelector(
    (state: RootState) => state.auth.userInfo
  );
  return (
    <Link className="clound" to={`/chat/${account._id}`}>
      <ModeCommentRounded style={{ color: "#fff", fontSize: "35px" }} />
    </Link>
  );
};
