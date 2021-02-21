import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Burger from "../assets/icons/Burger";

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
          <Burger onClick={() => setIsOpen(!isOpen)} />
        </BurgerBox>
      </Box>
      <OpenNav id='navOpen' isOpen={isOpen}>
        <NavList>
          <ListElement isOpen={isOpen}>
            <LinkStyled id='link' to='/produits'>
              Produits
            </LinkStyled>
          </ListElement>
          <ListElement isOpen={isOpen}>
            <LinkStyled to='/utilisateurs'>Utilisateurs</LinkStyled>
          </ListElement>
          <ListElement isOpen={isOpen}>
            <LinkStyled to='/commandes'>Commandes</LinkStyled>
          </ListElement>
          <ListElement isOpen={isOpen}>
            <LinkStyled to='/parametres'>Paramètres</LinkStyled>
          </ListElement>
        </NavList>
      </OpenNav>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
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
  margin-left: 15rem;
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

  display: flex;
  justify-content: center;
  align-items: center;
`;
const OpenNav = styled.div`
  background: rgba(255, 255, 255, 0.1);
  height: calc(100% - 5rem);
  position: absolute;
  right: 0px;
  width: 17%;
  top: 5rem;
  transform: ${({ isOpen }) =>
    isOpen ? "translate(0%, 0%)" : "translate(100%, 0%)"};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  transition: transform 0.5s, opacity 2s;
  z-index: 10;
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
  position: relative;
  transform: ${({ isOpen }) =>
    isOpen ? "translate(0%, 0%)" : "translate(0%, 150%)"};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  transition: ${({ isOpen }) =>
    isOpen ? "transform 1.5s, opacity 2.5s" : "all 0s"};
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkStyled = styled(Link)`
  z-index: 2;
  cursor: pointer;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
`;
