import React from "react";
import "../../styles/aside.styles.css";

const Aside = () => {
  return (
    <aside className="aside">
      <h2 className="aside__title">Historial</h2>
      <div className="aside__history">
        <ol className="aside__list">
          <li className="aside__item">f</li>
          <li className="aside__item">f</li>
          <li className="aside__item">f</li>
        </ol>
      </div>
      <button className="aside__button">Nueva conversación</button>
    </aside>
  );
};

export default Aside;
