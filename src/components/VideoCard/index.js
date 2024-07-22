import React from "react";
import "./index.css";

export default function VideoCard({ name, text, image }) {
  return (
    <div className="cards">
      <div className="card">
        <img src={image} alt="" />
        <p>{text}</p>
        <p className="name">{name}</p>
      </div>
    </div>
  );
}
