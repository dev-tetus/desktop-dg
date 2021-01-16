import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import axios from "../config/axios";

function Home() {
  const isLogged= useSelector((state) => state.authentication.isAuth);

  //*check if logged in
  const redirectLogin = () => {
    if (!isLogged) {
      return <Redirect to="/login" />;
    }
  };

  return (
    <div>
      {redirectLogin()}
      <h1>This is home!</h1>
    </div>
  );
}

export default Home;
