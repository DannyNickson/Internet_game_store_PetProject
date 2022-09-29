import React from "react";
import "../styles/pagesStyles/RegistrationPageStyles.css";
import { useState } from "react";


const Registration = (props) => {
  const [selected, setSelected] = useState(true);
  function changeSelected(event)
  {
    event.preventDefault();
    setSelected((prev)=>{
      return !prev;
    })
  }
  return (
    <div className="main__block">
      <div className={selected ? "login__container selected" : "login__container"}>
        <div className="login__title">SING IN</div>
        <div className="login__block">
          <div className="input__blocks">
            <div className="login__input">
              <div className="input__text">Sing in whith account name</div>
              <input type="text" />
            </div>
            <div className="password__input">
              <div className="input__text">Password</div>
              <input type="password" />
            </div>
            <div className="login__btn__submit">
              <button>Sing in</button>
            </div>
            <div className="error__text hide">
              Please check your password and acount name and try again.
            </div>
            <div className="help__btn">
              <a href="/" onClick={(e)=>{changeSelected(e)}}>I don`t have account</a>
            </div>
          </div>
        </div>
      </div>
      <div className={selected ? "registration__container " : "registration__container selected "}>
        <div className="login__title">REGISTRATION</div>
        <div className="login__block__registration">
          <div className="input__blocks">
            <div className="login__input">
              <div className="input__text">Account name</div>
              <input type="text" />
            </div>
            <div className="password__input">
              <div className="input__text">Email</div>
              <input type="text" />
            </div>
            <div className="password__input">
              <div className="input__text">Password</div>
              <input type="password" />
            </div>
            <div className="password__input">
              <div className="input__text">Repead password</div>
              <input type="password" />
            </div>
            <div className="error__text hide">
              Please check your password and acount name and try again.
            </div>
            <div className="login__btn__submit">
              <button>Registration</button>
            </div>
            <div className="help__btn">
              <a href="/" onClick={(e)=>{changeSelected(e)}}>Back to login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
