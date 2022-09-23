import React from "react";
import styled from "styled-components";

export const AuthForm = ({ children, text }) => {
  return (
    <SFormContainer>
      <Stitle>{text}</Stitle>
      {children}
    </SFormContainer>
  );
};

const SFormContainer = styled.div`
  width: 400px;
  max-width: 100%;
  padding: 60px;
  margin: 100px auto 0;
  background-color: #fff;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;
const Stitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
