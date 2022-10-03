import React from "react";
import telegramLogo from "../img/Telegram_logo.svg.webp";
import logo from "../img/LOGO.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="copyrights__container">
          <div className="copyrights_text">I dont have any copyrights.</div>
          <div className="copyrights_logo">
            <img src={logo} alt="mini_logo" />
          </div>
        </div>
        <div className="footer__menu">
          <a href="/">About me</a>
          <a href="/">Jobs</a>
          <a href="/">MyShopWorks</a>
          <a href="/">Support</a>
          <div className="contacts">
            <div className="contact_text">Contact me:</div>
            <a href="https://telegram.me/danilpuchkov" target="_blank" rel="noopener noreferrer">
              <img src={telegramLogo} alt="telegram" className="telegram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
