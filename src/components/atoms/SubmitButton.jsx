import React from "react";
import styled from "styled-components";

export const SubmitButton = () => {
  return <Sbutton type="submit">登録</Sbutton>;
};

const Sbutton = styled.button`
  background-color: #3f51b5;
  border: none;
  color: #fff;
  padding: 10px 80px;
  border-radius: 5px;
  display: block;
  margin: 40px auto 0;
  cursor: pointer;
  transition: 0.3s;

  &:active {
    transform: translateY(5px);
  }
`;
