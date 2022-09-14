import React from "react";
import styled from "styled-components";

export const FormInput = ({ text, type, value, onChange }) => {
  return (
    <SFormInputRow>
      <Slabel htmlFor="">{text}</Slabel>
      <Sinput type={type} onChange={onChange} value={value} />
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
  font-size: 16px;
  letter-spacing: 0.05em;
  padding: 10px;
  box-shadow: none;
  background-color: transparent;
`;
