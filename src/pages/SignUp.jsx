import React, { useContext } from "react";
import styled from "styled-components";

import { AuthForm } from "../components/molecules/AuthForm";
import { Header } from "../components/molecules/Header";

import { FormInput } from "../components/atoms/FormInput";
import { SubmitButton } from "../components/atoms/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../contexts/UserProvider";
import { enroll } from "../helper/auth";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [error, setError] = useState();

  const user = {
    email: email,
    password: password,
  };

  return (
    <>
      <Header />
      <StyledErrorMessage>{error}</StyledErrorMessage>
      <AuthForm text="新規登録">
        <form
          onSubmit={(e) => enroll(user, setCurrentUser, e, navigate, setError)}
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
          <SubmitButton text="登録" />
        </form>
        <SFormLink>
          <Link to="/login">ログインはこちら</Link>
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

const StyledErrorMessage = styled.div`
  background-color: #de6363;
  color: #fff;
  font-size: 20px;
  text-align: center;
`;
