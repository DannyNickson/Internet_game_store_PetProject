import React from "react";
import "../styles/pagesStyles/RegistrationPageStyles.css";
import { useState } from "react";
import { LOGIN_ROUTE } from "../utils/consts";
import CustomInput from './../components/UI/CustomInput/CustomInput';

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
    if (password !== passwordToCompare) {
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
              <CustomInput isError={isError} setNickname={setNickname} typeOfInput={"text"} inputText={"Account name"} isBlue={true}/>
              <CustomInput isError={isError} setNickname={setEmail} typeOfInput={"text"} inputText={"Email"} isBlue={false}/>
              <CustomInput isError={isError} setNickname={setPassword} typeOfInput={"password"} inputText={"Password"} isBlue={false}/>
              <CustomInput isError={isError} setNickname={setPasswordToCompare} typeOfInput={"password"} inputText={"Repead password"} isBlue={false}/>
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
