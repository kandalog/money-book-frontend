import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../contexts/UserProvider";
import { gestLogin, logout } from "../../helper/auth";

export const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (currentUser) {
    return (
      <SHeader>
        <Sinner>
          <Stitle>
            <Link to="/">MONEY-BOOK</Link>
          </Stitle>
          <Snav>
            <Slist>
              <Sitem>
                <Link onClick={(e) => logout(e, setCurrentUser, navigate)}>
                  ログアウト
                </Link>
              </Sitem>
            </Slist>
          </Snav>
        </Sinner>
      </SHeader>
    );
  } else {
    return (
      <SHeader>
        <Sinner>
          <Stitle>
            <Link to="/">MONEY-BOOK</Link>
          </Stitle>
          <Snav>
            <Slist>
              <Sitem>
                <Link to="/">ホーム</Link>
              </Sitem>
              <Sitem>
                <Link onClick={(e) => gestLogin(e, setCurrentUser, navigate)}>
                  ゲストログイン
                </Link>
              </Sitem>
              <Sitem>
                <Link to="/login">新規登録/ログイン</Link>
              </Sitem>
            </Slist>
          </Snav>
        </Sinner>
      </SHeader>
    );
  }
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
const Stitle = styled.h1`
  a {
    font-size: 24px;
    font-weight: bold;
  }
`;
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
    font-weight: bold;
  }
`;
