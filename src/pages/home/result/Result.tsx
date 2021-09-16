import React from "react";
import {
  Computer,
  Chart,
  Handshake,
  House,
} from "../../../common/constants/svgPath";

export const Result: React.FunctionComponent = React.memo(() => {
  return (
    <div className="slogan-container">
      <h2>How we get results that last</h2>
      <p className="sub-slogan">
        To stand the test of time, a solution needs broad support. That’s why we
        bring together people from all sides to tackle challenges from many
        perspectives, not just the environmental one.
      </p>

      <div className="flex">
        <Computer />
        <Chart />
        <Handshake />
        <House />
      </div>
    </div>
  );
});
