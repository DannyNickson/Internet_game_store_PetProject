import React from "react";
import telegramLogo from "../../img/Telegram_logo.svg.webp";
import logo from "../../img/LOGO_5.png";
import classes from './Footer.module.css'
const Footer = () => {
  return (
    <footer>
      <div className={classes.footer__container}>
        <hr />
        <div className={classes.copyrights__container}>
          <div className={classes.copyrights_text}>I dont have any copyrights.</div>
          <div className={classes.copyrights_logo}>
            <img src={logo} alt="mini_logo" />
          </div>
        </div>
        <hr />
        <div className={classes.footer__menu}>
          <a href="/">About me</a><span>|</span>
          <a href="/">Jobs</a><span>|</span>
          <a href="/">MyShopWorks</a><span>|</span>
          <a href="/">Support</a><span>|</span>
          <div className={classes.contacts}>
            <div className={classes.contact_text}>Contact me:</div>
            <a href="https://telegram.me/danilpuchkov" className={classes.contact__link} target="_blank" rel="noopener noreferrer">
              <img src={telegramLogo} alt="telegram" className={classes.telegram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
