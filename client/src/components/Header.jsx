import React from "react";
import "../styles/main.css";
import logo_img from "../img/LOGO.png";
import { useState } from "react";
const Header = () => {
  const [languageCard, setLanguageCard] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("language");
  function setLanguageLabel(event) {
    event.preventDefault();
    setCurrentLanguage(event.target.text);
    setLanguageCard(false);
  }
  return (
    <header>
      <div className="header__container">
        <div className="top__menu">
          <a href="/registration" className="login__link">
            login |
          </a>
          <div className="language">
            <div
              className="language__select"
              onClick={() => {
                setLanguageCard((prev) => {
                  return !prev;
                });
              }}
            >
              {currentLanguage}
            </div>
            <div
              className={"language__list" + (languageCard ? " opened" : " ")}
            >
              <a
                href="/"
                value="мова"
                data-value="UA"
                onClick={(e) => setLanguageLabel(e)}
              >
                мова
              </a>
              <a
                href="/"
                value="language"
                data-value="UK"
                onClick={(e) => setLanguageLabel(e)}
              >
                language
              </a>
              <a
                href="/"
                value="langue"
                data-value="FR"
                onClick={(e) => setLanguageLabel(e)}
              >
                langue
              </a>
            </div>
          </div>
        </div>
        <div className="low__menu">
          <div className="logo">
            <a href="http://localhost:3000/">
              <img src={logo_img} alt="LOGO" />
            </a>
          </div>
          <div className="nav__bar">
            <div className="subnav">
              <a href="/">Store</a>
              <div className="opened__list">
                <a href="/">Home</a>
                <a href="/discovery">Discovery queue</a>
                <a href="/whishlist">Wishlist</a>
                <a href="/news">News</a>
              </div>
            </div>
            <div className="subnav">
              <a href="/login">Comunity</a>
              <div className="opened__list">
                <a href="/community/">Home</a>
                <a href="/discussions">Discussions</a>
                <a href="/workshop">Workshop</a>
                <a href="/marker">Market</a>
              </div>
            </div>
            <a href="/game">About</a>
            <a href="/admin">Support</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
