import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <Sinner>
        <Stitle>MONEY-BOOK</Stitle>
        <Snav>
          <Slist>
            <Sitem>
              <Link>ホーム</Link>
            </Sitem>
            <Sitem>
              <Link>ゲストログイン</Link>
            </Sitem>
            <Sitem>
              <Link>新規登録/ログイン</Link>
            </Sitem>
          </Slist>
        </Snav>
      </Sinner>
    </SHeader>
  );
};

const SHeader = styled.header`
  height: 80px;
  background-color: #3f51b5;
  color: #fff;

  a {
    color: #fff;
  }
`;
const Sinner = styled.div`
  width: 1200px;
  max-width: 100%;
  height: 80px;
  margin: 0 auto;
  height: inherit;
  display: flex;
  align-items: center;
`;
const Stitle = styled.h1``;
const Snav = styled.nav`
  margin-left: auto;
`;
const Slist = styled.ul`
  display: flex;
`;
const Sitem = styled.li`
  & + & {
    margin-left: 20px;
  }
  a {
    line-height: 80px;
  }
`;
