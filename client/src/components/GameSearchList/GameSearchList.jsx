import React, { useState } from "react";
import classes from "./GameSearchList.module.css";
import GameMinCatalogSearch from "./GameMinCatalogSearch";
const GameSearchList = () => {
  let $FixThis = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [active, setActive] = useState(false);
  const [activeArange,setActiveArange] = useState("Name");
  const [activeFilter, setActiveFilter] = useState({1:false,2:false,3:false})
  const ClickSortBy = function (e) {
    e.preventDefault();
    setActive((prev) => {
      return !prev;
    });
  };
  return (
    <section>
      <div className={classes.game__list__container}>
        <div className={classes.game__list}>
          <div className={classes.inner__filter__block}>
            <div className={classes.search__block}>
              <input type="text" />
              <button className={classes.search__button}>Search</button>
            </div>
            <div className={classes.inner__filter}>
              <span>Sort by</span>
              <div className={classes.arrange__list}>
                <div className={classes.arrange__list__container__a__link}>
                  <a href="/" onClick={ClickSortBy}>
                    {activeArange}
                  </a>
                </div>
                <div
                  className={
                    classes["arrange__list" + (active ? "__active" : "__hide")]
                  }
                >
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
            {$FixThis &&
              $FixThis.map((curr, index) => {
                return (
                  <GameMinCatalogSearch
                    variant="catalog__search"
                    id={curr}
                    link={`/catalog/game:${curr}`}
                  />
                );
              })}
          </div>
        </div>
        <div className={classes.game__list__filters}>
          <div className={classes.filter__container}>
            <div className={classes.filter__submenu}>
              <div className={classes.filter__submenu__title}>
              <span className={classes.filter__show__label}>
                Narrow by Price
              </span>
              </div>
              <div className={classes.filter__submenu__hide}>
                <div className={classes.filter__submenu__handler}>
                  price is 300 bucks
                </div>
              </div>
            </div>
          </div>
          <div className={classes.filter__container}>
            <div className={classes.filter__submenu} id="2" onClick={(e)=>{
              let id = e.target.parentElement.id ? e.target.parentElement.id : e.target.parentElement.parentElement.id
              let newArray = {...activeFilter}
              newArray[id] = !newArray[id];
              setActiveFilter({...newArray})
            }}>
            <div className={classes.filter__submenu__title}>
              <span className={classes.filter__show__label}>
                Narrow by Price
              </span>
               </div>
              <div className={classes["filter__submenu" + (activeFilter[2] ? "__opened":"__hide")]}>
                <div className={classes.filter__submenu__handler}>
                  <span>price is 300 bucks</span>
                  <span>price is 300 bucks</span>
                  <span>price is 300 bucks</span>
                  <span>price is 300 bucks</span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.filter__container}>
            <div className={classes.filter__submenu}>
            <div className={classes.filter__submenu__title}>
              <span className={classes.filter__show__label}>
                Narrow by Price
              </span>
              </div>
              <div className={classes.filter__submenu__hide}>
                <div className={classes.filter__submenu__handler}>
                  price is 300 bucks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSearchList;
