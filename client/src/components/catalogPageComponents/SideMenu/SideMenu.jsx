import React from "react";
import CustomNav from "../../UI/CustomNav/CustomNav";
import classes from "./SideMenu.module.css";
const SideMenu = () => {
  return (
    <div className={classes.side__menu}>
      <div className="gift__cards__img">
        <img src="" alt="gift__cards__img" />
      </div>
      <CustomNav title="GIFT CARDS" variant="sidemenu__nav__giftcard">
        <div>
          <a href="/">Now Available on ASTRA</a>
        </div>
      </CustomNav>
      <div className="navigation__blocks">
        <CustomNav title="Recomended" variant="sidemenu__nav">
          <div>
            <a href="/">
              <img src="" alt="" />
              By Friends
            </a>
            <a href="/">
              <img src="" alt="" />
              By Curators
            </a>
            <a href="/">
              <img src="" alt="" />
              Tags
            </a>
          </div>
        </CustomNav>
        <CustomNav title="Discover Queues" variant="sidemenu__nav">
          <div>
            <a href="/">
              <img src="" alt="" />
              Recomended
            </a>
            <a href="/">
              <img src="" alt="" />
              New Releases
            </a>
          </div>
        </CustomNav>
        <CustomNav title="Browse Categories" variant="sidemenu__nav">
          <div>
            <a href="/">
              <img src="" alt="" />
              Top Sellers
            </a>
            <a href="/">
              <img src="" alt="" />
              New Releases
            </a>
            <a href="/">
              <img src="" alt="" />
              Upcoming
            </a>
            <a href="/">
              <img src="" alt="" />
              Specials
            </a>
            <a href="/">
              <img src="" alt="" />
              VR Titles
            </a>
            <a href="/">
              <img src="" alt="" />
              Controller-Frendly
            </a>
          </div>
        </CustomNav>
        <CustomNav title="Browse By Genre" variant="sidemenu__nav">
          <div>
            <a href="/">Fre to Play</a>
            <a href="/">Early Access</a>
            <a href="/">Action</a>
            <a href="/">Adventure</a>
            <a href="/">Casual</a>
            <a href="/">Indie</a>
            <a href="/">Massively Multiplayer</a>
            <a href="/">Racing</a>
            <a href="/">RPG</a>
            <a href="/">Simulation</a>
            <a href="/">Sports</a>
            <a href="/">Stratagy</a>
          </div>
        </CustomNav>
        <CustomNav title="Recently Viewed" variant="sidemenu__nav">
          <div>
            <a href="/">NBA 2K23</a>
          </div>
        </CustomNav>
      </div>
    </div>
  );
};

export default SideMenu;
