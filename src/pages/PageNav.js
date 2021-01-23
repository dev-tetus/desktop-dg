import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from ".";
import logo from "../assets/svg/mon logo 1.png";
export default function PageNav() {
  return (
    <div>
      <img className="logo" src={logo} />
      <div className="glass">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  );
}
