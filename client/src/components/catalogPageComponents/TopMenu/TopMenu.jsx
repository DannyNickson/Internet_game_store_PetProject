import React from "react";
import classes from "./TopMenu.module.css";
import CustomNav from "./../../UI/CustomNav/CustomNav";
import { SHOP_ROUTE } from "../../../utils/consts";
import CustomSearchInput from './../../UI/CustomSearchInput/CustomSearchInput';

const TopMenu = () => {
  return (
    <div className={classes.banner__block}>
      <div className="menu__block">
        <div className={classes.menu}>
          <CustomNav
            title="Your Store"
            titleLink={SHOP_ROUTE}
            variant="catalog__submenu__blue"
          >
            <div>
              <a href="/">Home</a>
              <a href="/">Community Recommendations</a>
              <a href="/">Recently Viewed</a>
            </div>
          </CustomNav>
          <CustomNav
            title="New & Noteworthy"
            titleLink={SHOP_ROUTE}
            variant="catalog__submenu__blue"
          >
            <div>
              <a href="/">Top Sellers</a>
              <a href="/">Most Played</a>
              <a href="/">Popular Ucomming</a>
            </div>
          </CustomNav>
          <CustomNav
            title="Categories"
            titleLink=""
            variant="catalog__submenu__blue"
          />
          <CustomNav
            title="Points Shop"
            titleLink={SHOP_ROUTE}
            variant="catalog__submenu__blue"
          />
          <CustomNav
            title="News"
            titleLink={SHOP_ROUTE}
            variant="catalog__submenu__blue"
          />
          <CustomNav
            title="Labs"
            titleLink={SHOP_ROUTE}
            variant="catalog__submenu__blue"
          />
          <CustomSearchInput placeholder="search" />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
