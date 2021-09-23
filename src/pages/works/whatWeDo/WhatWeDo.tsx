import React, { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { works } from "../../../common/constants/work";
import { Card } from "../../../components/CardForm/Card";
import { Link } from "react-router-dom";
import { route } from "../../../common/config/routes/routesName";

export const WhatWeDo: React.FunctionComponent = () => {
  const [what, setWhat] = useState<number>(1);
  const [seeMore, setSeeMore] = useState(false);

  function handleSeeDetails(id: number) {
    setSeeMore(!seeMore);
    setWhat(id);
  }

  return (
    <div className="content-wrapper">
      <h2 className="content-title">How we do it</h2>
      <p style={{ width: "100%" }} className="content-paragraph">
        Thanks to our supporters and partners, EDF follows the evidence to zero
        in on the areas where our expertise can make the biggest difference:
      </p>
      <div
        style={{ marginBlock: "1rem 3rem" }}
        className="content-main reverse-flex"
      >
        <div style={{ paddingInline: "1rem" }} className="left-main">
          <div className="img-hero">
            <div style={{ height: "100%" }} className="img-container">
              <Link
                style={{ width: "100%", height: "100%" }}
                className="img-wrapper"
                to={route.HOME}
              >
                <img
                  className="img-mainImg"
                  src={works[what - 1].imgLink}
                  alt=""
                />
                <p>{works[what - 1].imgContent}</p>
              </Link>
            </div>
          </div>
          <div className="card">
            <Card
              speech={works[what - 1].pText}
              perspective={works[what - 1].perspective}
              job={works[what - 1].pJob}
              name={works[what - 1].pName}
            />
          </div>
        </div>
        <div className="right-main">
          {works.map((work, index) => {
            return (
              <div
                key={index}
                style={{
                  paddingBlock: "1rem",
                  borderBottom: "1px solid #d8d5d3",
                }}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSeeDetails(work.id)}
                >
                  <div
                    style={{ alignItems: "center" }}
                    className="content-main"
                  >
                    <img src={work.logoImg} alt={work.mainTitle} />
                    <h3 className="text-primary text-center ">
                      {work.mainTitle}
                    </h3>
                    <div style={{ marginLeft: "auto" }}>
                      {seeMore && what === work.id ? (
                        <KeyboardArrowUp style={{ color: "#00bfa6" }} />
                      ) : (
                        <KeyboardArrowDown style={{ color: "#00bfa6" }} />
                      )}
                    </div>
                  </div>

                  {what === work.id ? (
                    <p
                      style={{ lineHeight: "28px", marginTop: "1rem" }}
                      className="text-normal"
                    >
                      {work.now}
                    </p>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
