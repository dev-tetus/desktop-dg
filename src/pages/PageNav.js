import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import { Home, Produits } from ".";
import logo from "../assets/svg/mon logo 1.png";
import { Nav } from "../components";

const Glass = styled.div`
  position: relative;
  width: 1437px;
  height: 784px;
  margin-left: 242px;
  margin-top: 1rem;

  background: linear-gradient(
    149.52deg,
    rgba(240, 219, 234, 0.55) 1.07%,
    rgba(234, 213, 236, 0.1045) 100.03%
  );
  backdrop-filter: blur(105px);

  border-radius: 8px;
  border: 3px solid;

  border-image-source: linear-gradient(
    150.75deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.04) 102.15%
  );
  &::after {
    position: absolute;
    width: 15%;
    height: 100%;
    top: 0px;
    right: 0px;
    content: "";
    transform: translateX(100%);
    z-index: 1001;
    background: linear-gradient(to bottom, #2aa9da 0%, #2f8bd8 100%);
  }
`;

export default function PageNav() {
  return (
    <div>
      <Link to="/home">
        <img className="logo" src={logo} />
      </Link>

      <Switch>
        <Glass>
          <Nav />
          <Route exact path="/home" component={Home} />
          <Route exact path="/produits" component={Produits} />
        </Glass>
      </Switch>
    </div>
  );
}
