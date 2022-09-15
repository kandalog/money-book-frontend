import React from "react";
import styled from "styled-components";

import { AuthForm } from "../components/molecules/AuthForm";
import { Header } from "../components/molecules/Header";

import { FormInput } from "../components/atoms/FormInput";
import { SubmitButton } from "../components/atoms/SubmitButton";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <>
      <Header />
      <AuthForm text="新規登録">
        <form>
          <FormInput text="名前" type="text" onChange={() => console.log("")} />
          <FormInput
            text="メールアドレス"
            type="email"
            onChange={() => console.log("")}
          />
          <FormInput
            text="パスワード"
            type="password"
            onChange={() => console.log("")}
          />
          <SubmitButton text="登録" />
        </form>
        <SFormLink>
          <Link to="/login">新規登録はこちら</Link>
        </SFormLink>
      </AuthForm>
    </>
  );
};

const SFormLink = styled.div`
  text-align: center;
  margin-top: 30px;

  a {
    color: #3f51b5;
    font-weight: bold;
  }
`;
