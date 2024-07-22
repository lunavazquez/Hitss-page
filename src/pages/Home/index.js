import { useState } from "react";
import "./index.css";
import VideoCard from "../../components/VideoCard";
import Counter from "../../components/Counter";
import img1 from "../../assets/team-latam.png";
import img2 from "../../assets/travel-meets-fashion.png";
import img3 from "../../assets/velocidad-riesgo.png";
import img4 from "../../assets/experiencia.png";

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

export const Home = () => {
  const [url, setUrl] = useState(
    "https://www.youtube.com/embed/geYr0-Mlm-k?si=B7eUnvzZuC9uL66J"
  );

  const handleOnClick = (e) => {
    console.log(setUrl(url));
  };
  return (
    <div className="home-page">
      <div className="first-container">
        <div className="container-text">
          <p>FALTAN</p>
        </div>
        <Counter />
        <div className="video-content">
          <iframe
            width="640"
            height="350"
            src={url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="second-container">
        <h2 className="title">CLARO SPORT EN SOCHI 2014</h2>
        <div>
          {items.map(({ id, name, image, text, url }) => (
            <VideoCard
              onClick={handleOnClick}
              key={id}
              name={name}
              image={image}
              text={text}
              url={url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
