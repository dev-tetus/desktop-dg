import React, { useState } from "react";
import styled from "styled-components";

export default function Switch(props) {
  const [active, setActive] = useState(false);
  return (
    <Wrapper
      onClick={() => {
        setActive(!active);
      }}
      active={active}
    />
  );
}

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 45px;
  height: 25px;
  border-radius: 20px 20px 20px 20px;
  background: ${({ active }) => (!active ? "#ef3900" : "#00D816")};
  border: 1px solid #000000;
  transition: background ease-in-out 0.7s;
  &:after {
    margin-top: 0px;
    content: "";
    position: absolute;
    border: 1px solid green;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #f3f3f3;
    border: 1px solid rgba(0, 0, 0, 0.47);
    top: -2px;
    right: -2px;

    transform: translateX(${({ active }) => (active ? "-75%" : null)});
    transition: transform ease-in-out 0.5s;
  }
`;
