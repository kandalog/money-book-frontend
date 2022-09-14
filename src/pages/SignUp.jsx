import React from "react";

import { AuthForm } from "../components/molecules/AuthForm";
import { Header } from "../components/molecules/Header";

import { FormInput } from "../components/atoms/FormInput";
import { SubmitButton } from "../components/atoms/SubmitButton";

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
      </AuthForm>
    </>
  );
};
