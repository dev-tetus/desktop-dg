import React from "react";
import styled from "styled-components";

import { Switch } from ".";

const ProductWrapper = styled.div`
  padding: 0;
  height: 232px;
  width: 443px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    105.34deg,
    rgba(242, 243, 255, 0.192) 0%,
    rgba(255, 255, 255, 0.4) 0.01%,
    rgba(255, 255, 255, 0.4) 100%
  );
  backdrop-filter: blur(23px);
  border: 1px solid white;
  border-color: transparent;
  border-radius: 10px;
`;
const Title = styled.h3`
  margin: 0;
  padding: 0px;
  height: 25%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;
const ContentWrapper = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  margin-top: 0px;
  margin-left: 20px;
  height: 140px;
  width: 140px;
  /* border-radius: 50%; */
`;
const Details = styled.ul`
  height: 80%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;
const ListElement = styled.li`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
`;
const Key = styled.p`
  width: 50%;
`;
const Value = styled.p``;

export default function Product(props) {
  return (
    <ProductWrapper>
      <Title>Bowl</Title>
      <ContentWrapper>
        <Image />
        <Details>
          <ListElement>
            <Key>Matériel:</Key>
            <Value>Raku</Value>
          </ListElement>
          <ListElement>
            <Key>Prix:</Key>
            <Value>15€</Value>
          </ListElement>
          <ListElement>
            <Key>Stock:</Key>
            <Value>8</Value>
          </ListElement>
          <ListElement>
            <Key>Actif:</Key>
            <Value>
              <Switch />
            </Value>
          </ListElement>
        </Details>
      </ContentWrapper>
    </ProductWrapper>
  );
}
