import React from "react";
import "./index.css";
import VideoPlayer from "../../components/VideoPlayer";
import VideoCard from "../../components/VideoCard";
import Counter from "../../components/Counter";

export const Home = () => {
  return (
    <div className="home-page">
      <div className="first-container">
        <div className="container-text">
          <p>FALTAN</p>
        </div>
        <Counter />
        <VideoPlayer />
      </div>
      <div className="second-container">
        <h2 className="title">CLARO SPORT EN SOCHI 2014</h2>
        <VideoCard />
      </div>
    </div>
  );
};
