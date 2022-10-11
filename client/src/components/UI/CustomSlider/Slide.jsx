import React, { useState } from "react";
import classes from "./CustomSlider.module.css";
import dotaLogo from "../../../img/doca2.png";
import notDotaLogo from "../../../img/LOGO.png";
import notDotaLogoText from "../../../img/Logo_text.jpg";
import notDotaLogoLogo from "../../../img/Logo_image.jpg";
import notDotaLogoPromo from "../../../img/steamcards_promo_02.png";
const Slide = ({
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
      screenShots: [dotaLogo, notDotaLogo, notDotaLogoText, notDotaLogoLogo,notDotaLogoPromo],
      gameStatus: "Now Available",
      gameTag: "Top Seller",
      price: "Free to play",
    };
  }
  const [activeImg, setActiveImg] = useState(gameObject.screenShots[0]);
  const [changed, setChanged] = useState(false);
  return (
    <div className={classes[variant + "__slide" + (active ? "__active" : "")]}>
      <a href={slideLink}>
        <div className={classes["main__img" + (changed ? "__changed" : "")]}>
          <img src={activeImg} alt="mainslidephoto" />
        </div>
        <div className={classes.secondary__block}>
          <div className={classes.game__title}>{gameObject.title}</div>
          <div className={classes.screenshots__group}>
            {gameObject.screenShots &&
              gameObject.screenShots.map((curr, index) => {
                if (index !== 0) {
                  return (
                    <img
                      src={curr}
                      alt={"screenshot" + index}
                      onMouseEnter={(e) => {
                        setActiveImg(e.target.currentSrc);
                        setChanged(true);
                      }}
                      onMouseLeave={() => {
                        setActiveImg(gameObject.screenShots[0]);
                        setChanged(false);
                      }}
                    />
                  );
                }
              })}
          </div>
          <div className={classes.game__status}>{gameObject.gameStatus}</div>
          <div className={classes.game__tag}>{gameObject.gameTag}</div>
          <div className={classes.prive__platform__block}>
            <div className={classes.price}>{gameObject.price}</div>
            <div className={classes.platforms}>
              <span className={classes.windows_icon}></span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Slide;
