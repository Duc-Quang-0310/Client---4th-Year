import React from "react";
import { Card } from "../../../components/CardForm/Card";
import { iSubjects } from "../atwork/AtWork";

const perspective = "MEMBER PERSPECTIVE";
const speech =
  "We support EDF because they so effectively keep their members and the public informed and do so much to protect our environment, air, water, health and future.";
const name = "Mary M.";
const job = "Dallas";

const subjects: iSubjects[] = [
  {
    heading: "Visit the member center",
    content:
      "Learn about the progress people like you make possible and the benefits of joining EDF.",
  },
  {
    heading: "Contact us",
    content:
      "We're happy to help with your questions or requests, weekdays from 9 a.m. to 5 p.m. Eastern.",
  },
];

export const Member: React.FunctionComponent = () => {
  return (
    <div className="content-wrapper">
      <h2 className="content-title">Get involved at work</h2>
      <div
        style={{ marginBottom: "2.5rem" }}
        className="content-main reverse-flex"
      >
        <div style={{ marginLeft: "2rem" }} className="left-main">
          <p style={{ width: "100%" }} className="content-paragraph">
            Do you have questions about joining us or about your membership? Do
            you want to find out more about how your support helps? Start here.
          </p>

          {subjects.map((subject, index) => {
            return (
              <div
                style={{ width: "48%" }}
                className="expert-wrapper"
                key={index}
              >
                <p
                  style={{
                    textTransform: "uppercase",
                    marginBlock: "1em",
                    fontWeight: 600,
                  }}
                >
                  {subject.heading}
                </p>
                <p style={{ paddingInline: "5px" }}>{subject.content}</p>
              </div>
            );
          })}
        </div>
        <div className="right-main">
          <Card
            perspective={perspective}
            speech={speech}
            job={job}
            name={name}
          />
        </div>
      </div>
    </div>
  );
};
