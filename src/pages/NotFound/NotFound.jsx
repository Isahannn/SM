import React from "react";
import "./NotFound.css"; // Импортируем стили
import logo from "../../assets/Logo.png"; // Импортируем логотип

export default function NotFound() {
  return (
    <div className="not-found-container">
      <img src={logo} alt="Логотип" className="logo" />
      <h1>Случились неполадки</h1>
      <p>К сожалению, произошла ошибка. Мы уже работаем над ее исправлением.</p>
      <a href="/" className="back-link">
        Вернуться на главную
      </a>
    </div>
  );
}
