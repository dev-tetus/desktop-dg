import React, { useState } from "react";
import styled from "styled-components";

import axios from "../config/axios";

const Wrapper = styled.div`
  border: 1px solid red;
  position: absolute;
  width: 70%;
  height: 70%;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  z-index: 9;
  background-color: #25dbdb;
`;
const CloseButton = styled.button`
  border: 1px solid purple;
  height: 20px;
  width: 20px;
`;

export default function Modal({ isOpen, onClose, children }) {
  const [file, setFile] = useState([]);
  const [name, setName] = useState("");
  const [material, setMaterial] = useState("");
  const [price, setPrice] = useState(0);

  const selectedFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("material", material);
    data.append("file", file);

    await axios({
      url: "/products/uploadImage",
      method: "post",
      data: data,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(JSON.parse(err).messageW));
  };

  return isOpen ? (
    <Wrapper>
      <CloseButton onClick={onClose}></CloseButton>
      <form>
        <div className='data-row'>
          <label>Name:</label>
          <input type='text' onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='data-row'>
          <label>Matériel:</label>
          <input type='text' onChange={(e) => setMaterial(e.target.value)} />
        </div>
        <div className='data-row'>
          <label>Price:</label>
          <input type='number' onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className='data-row'>
          <label>File:</label>
          <input type='file' name='file' onChange={selectedFile} />
        </div>

        <button onClick={handleSubmit}>Submit!</button>
      </form>
    </Wrapper>
  ) : null;
}
