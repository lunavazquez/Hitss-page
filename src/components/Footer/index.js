import React from "react";
import "./index.css";
import Sochi from "../../assets/logo-sochi.png";
import Logo from "../../assets/mobli-icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="text">
        <p>Aviso de privacidad / Contacto</p>
      </div>
      <div className="logo">
        <img src={Sochi} alt="" />
      </div>
      <div className="social-media">
        {/* <a href="https://www.youtube.com/channel/UC3RrR8fpTefJpHbxN6RBQTw/featured">
          <img src={Logo} alt="" />
        </a> */}
        <img src={Logo} alt="" />
        <img src={Logo} alt="" />
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}
