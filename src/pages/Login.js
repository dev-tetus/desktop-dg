import "../styles/login.scss";

import React, { useEffect, useState } from "react";
import axios from "../config/axios";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuth } from "../redux/actions/toogleAuth";
const keys = require("../keys/index");

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  var isLogged = useSelector((state) => state.auth); //! Redux state for Log In
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false); //*Local state for Log In

  async function sendLogin() {
    try {
      console.log(loggedIn);
      const response = await axios({
        method: "post",
        url: "/auth/login",
        data: {
          username,
          password,
        },
      });
      //TODO: Dispatch action to change auth in store

      console.log(response.data);
      setLoggedIn(true);
    } catch (error) {
      if (error) console.log(error);
    }
  }
  const redirect = () => {
    if (loggedIn) {
      return <Redirect to="/" />;
    }
  };
  // useEffect(() => {
  //   return redirect();
  // }, [isLogged]);

  //*Check if already loggedIn
  useEffect(async () => {
    try {
      const response = await axios({
        method: "get",
        url: "/auth/session",
      });
      if (response.status === 200) {
        console.log(response.data);
        setLoggedIn(true);
      }
    } catch (error) {
      if (error) console.log(error.message);
    }
  }, []);
  //*redirect home if logged in
  return (
    <div className="page-container">
      {/* {redirect()} */}
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
        {loggedIn ? <h1>User is logged in</h1> : null}
      </div>
    </div>
  );
}

export default Login;
