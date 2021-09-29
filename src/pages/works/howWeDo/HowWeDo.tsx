import React, { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { Card } from "../../../components/CardForm/Card";
import { Link } from "react-router-dom";
import { route } from "../../../common/config/routes/routesName";
import { howWeDo } from "../../../common/constants/work";

export const HowWeDo: React.FunctionComponent = () => {
  const [how, setHow] = useState<number>(1);
  const [seeMore, setSeeMore] = useState(false);

  function handleSeeDetails(id: number) {
    setSeeMore(!seeMore);
    setHow(id);
  }

  return (
    <div className="content-wrapper">
      <h2 className="content-title">How we do it</h2>
      <p style={{ width: "100%" }} className="content-paragraph">
        To forge the most effective solutions, EDF approaches the biggest
        environmental challenges from these angles:
      </p>
      <div
        style={{ marginBlock: "1rem 3rem" }}
        className="content-main reverse-flex"
      >
        <div
          style={{ paddingInline: "1rem" }}
          className="left-main reverse-flex"
        >
          <div style={{ paddingInline: "1rem" }} className="img-hero ">
            <div style={{ height: "100%" }} className="img-container">
              <Link
                style={{ width: "100%", height: "100%" }}
                className="img-wrapper"
                to={route.HOME}
              >
                <img
                  className="img-mainImg"
                  src={howWeDo[how - 1].imgLink}
                  alt=""
                />
                <p>{howWeDo[how - 1].imgContent}</p>
              </Link>
            </div>
          </div>
          <div className="card">
            <Card
              speech={howWeDo[how - 1].pText}
              perspective={howWeDo[how - 1].perspective}
              job={howWeDo[how - 1].pJob}
              name={howWeDo[how - 1].pName}
            />
          </div>
        </div>
        <div className="right-main">
          {howWeDo.map((work, index) => {
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
                      {seeMore && how === work.id ? (
                        <KeyboardArrowUp style={{ color: "#00bfa6" }} />
                      ) : (
                        <KeyboardArrowDown style={{ color: "#00bfa6" }} />
                      )}
                    </div>
                  </div>

                  {how === work.id ? (
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
