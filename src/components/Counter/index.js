import React from "react";
import Countdown from "react-countdown";
import "./index.css";

const Counter = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="completed">
          <p>Se finalizo el contador</p>
        </div>
      );
    } else {
      return (
        <div className="container-temp">
          <div className="timer">
            <div className="circle">
              <div className="circle-content">
                <p>{days} </p>
                <p>DÍAS</p>
              </div>
            </div>
            <div className="circle">
              <div className="circle-content">
                <p>{hours}</p>
                <p>HRS</p>
              </div>
            </div>
            <div className="circle">
              <div className="circle-content">
                <p>{minutes}</p>
                <p>MIN.</p>
              </div>
            </div>
            <div className="circle">
              <div className="circle-content">
                <p>{seconds}</p>
                <p>SEG</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    //Establecer la fecha límite del temporizador
    <div>
      <Countdown date={"2024-12-31T00:00:00"} renderer={renderer} />
    </div>
  );
};

export default Counter;
