import "./App.scss";
import "./styles/home.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "./config/axios";
import { toggleAuth } from "./redux/actions/index";

import { Login, PageNav } from "./pages/";

function App() {
  const isLogged = useSelector((state) => state.authentication.isAuth);
  const dispatch = useDispatch();

  //TODO: Cache session in localStorage or something while it's active
  //* check if session active
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

  //*every time page refresh we check session to persist in redux store
  useEffect(() => {
    window.addEventListener("load", checkSession());
    return () => {
      window.removeEventListener("load", checkSession());
    };
  });

  return (
    <Router className="router-wrapper">
      <Switch>
        {isLogged ? (
          <Route path="/" component={PageNav} />
        ) : (
          <Route exact path="/" component={Login} />
        )}

        <Route path="*" render={() => <h1>Not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
