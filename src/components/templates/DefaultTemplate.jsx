import React from "react";
import { Header } from "../molecules/Header";

export const DefaultTemplate = (props) => {
  // このcomponentを使用するとブラウザがエラーを吐く
  const { children } = props;
  return (
    <DefaultTemplate>
      <Header />
      {children}
    </DefaultTemplate>
  );
};
