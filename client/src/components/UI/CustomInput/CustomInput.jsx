import React from "react";
import "./CustomInput.css";
const CustomInput = ({ isError, setNickname, typeOfInput, inputText, isBlue }) => {
  return (
    <div className={"input__block" + (isError ? " error" : " ")}>
      <div className={"input__text" + (isBlue? "__blue" : "")}>{inputText}</div>
      <input
        className={isError ? "error" : ""}
        type={typeOfInput}
        onChange={(e) => {
          setNickname(e.target.value);
        }}
      />
    </div>
  );
};

export default CustomInput;
