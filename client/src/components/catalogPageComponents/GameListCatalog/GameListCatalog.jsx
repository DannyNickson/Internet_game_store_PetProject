import React from "react";
import classes from "./GameListCatalog.module.css";
import GameList from "./GameList";
import { useState } from "react";
const GameListCatalog = () => {
  const $FixThis = [
    { title: "Popular new one", ids: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    { title: "Sale liders", ids: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    { title: "Future popular products", ids: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    { title: "Sales", ids: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
  ];
  const [active,setActive] = useState(1)
  return (
    <div className={classes.game__list}>
      <div className={classes.game__nav}>
        {$FixThis &&
          $FixThis.map((curr, index) => {
            return (
              <a
              className={(index+1 === active) ? classes.active : ""}
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                    setActive(index +1)
                }}
                key={index + curr.ids[0]}
              >
                {curr.title}
              </a>
            );
          })}
      </div>
      <div className={classes.game__items}>
        {$FixThis &&  $FixThis.map((curr,index)=>{
            return <GameList key={index + 1 + curr.ids[1]} ids = {curr.ids} activeBlock={index + 1 === active}/>
        })}
      </div>
    </div>
  );
};

export default GameListCatalog;
