import React from "react";
import classes from "./GameSearchList.module.css";
import $FixThis from "../../img/doca2.png";
const GameMinCatalogSearch = ({link}) => {
  return (
    <a href={link} className={classes.game___min__container}>
      <div className={classes.img__block}>
        <img src={$FixThis} alt="doca2" />
      </div>
      <div className={classes.game__title}>DOTA 2</div>
      <div className={classes.game__datarelise}>9 Jul,2013</div>
      <div className={classes.game__rate}>
        <span className={classes["approve"]}></span>
      </div>
      <div className={classes.game__price}>
        <span>Free to play</span>
      </div>
    </a>
  );
};

export default GameMinCatalogSearch;
