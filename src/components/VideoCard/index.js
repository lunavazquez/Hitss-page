import React from "react";
import "./index.css";
import img1 from "../../assets/team-latam.png";
import img2 from "../../assets/travel-meets-fashion.png";
import img3 from "../../assets/velocidad-riesgo.png";
import img4 from "../../assets/experiencia.png";

export default function VideoCard() {
  const items = [
    {
      id: 0,
      name: "TEAM LATAM",
      image: img1,
      text: "Los deportistas latinoamericanos que participan en sochi 2014",
      url: "https://www.youtube.com/embed/geYr0-Mlm-k?si=B7eUnvzZuC9uL66J",
    },
    {
      id: 1,
      name: "TRAVELS MEET FASHION",
      image: img2,
      text: "Los deportistas latinoamericanos que participan en sochi 2014",
      url: "https://www.youtube.com/embed/FijUyC7_C8U?si=VVtgtK8M6h9JbJ9I",
    },
    {
      id: 2,
      name: "VELOCIDAD Y RIESGO",
      image: img3,
      text: "Los deportistas latinoamericanos que participan en sochi 2014",
      url: "https://www.youtube.com/embed/geYr0-Mlm-k?si=B7eUnvzZuC9uL66J",
    },
    {
      id: 3,
      name: "EXPERIENCIA Y MULTIMEDIA",
      image: img4,
      text: "Los deportistas latinoamericanos que participan en sochi 2014",
      url: "https://www.youtube.com/embed/geYr0-Mlm-k?si=B7eUnvzZuC9uL66J",
    },
  ];
  return (
    <div className="container">
      <div className="cards">
        {items.map(({ id, name, image, text, url }) => {
          return (
            <div key={id} className="card">
              <img src={image} alt="" />
              <p className="name">{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
