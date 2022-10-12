import React from "react";
import { useState } from "react";
import classes from "./GameListCatalog.module.css";
import GameMin from "./GameMin";
import $FixThis from "../../../img/doca2.png";
const GameList = ({ ids, activeBlock }) => {
  const [active, setActvie] = useState(1);
  return (
    <div className={classes["group__list" + (activeBlock ? "__active" : "")]}>
      <div className={classes.game__list__group}>
        {ids.map((curr, index) => {
          return (
            <GameMin
              id={curr}
              onMouseEnter={setActvie}
              index={index}
              key={curr + index}
              active={index + 1 === active}
            />
          );
        })}
      </div>
      <div className={classes.game__info}>
        <div className={classes.title__game__info}>DOTA 2</div>
        <div className={classes.tags__game__info}>
          <span>Role game</span>
          <span>Action</span>
          <span>Slasher</span>
        </div>
        <div className={classes.screenshots}>
          <img src={$FixThis} alt="" />
          <img src={$FixThis} alt="" />
          <img src={$FixThis} alt="" />
          <img src={$FixThis} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GameList;
