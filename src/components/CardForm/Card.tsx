import React from "react";
import "./Card.scss";

interface iCardProps {
  perspective: string;
  speech: string;
  name: string;
  job: string;
}

export const Card: React.FunctionComponent<iCardProps> = ({
  perspective,
  speech,
  name,
  job,
}) => {
  return (
    <div className="card">
      <div className="box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
            stroke=" #00F2D2"
            fill="#00F2D2"
          />
        </svg>

        <div className="content">
          <p style={{ marginBottom: "1rem" }}>{perspective}</p>
          <p style={{ fontWeight: "bold" }}>{speech}</p>
        </div>
        <div className="block"></div>
        <div className="content">
          <p style={{ fontWeight: "bold", marginBottom: "10px" }}>{name}</p>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
};
