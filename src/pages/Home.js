import { logDOM } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import axios from "../config/axios";

function Home() {
  const [loggedIn, setLoggedIn] = useState(false); //* Local state for auth
  //TODO Redux state for auth
  useEffect(async () => {
    try {
      const response = await axios({
        method: "get",
        url: "/auth/session",
      });
      setLoggedIn(true);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  //*check if logged in
  const redirectLogin = () => {
    if (!loggedIn) {
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
