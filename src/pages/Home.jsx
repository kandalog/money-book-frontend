import React from "react";
import { Header } from "../components/molecules/Header";
import styled from "styled-components";

import background from "../images/saving.jpg";

export const Home = () => {
  return (
    <>
      <Header />
      <HomeImage>
        <HomeText>
          <HomeTitle>MONEY-BOOK</HomeTitle>
          <HomeSubTitle>毎日を記録しよう</HomeSubTitle>
        </HomeText>
      </HomeImage>
    </>
  );
};

const HomeImage = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  background: url(${background}) center center / cover;
`;

const HomeText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const HomeTitle = styled.p`
  font-size: 60px;
  font-weight: bold;
  letter-spacing: 0.15em;
  white-space: nowrap;
`;

const HomeSubTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
