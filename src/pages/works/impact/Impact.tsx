import React from "react";
import CountUp from "react-countup";

export const Impact: React.FunctionComponent = () => {
  return (
    <div className="content-wrapper">
      <h2 className="content-title">EDF by the numbers</h2>
      <div className="content-main">
        <div className="number-container">
          <h2>
            <CountUp end={4} duration={5} />M
          </h2>
          <p>
            Acres that have protected 63 rare species, thanks to EDF’s efforts
            to give landowners incentives to help wildlife
          </p>
        </div>
        <div className="number-container">
          <h2>
            <CountUp
              prefix="$"
              end={1.6}
              duration={5}
              decimals={1}
              suffix="B"
            />
          </h2>
          <p>
            The amount in energy savings EDF Climate Corps fellows have
            uncovered for top companies since 2008
          </p>
        </div>
        <div className="number-container">
          <h2>
            <CountUp end={28} duration={5} />
          </h2>
          <p>
            Countries around the world where EDF works with partners and allies
            to solve the most critical environmental problems
          </p>
        </div>
      </div>
    </div>
  );
};
