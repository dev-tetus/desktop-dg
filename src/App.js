import "./App.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Login } from "./pages/";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { toggleAuth } from "./redux/actions/index";
import axios from "./config/axios";

function App() {
  const dispatch = useDispatch();

  const checkSession = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "/auth/session",
      });
      if (response.status === 200) {
        dispatch(toggleAuth(response.data.id, response.data.username));
      }
    } catch (error) {
      if (error) console.log(error.response.data.message);
    }
  };
  useEffect(() => {
    window.addEventListener("load", checkSession());
    return () => {
      window.removeEventListener("load", checkSession());
    };
  });
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
