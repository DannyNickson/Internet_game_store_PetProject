import React from "react";
import classes from "./CustomSlider.module.css";
import dotaLogo from "../../../img/doca2.png";
const Slide = ({
  children,
  variant = "recomended",
  active = false,
  slideLink = "/",
  gameId = 1,
}) => {
  let gameObject = {};
  if (gameId == 1) {
    gameObject = {
      id: 1,
      title: "Dota 2",
      screenShot: dotaLogo,
      gameStatus: "Now Available",
      gameTag: "Top Seller",
      price: "Free to play",
    };
  }
  return (
    <div className={classes[variant + "__slide" + (active ? "__active" : "")]}>
      <a href={slideLink}>
        <div className="main__img">
          <img src={gameObject.screenShot} alt="mainslidephoto" />
        </div>
        <div className="secondary__block">
          <div className="game__title">{gameObject.title}</div>
          <div className="screenshots__group">
            <img src={gameObject.screenShot} alt="screenshot1" />
            <img src={gameObject.screenShot} alt="screenshot2" />
            <img src={gameObject.screenShot} alt="screenshot3" />
            <img src={gameObject.screenShot} alt="screenshot4" />
          </div>
          <div className="game__status">{gameObject.gameStatus}</div>
          <div className="game__tag">{gameObject.gameTag}</div>
          <div className="prive__platform__block">
            <div className="price">{gameObject.price}</div>
            <div className="platforms">
              <span className="windows_icon"></span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Slide;
