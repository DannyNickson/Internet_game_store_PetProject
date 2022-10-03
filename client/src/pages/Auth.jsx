import React from "react";
import { REGISTRATION_ROUTE } from "./../utils/consts";
import { useState } from "react";
import "../styles/pagesStyles/RegistrationPageStyles.css";
import CustomInput from "./../components/UI/CustomInput/CustomInput";

const Auth = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  async function submitForm(e) {
    e.preventDefault();
    console.log(!password);
    if (!nickname || !password) {
      setIsError(true);
      return;
    }
    console.log("send to auth");
    setIsError(false);
  }
  return (
    <div className="main__block">
      <div className="login__container selected">
        <div className="login__title">SING IN</div>
        <form
          action="/"
          onSubmit={(e) => {
            submitForm(e);
          }}
        >
          <div className="login__block">
            <div className="input__blocks">
              <CustomInput
                isError={isError}
                setNickname={setNickname}
                typeOfInput={"text"}
                inputText={"Sing in whith account name"}
                isBlue={true}
              />
              <CustomInput
                isError={isError}
                setNickname={setPassword}
                typeOfInput={"password"}
                inputText={"Password"}
                isBlue={false}
              />
              <div className="login__btn__submit">
                <button type="submit">Sing in</button>
              </div>
              {isError && (
                <div className="error__text">
                  Please check your password and acount name and try again.
                </div>
              )}
              <div className="help__btn">
                <a href={REGISTRATION_ROUTE}>I don`t have account</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
