import React from "react";
import styled from "styled-components";

export const FormInput = ({ text, type, onChange }) => {
  return (
    <SFormInputRow>
      <Slabel htmlFor="">{text}</Slabel>
      <Sinput type={type} onChange={onChange} />
    </SFormInputRow>
  );
};

const SFormInputRow = styled.div`
  margin-top: 20px;
`;
const Slabel = styled.label`
  font-size: 12px;
`;
const Sinput = styled.input`
  border: 1px solid #9c9c9c;
  width: 100%;
  font-family: inherit;
  outline: none;
  padding: 10px;
  box-shadow: none;
  background-color: transparent;
  border-radius: 5px;
`;
