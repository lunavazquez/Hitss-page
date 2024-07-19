import React from "react";
import "./index.css";
import IconOne from "../../assets/logo-sochi-color.png";
import IconClaro from "../../assets/logo-claro-sports.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="img-content1">
        <img src={IconOne} alt="" />
      </div>
      <div className="img-content2">
        <img src={IconClaro} alt="" />
      </div>
    </header>
  );
};
