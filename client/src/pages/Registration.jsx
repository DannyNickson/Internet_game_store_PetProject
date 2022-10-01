import React from "react";
import "../styles/pagesStyles/RegistrationPageStyles.css";
import { useState } from "react";
import { LOGIN_ROUTE } from "../utils/consts";

const Registration = (props) => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordToCompare, setPasswordToCompare] = useState("");
  const [isError, setIsError] = useState(false);

  async function submitForm(e) {
    e.preventDefault();
    if (!email || !nickname || !password || !passwordToCompare) {
      setIsError(true);
      return;
    }
    if (password != passwordToCompare) {
      setIsError(true);
      return;
    }
    console.log("send for registration");
    setIsError(false);
  }

  return (
    <div className="main__block">
      <form
        action="/"
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <div className={"registration__container selected "}>
          <div className="login__title">REGISTRATION</div>
          <div className="login__block__registration">
            <div className="input__blocks">
              <div className={"login__input " + (isError ? "error" : " ")}>
                <div className="input__text">Account name</div>
                <input
                  type="text"
                  onChange={(e) => {
                    setNickname(e.target.value);
                  }}
                />
              </div>
              <div className={"password__input " + (isError ? "error" : " ")}>
                <div className="input__text">Email</div>
                <input
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className={"password__input " + (isError ? "error" : " ")}>
                <div className="input__text">Password</div>
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className={"password__input " + (isError ? "error" : " ")}>
                <div className="input__text">Repead password</div>
                <input
                  type="password"
                  onChange={(e) => {
                    setPasswordToCompare(e.target.value);
                  }}
                />
              </div>
              <div className={"error__text " + (isError ? " " : "hide")}>
                Please check your password and acount name and try again.
              </div>
              <div className="login__btn__submit">
                <button type="submit">Registration</button>
              </div>
              <div className="help__btn">
                <a href={LOGIN_ROUTE}>Back to login</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
