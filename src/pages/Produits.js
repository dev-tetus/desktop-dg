import React, { useState } from "react";
import styled from "styled-components";
import { Modal, Product } from "../components/";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const Button = styled.button`
  cursor: pointer;
  margin: 2rem 0;
  width: 10%;
  height: 2rem;
  background: black;
  border-radius: 8px;
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: none;
  }
`;
const ProductListContainer = styled.div`
  width: 80%;
`;

export default function Produits() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Wrapper>
      <Button onClick={() => setOpenModal(true)}>Ajouter</Button>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />

      <ProductListContainer>
        <Product />
      </ProductListContainer>
    </Wrapper>
  );
}
