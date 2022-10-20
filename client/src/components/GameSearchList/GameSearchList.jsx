import React, { useState } from "react";
import classes from "./GameSearchList.module.css";
import GameMinCatalogSearch from './GameMinCatalogSearch';
const GameSearchList = () => {
    let $FixThis = [1,1,1,1,1,1,1,1,1,1,1,1]
  const [activeArange, setActiveArange] = useState("Name");
  return (
    <div className={classes.game__list__container}>
      <div className={classes.game__list}>
        <div className={classes.inner__filter__block}>
          <div className={classes.search__block}>
            <input type="text" placeholder="Search" />
            <button className={classes.search__button}>Search</button>
          </div>
          <div className={classes.inner__filter}>
            <span>Sort by</span>
            <div className={classes.arrange__list}>
              <span>
                {activeArange}
                <i />
              </span>
              <div className={classes.arrange__list__hide}>
                <span
                  onClick={(e) => {
                    setActiveArange(e.target.innerText);
                  }}
                >
                  Name
                </span>
                <span
                  onClick={(e) => {
                    setActiveArange(e.target.innerText);
                  }}
                >
                  Lowest Price
                </span>
                <span
                  onClick={(e) => {
                    setActiveArange(e.target.innerText);
                  }}
                >
                  Highest Price
                </span>
                <span
                  onClick={(e) => {
                    setActiveArange(e.target.innerText);
                  }}
                >
                  Realese date
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.game__list__items}>
            {$FixThis && ($FixThis.map((curr,index)=>{
                return <GameMinCatalogSearch variant='catalog__search' id={curr}/>
            }))}
        </div>
      </div>
      <div className={classes.game__list__filters}>
        <div className={classes.filter__container}>
          <div className={classes.filter__submenu}>
            <span className={classes.filter__show__label}>
              Narrow by Price
            </span>
            <div className={classes.filter__submenu__hide}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSearchList;
