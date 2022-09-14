import React from "react";
import styled from "styled-components";

export const SubmitButton = ({ text }) => {
  return <Sbutton type="submit">{text}</Sbutton>;
};

const Sbutton = styled.button`
  background-color: #3f51b5;
  border: none;
  color: #fff;
  padding: 10px 80px;
  border-radius: 10px 100px / 120px;
  display: block;
  margin: 40px auto 0;
  cursor: pointer;
  transition: 0.3s;

  &:active {
    transform: translateY(5px);
  }
`;
