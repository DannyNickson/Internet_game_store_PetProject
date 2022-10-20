import React from "react";
import classes from "./GameSearchList.module.css";
const GameMinCatalogSearch = () => {
  return (
    <div className={classes.game___min__container}>
      <div className={classes.img__block}>
        <img src="" alt="doca2" />
      </div>
      <div className={classes.game__title}>DOTA 2</div>
      <div className={classes.game__datarelise}>9 Jul,2013</div>
      <div className={classes.game__rate}>
        <span className={classes["approve"]}></span>
      </div>
      <div className={classes.game__price}>
        <span>Free to play</span>
      </div>
    </div>
  );
};

export default GameMinCatalogSearch;
