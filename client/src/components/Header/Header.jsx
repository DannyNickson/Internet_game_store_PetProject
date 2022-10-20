import React from "react";
import "../../styles/main.css";
import logo_img from "../../img/LOGO_5.png";
import { useState } from "react";
import { LOGIN_ROUTE } from "../../utils/consts";
import classes from "./Header.module.css";
import CustomNav from "../UI/CustomNav/CustomNav";
const Header = () => {
  const [currentLanguage, setCurrentLanguage] = useState("laguage");
  const [active, setActive] = useState(false);
  return (
    <header>
      <div className={classes.header__container}>
        <div className={classes.top__menu}>
          <a href={LOGIN_ROUTE}>login |</a>
          <div className={classes.language__container}>
            <div className={classes.selected__language}>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setActive((prev) => {
                    return !prev;
                  });
                }}
              >
                {currentLanguage}
              </a>
              <div
                className={
                  classes["select__language" + (active ? "__opened" : "")]
                }
              >
                <span
                  onClick={(e) => {
                    setCurrentLanguage(e.target.innerText);
                    setActive(false);
                  }}
                >
                  мова
                </span>
                <span
                  onClick={(e) => {
                    setCurrentLanguage(e.target.innerText);
                    setActive(false);
                  }}
                >
                  langue
                </span>
                <span
                  onClick={(e) => {
                    setCurrentLanguage(e.target.innerText);
                    setActive(false);
                  }}
                >
                  language
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.lower__menu}>
          <div className={classes.logo}>
            <img src={logo_img} alt="logo" />
          </div>
          <div className={classes.low__menu__nav__container}>
            <CustomNav title="Store" titleLink="/" variant="header__menu">
              <div>
                <a href="/">Home</a>
                <a href="/discovery">Discovery queue</a>
                <a href="/whishlist">Wishlist</a>
                <a href="/news">News</a>
              </div>
            </CustomNav>
            <CustomNav title="Comunity" titleLink="/" variant="header__menu">
              <div>
                <a href="/community/">Home</a>
                <a href="/discussions">Discussions</a>
                <a href="/workshop">Workshop</a>
                <a href="/marker">Market</a>
              </div>
            </CustomNav>
            <CustomNav title="About" titleLink="/" variant="header__menu" />
            <CustomNav title="Support" titleLink="/" variant="header__menu" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
