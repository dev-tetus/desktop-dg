import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import logo from "../assets/svg/mon logo 1.png";
import { Nav } from "../components/index";
import "../styles/home.scss";

function Home() {
  const isLogged = useSelector((state) => state.authentication.isAuth);

  //*check if logged in
  const redirectLogin = () => {
    if (!isLogged) {
      return <Redirect to="/login" />;
    }
  };

  return (
    <div>
      {redirectLogin()}
      <img className="logo" src={logo} />
      <div className="glass">
        <Nav className="nav" />
      </div>
    </div>
  );
}

export default Home;
