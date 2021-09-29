import React from "react";
import { involve } from "../../common/constants/media";
import { MediaBG } from "../../components/MediaBackground/MediaBG";
import { Navbar } from "../../components/Navbar/Navbar";
import { Actions } from "./actions/Actions";
import { Alert } from "./alerts/Alert";
import { AtWork } from "./atwork/AtWork";
import { Member } from "./member/Member";
import "./Involved.scss";
import { Act } from "../about/act/Act";

export const Involved: React.FunctionComponent = () => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <MediaBG
        image={involve.image}
        title={involve.title}
        subTitle={involve.subTitle}
        content={involve.content}
      />
      <Alert />
      <Actions />
      <AtWork />
      <Member />
      <Act />
    </div>
  );
};
