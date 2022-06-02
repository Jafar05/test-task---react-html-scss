import React from "react";
import MAIN_IMAGE from "../../assets/images/main_page__astronaut.png";
import { ARR_INFO, ARR_STAGES } from "./config";

const MainPageMobile = () => {
  console.log("MAIN PAGE MOBILE");
  return (
    <div className="main-page">
      <div className="container main-page__container">
        <section className="welcome main-page__welcome">
          <h1 className="welcome__title">
            Добро пожаловать <br></br>в УРАЛСИБ
          </h1>
          <button className="button welcome__button">Подробнее</button>
          <div className="background-top main-page__background-top">
            <img
              className="background-top__image"
              src={MAIN_IMAGE}
              alt="картинка с космонавтом"
            />
          </div>
        </section>
        <section className="info main-page__info">
          <div className="info__list">
            {ARR_INFO.map(({ first, second }, index) => (
              <div className="info__item" key={first + index}>
                <p className="info__title">{first}</p>
                {second && <p className="info__description">{second}</p>}
              </div>
            ))}
          </div>
        </section>
        <section className="stages main-page__stages">
          <h2 className="stages__title">Этапы</h2>
          <div className="stages__list">
            {ARR_STAGES.map(({ title, image }, index) => (
              <div className="stages__item">
                <div className="stages__text">{title}</div>
                <img src={image} alt="Этап" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainPageMobile;
