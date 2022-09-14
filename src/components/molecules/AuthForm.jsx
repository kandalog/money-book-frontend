import React from "react";
import styled from "styled-components";

import { FormInput } from "../atoms/FormInput";
import { SubmitButton } from "../atoms/SubmitButton";

export const AuthForm = () => {
  return (
    <SFormContainer>
      <Stitle>MONEY-BOOK</Stitle>
      <Sform>
        <FormInput text="名前" type="" onChange={() => console.log("")} />
        <FormInput
          text="メールアドレス"
          type=""
          onChange={() => console.log("")}
        />
        <FormInput text="パスワード" type="" onChange={() => console.log("")} />
        <SubmitButton />
      </Sform>
    </SFormContainer>
  );
};

const SFormContainer = styled.div`
  width: 500px;
  max-width: 100%;
  padding: 60px;
  margin: 100px auto 0;
  background-color: #fff;
  height: 500px;
  border-radius: 10px;
  box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);
`;
const Stitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
const Sform = styled.form``;
