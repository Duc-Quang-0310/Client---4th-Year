import React from "react";
import { Card } from "../../../components/CardForm/Card";

export interface iSubjects {
  heading: string;
  content: string;
}

export const AtWork: React.FC = () => {
  const perspective = "PARTNER PERSPECTIVE";
  const speech =
    "Our work with EDF will help thousands of entrepreneurs make environmental commitments a part of the very foundations of their companies.";
  const name = "Jon Leland";
  const job = "Vice President, Insights, Kickstarter";
  const subjects: iSubjects[] = [
    {
      heading: "Business leadership",
      content:
        "Successful business leaders are raising the bar on corporate sustainability. Raise it higher. Our EDF+Business experts can help.",
    },
    {
      heading: "Project development",
      content:
        "Host an EDF Climate Corps fellow to design practical ways for your company to boost energy efficiency and more.",
    },
    {
      heading: "Marketing and fundraising",
      content:
        "Inspire your customers, partners and staff to support our critical work through cause marketing and workplace fundraising.",
    },
  ];

  return (
    <div className="content-wrapper">
      <h2 className="content-title">Get involved at work</h2>
      <div style={{ marginBottom: "2.5rem" }} className="content-main">
        <div className="left-main">
          <p
            style={{ width: "100%", marginRight: "2rem" }}
            className="content-paragraph"
          >
            We bring the right people together to solve environmental challenges
            from many different angles. Meet some of the experts who represent
            key parts of our work.
          </p>

          {subjects.map((subject, index) => {
            return (
              <div
                style={{ marginLeft: "15px" }}
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
