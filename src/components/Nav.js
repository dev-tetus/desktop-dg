import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

//TODO PSEUDO-CLASS :HOVER LINKS

const currentDate = new Date();
export default function Nav() {
  const username = useSelector((state) => state.authentication.username);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Box style={{ fontFamily: "Poppins, Sans-Serif", color: "white" }}>
        <DateBox>
          <p>{currentDate.toLocaleDateString()}</p>
        </DateBox>
        <Text>
          <p>Bonjour, {username}</p>
        </Text>
        <BurgerBox>
          <p onClick={() => setIsOpen(!isOpen)}>Burger</p>
        </BurgerBox>
      </Box>
      <OpenNav id="navOpen" isOpen={isOpen}>
        <NavList>
          <ListElement isOpen={isOpen}>
            <Link id="link" to="/produits">
              Produits
            </Link>
          </ListElement>
          <ListElement isOpen={isOpen}>
            <Link to="/utilisateurs">Utilisateurs</Link>
          </ListElement>
          <ListElement isOpen={isOpen}>
            <Link to="/commandes">Commandes</Link>
          </ListElement>
          <ListElement isOpen={isOpen}>
            <Link to="/parametres">Paramètres</Link>
          </ListElement>
        </NavList>
      </OpenNav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  background: rgba(255, 255, 255, 0.1);
`;
const Text = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  margin-left: 8rem;
  height: 100%;
  width: 12rem;
  align-items: center;
`;
const DateBox = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding-left: 30px;
`;
const BurgerBox = styled.div`
  width: 10%;
  height: 100%;
  cursor: pointer;
`;
const OpenNav = styled.div`
  background: rgba(255, 255, 255, 0.1);
  height: calc(100% - 5rem);
  position: absolute;
  right: 0px;
  width: 15%;
  top: 5rem;
  transform: ${({ isOpen }) =>
    isOpen ? "translate(0%, 0%)" : "translate(100%, 0%)"};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  transition: transform 0.5s, opacity 2s;
`;

const NavList = styled.ul`
  font-family: "Poppins", Sans-serif;
  font-size: 1rem;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

const ListElement = styled.li`
  transform: ${({ isOpen }) =>
    isOpen ? "translate(0%, 0%)" : "translate(0%, 100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  transition: ${({ isOpen }) =>
    isOpen ? "transform .8s, opacity .6s" : "all 0s"};
`;