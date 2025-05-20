import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import P1 from "../../assets/P1.jpeg";
import P2 from "../../assets/P2.jpeg";
import P3 from "../../assets/P3.jpeg";
import MP from "../../assets/news.png"; 
import "./News.css"

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,  
  };

  return (
    <div>
      <div className="main-header">
        <img src={MP} alt="hedear" className="main-image" />
        <div className="main-overlay"></div>
        <div className="main-text">
          <h1>Новости</h1>
        </div>
      </div>
      <div className="slider-container">
        <div className="slider-section">
          <Slider {...settings}>
            <div>
              <img src={P1} alt="Новости 1" className="slide-image" />
            </div>
            <div>
              <img src={P2} alt="Новости 2" className="slide-image" />
            </div>
            <div>
              <img src={P3} alt="Новости 3" className="slide-image" />
            </div>
          </Slider>
        </div>
        <div className="text-section">
          <h1>Первая парковка в сервисе</h1>
          <p>Платная парковка на Богдана Хмельницкого 11 уже отслеживается в нашем сервисе.</p>
        </div>
      </div>
    </div>
  );
};

export default News;
