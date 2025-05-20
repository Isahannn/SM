import React from "react";
import PL from "../../assets/parking.webp";
import FP from "../../assets/FP.jpg";
import AN from "../../assets/analys.jpg";
import CC from "../../assets/CC.jpg";
import "./Main.css";

export default function Main() {
  return (
    <div>
      <div className="main-header">
        <img src={PL} alt="Парковка" className="main-image" />
        <div className="main-overlay"></div>
        <div className="main-text">
          <h1>MYPARKING</h1>
          <h2>Легкость парковки в вашем кармане</h2>
        </div>
      </div>
      <div className="main-description">
        <p>
          <strong>MyParking</strong> — это бесплатный* и удобный сервис по поиску свободных парковок в Беларуси. Пользуйтесь всеми преимуществами сервиса без необходимости его приобретения!
        </p>
        <p>*при определенных условиях использования</p>
      </div>
      <div className="service-benefits">
        <h2>Преимущества сервиса</h2>
        <div className="benefits-list">
          <div className="benefit-item">
            <img src={FP} alt="Снижение времени на поиск свободного места" className="benefit-image" />
            <div className="benefit-text">
              <h3>Снижение времени на поиск свободного места</h3>
              <p>Сервис позволяет получить данные о загрузке парковки и спланировать логистику</p>
            </div>
          </div>
          <div className="benefit-item">
            <img src={CC} alt="Уменьшение количества ДТП на парковках" className="benefit-image" />
            <div className="benefit-text">
              <h3>Уменьшение количества ДТП на парковках</h3>
              <p>Благодаря осведомленности водители будут выбирать более свободные парковки</p>
            </div>
          </div>
          <div className="benefit-item">
            <img src={AN} alt="Прогнозирование загрузки парковок" className="benefit-image" />
            <div className="benefit-text">
              <h3>Прогнозирование загрузки парковок</h3>
              <p>В специальном разделе пользователи могут получить информацию о загрузке парковки в будущем времени</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
