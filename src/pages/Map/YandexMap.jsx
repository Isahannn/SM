import React, { useRef, useEffect, useState } from "react";
import "./Yandex.css"; // Импортируем стили

// Global reference for the map script
const MAP_SCRIPT_ID = "yandex-map-script";

const YandexMap = () => {
  const mapContainer = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Check if the map script is already added to the DOM
    const existingScript = document.getElementById(MAP_SCRIPT_ID);

    if (!existingScript && mapContainer.current) {
      // If script doesn't exist, create it
      const script = document.createElement("script");
      script.id = MAP_SCRIPT_ID;
      script.src =
        "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A73d150aac7067bd6de10c0e5fa22c24367d91c40d62e187aa37a6af74f70a67b&width=100%25&height=100%25&lang=ru_RU&scroll=true";
      script.async = true;

      script.onload = () => {
        setMapLoaded(true); // Mark map as loaded
      };

      mapContainer.current.appendChild(script); // Inject script into the map container
    } else {
      // If script already exists, just set the map as loaded
      setMapLoaded(true);
    }
  }, []);

  const enterFullscreen = () => {
    if (mapContainer.current.requestFullscreen) {
      mapContainer.current.requestFullscreen();
    } else if (mapContainer.current.mozRequestFullScreen) {
      /* Firefox */
      mapContainer.current.mozRequestFullScreen();
    } else if (mapContainer.current.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      mapContainer.current.webkitRequestFullscreen();
    } else if (mapContainer.current.msRequestFullscreen) {
      /* IE/Edge */
      mapContainer.current.msRequestFullscreen();
    }
  };

  return (
    <div className="map-container">
      <button className="fullscreen-button" onClick={enterFullscreen}>
        Полноэкранный режим
      </button>
      <div
        ref={mapContainer}
        className="map"
        id="mapContainer"
      >
        {!mapLoaded && <p style={{ textAlign: "center" }}>Загрузка карты...</p>}
      </div>
    </div>
  );
};

export default YandexMap;
