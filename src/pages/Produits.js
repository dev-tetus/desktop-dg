import React from "react";
import styled from "styled-components";
import { Product } from "../components/";

const Wrapper = styled.div`
  min-height: 100%;
`;

export default function Produits() {
  return (
    <Wrapper>
      <Product />
    </Wrapper>
  );
}
