import React, { useEffect } from "react";
import CustomInput from "./UI/CustomInput/CustomInput";
import "../styles/App.css";
import { useState } from "react";
import CustomButton from "./UI/CustomButton/CustomButton";
import UserService from "../API/UsersService";

const Registration = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorVisible, setErrorVisible] = useState({ status: false, text: "" });
  const [users, setUsers] = useState([
    { id: 1, username: "MrDD", email: "puchkovdd@gmail.com" },
  ]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const allUsers = await UserService.getAll();
    setUsers([...allUsers]);
  }

  async function sendData(username, email, password) {
    if (!username || !email || !password) {
      setErrorVisible({ status: true, text: "Не задано поле" });
      return;
    }
    errorVisible.status
      ? setErrorVisible({ status: false, text: "" })
      : setErrorVisible({ status: false });
    const responese = await UserService.registrationUser({
      username,
      email,
      password,
    });
    setAllClear(users,responese.data)
  }

  function setAllClear(users, data) {
    setUsers([...users, data]);
    setEmail(" ");
    setPassword(" ");
    setUsername(" ");
  }

  return (
    <div className="conteiner">
      <div className={errorVisible.status ? " errorVisible active" : "hide"}>
        <h1 className="errorText">{errorVisible.text}</h1>
      </div>
      <div className="input__conteiner">
        <div className="input__text">Input your username:</div>
        <CustomInput
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="username"
        />
      </div>
      <div className="input__conteiner">
        <div className="input__text">Input your email:</div>
        <CustomInput
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="email"
        />
      </div>
      <div className="input__conteiner">
        <div className="input__text">Input your password:</div>
        <CustomInput
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password"
        />
      </div>
      <div className="button__container">
      <CustomButton
        onClick={() => {
          sendData(username, email, password);
        }}
      >
        Send
      </CustomButton>
      </div>
      <div className="user__container">
        {users.map((user) => (
          <div className="user__block" key={user.id}>
            <div className="user__title">{user.username}</div>
            <div className="user__email">{user.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Registration;
