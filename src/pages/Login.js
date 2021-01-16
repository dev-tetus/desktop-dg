import "../styles/login.scss";
import React, { useState } from "react";
import axios from "../config/axios";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuth } from "../redux/actions/toggleAuth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isLogged = useSelector((state) => state.authentication.isAuth);

  const dispatch = useDispatch();

  async function sendLogin(e) {
    try {
      const response = await axios({
        method: "post",
        url: "/auth/login",
        data: {
          username,
          password,
        },
      });
      dispatch(toggleAuth(response.data.id, response.data.username));
    } catch (error) {
      if (error) console.log(error.response.data.message);
    }
  }

  //*Redirect home if logged in
  const redirect = () => {
    if (isLogged) {
      return <Redirect to="/" />;
    }
  };

  return (
    <div className="page-container">
      {redirect()}
      <h2>D.G</h2>
      <div className="form-box">
        <p className="form-box-text">
          Commence une session pour avoir accès aux fonctionnalités
        </p>
        <img src="#" alt="icono candado" />
        <form className="login-form">
          <div className="login-form-container">
            <div className="login-form-container-labels">
              <span id="username-label">Username: </span>
              <span id="password-label">Password:</span>
            </div>
            <div className="login-form-container-inputs">
              <input
                id="username-input"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                id="password-input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button onClick={sendLogin} className="login-form-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
