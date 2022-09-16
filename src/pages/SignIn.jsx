import axios from "axios";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { FormInput } from "../components/atoms/FormInput";
import { SubmitButton } from "../components/atoms/SubmitButton";
import { AuthForm } from "../components/molecules/AuthForm";
import { Header } from "../components/molecules/Header";
import { UserContext } from "../contexts/UserProvider";

import { login } from "../helper/auth";

export const SignIn = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();

  const navigate = useNavigate();

  const user = {
    email: email,
    password: password,
  };

  return (
    <>
      <Header />
      <StyledErrorMessage>{error}</StyledErrorMessage>
      <AuthForm text="ログイン">
        <Sform
          onSubmit={(e) => login(user, setCurrentUser, e, navigate, setError)}
        >
          <FormInput
            text="メールアドレス"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            text="パスワード"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton text="ログイン" />
        </Sform>
        <SFormLink>
          <Link to="/signup">新規登録はこちら</Link>
        </SFormLink>
      </AuthForm>
    </>
  );
};

const Sform = styled.form`
  margin-top: 50px;
`;

const SFormLink = styled.div`
  text-align: center;
  margin-top: 30px;

  a {
    color: #3f51b5;
    font-weight: bold;
  }
`;

const StyledErrorMessage = styled.div`
  background-color: #de6363;
  color: #fff;
  font-size: 20px;
  text-align: center;
`;
