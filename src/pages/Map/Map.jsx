import React from "react";
import MP from "../../assets/Map.png";
import YandexMap from "./YandexMap"; 

const Map = () => {
  return (
    <div>
      <div className="main-header">
        <div>
          <img src={MP} alt="Парковка" className="main-image" />
          <div className="main-overlay"></div>
          <div className="main-text">
            <h1>Карта парковок</h1>
          </div>
        </div>
      </div>
      <YandexMap />
    </div>
  );
};

export default Map;
