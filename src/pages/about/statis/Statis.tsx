import React from "react";
import CountUp from "react-countup";

export const Statis: React.FunctionComponent = () => {
  return (
    <div className="content-wrapper">
      <h2 className="content-title">EDF by the numbers</h2>
      <div className="content-main">
        <div className="number-container">
          <h2>
            <CountUp end={5} duration={7} />M
          </h2>
          <p>
            Dedicated members and activists who inspire us and make what we do
            possible
          </p>
        </div>
        <div className="number-container">
          <h2>
            <CountUp end={28} duration={7} />
          </h2>
          <p>
            Number of countries where we're taking on the biggest environmental
            challenges
          </p>
        </div>
        <div className="number-container">
          <h2>
            <CountUp end={750} duration={7} />
          </h2>
          <p>
            Staff members from different disciplines working together to develop
            new ideas
          </p>
        </div>
      </div>
    </div>
  );
};
