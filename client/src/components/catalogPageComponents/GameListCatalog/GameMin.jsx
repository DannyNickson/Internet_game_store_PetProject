import React from "react";
import classes from "./GameListCatalog.module.css";
import dotaLogo from "../../../img/doca2.png";
import platform from "../../../img/icon_platform_win.png";
const GameMin = ({ active, id,onMouseEnter,index }) => {
  let $FixThis = {
    title: "dota2",
    img: dotaLogo,
    tags: "Role game, Action, Slesher",
    platforms: "windows",
    sale: "",
    price: "Free to Play",
    old_price: "",
  };
  return (
    <div className={classes["item__block" + (active ? "__active" : "")]} onMouseEnter={()=>{onMouseEnter(index+1)}}>
      <a href="/">
        <div className={classes.img}>
          <img src={$FixThis.img} alt={"img_game_" + $FixThis.title} />
        </div>
        <div className={classes.info__block}>
          <div className={classes.description__block}>
            <div className={classes.title}>{$FixThis.title}</div>
            {$FixThis.platforms && (
              <div className={classes.platforms}>
                <img src={platform} alt="platform_windiows" />
              </div>
            )}
            <div className={classes.tags}>{$FixThis.tags}</div>
          </div>
          {$FixThis.sale && (
            <div className={classes.sales}>{$FixThis.sale}</div>
          )}
          <div className={classes.price}>
            {$FixThis.old_price && (
              <div className={classes.old__price}>{$FixThis.old_price}</div>
            )}
            <div className={classes.current__price}>{$FixThis.price}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GameMin;
