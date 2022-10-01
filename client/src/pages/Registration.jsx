import React from "react";
import "../styles/pagesStyles/RegistrationPageStyles.css";
import { useState } from "react";

const Registration = (props) => {
  const [selected, setSelected] = useState(true);
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordToCompare, setPasswordToCompare] = useState("");
  const [isError, setIsError] = useState(false);
  function changeSelected(event) {
    event.preventDefault();
    setIsError(false);
    setNickname('');
    setPassword("")
    setPasswordToCompare("")
    setEmail('');
    setSelected((prev) => {
      return !prev;
    });
  }
  async function submitForm(e) {
    e.preventDefault();
    if (!passwordToCompare) {
      if (!nickname && !password) {
        setIsError(true);
        return;
      }
      console.log("send to auth");
    } else {
      if (!email || !nickname || !password) {
        setIsError(true);
        return;
      }
      console.log("send for registration");
    }
  }

  return (
    <div className="main__block">
      <div
        className={selected ? "login__container selected" : "login__container"}
      >
        <div className="login__title">SING IN</div>
        <form
          action="/"
          onSubmit={(e) => {
            submitForm(e);
          }}
        >
          <div className="login__block">
            <div className="input__blocks">
              <div className={isError ? "login__input error" : "login__input"}>
                <div className="input__text">Sing in whith account name</div>
                <input
                  type="text"
                  onChange={(e) => {
                    setNickname(e.target.value);
                  }}
                />
              </div>
              <div className={isError? "password__input error":"password__input"}>
                <div className="input__text">Password</div>
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="login__btn__submit">
                <button type="submit">Sing in</button>
              </div>
              {isError && (
                <div className="error__text">
                  Please check your password and acount name and try again.
                </div>
              )}
              <div className="help__btn">
                <a
                  href="/"
                  onClick={(e) => {
                    changeSelected(e);
                  }}
                >
                  I don`t have account
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div
        className={
          selected
            ? "registration__container "
            : "registration__container selected "
        }
      >
        <div className="login__title">REGISTRATION</div>
        <div className="login__block__registration">
          <div className="input__blocks">
            <div className="login__input">
              <div className="input__text">Account name</div>
              <input
                type="text"
                onChange={(e) => {
                  setNickname(e.target.value);
                }}
              />
            </div>
            <div className="password__input">
              <div className="input__text">Email</div>
              <input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="password__input">
              <div className="input__text">Password</div>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="password__input">
              <div className="input__text">Repead password</div>
              <input
                type="password"
                onChange={(e) => {
                  setPasswordToCompare(e.target.value);
                }}
              />
            </div>
            <div className="error__text hide">
              Please check your password and acount name and try again.
            </div>
            <div className="login__btn__submit">
              <button>Registration</button>
            </div>
            <div className="help__btn">
              <a
                href="/"
                onClick={(e) => {
                  changeSelected(e);
                }}
              >
                Back to login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
