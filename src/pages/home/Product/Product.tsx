import React from "react";
import { seeds } from "../../../common/constants/home";
import { Link } from "react-router-dom";
import { ButtonForm } from "../../../components/ButtonForm/ButtonForm";

const productBtnStyle = {
  background: "#00bfa6",
  borderRadius: "2rem",
  color: "white",
  fontSize: "1.3rem",
  padding: "0.4em 5em",
  textTransform: "none",
  marginInline: "auto",
};

export const Product: React.FC = React.memo(() => {
  return (
    <div className="slogan-container">
      <h2>Make your way faster</h2>
      <p className="sub-slogan">Do it your self by planting tree</p>
      <div className="product-container">
        {seeds.map((seed, index) => {
          return (
            <div className="product-wrapper" key={index}>
              <Link key={index} to={seed.link}>
                <img className="product-img" src={seed.img} alt="" />
                <p className="product-price">{seed.price}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <ButtonForm buttonName="See more" styling={productBtnStyle} />
    </div>
  );
});
