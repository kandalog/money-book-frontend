import React, { useEffect, useState } from "react";
import { Header } from "../components/molecules/Header";

// import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";
import styled from "styled-components";

import background from "../images/start.jpg";
import axios from "axios";

export const Money = () => {
  const { currentUser } = useContext(UserContext);
  // console.log("money", currentUser)
  const [listMonth, setListMonth] = useState();
  const [incomeList, setIncomList] = useState();
  const [output, setOutputList] = useState();

  // 収支 支出ログに関するstate

  // 日付
  const d = new Date();
  const year = d.getFullYear();
  const month = ("0" + (d.getMonth() + 1)).slice(-2);
  const day = ("0" + d.getDate()).slice(-2);
  const today = `${year}-${month}-${day}`;

  const [radio, setRadio] = useState(false);
  const [memo, setMemo] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");

  ///////////////// 関数 /////////////

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: 1,
      amount: amount,
      date: today,
      memo: memo,
      bool: radio,
    };
    try {
      const post = await axios.post("/money", newPost);
      console.log(post);
      setError("");
      setMemo("");
      setAmount(0);
    } catch (err) {
      setError(err.response.data.msg);
      console.log(err.response.data.msg);
    }
  };

  // 収支を全て取得する
  useEffect(() => {
    const getIncome = async () => {
      const data = {
        date: "2022-09-11",
        userId: 1,
      };

      try {
        const res = await axios.post("/money/month", data);
        console.log(res.data);
        setIncomList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getIncome();
  }, [currentUser]);

  return (
    <>
      <Header />
      <MoneyTopImg>
        <MoneyTopInner>
          <Sdiv>
            <TopList>
              <TopItem className="left">前の月</TopItem>
              <TopItem className="center">2021年5月15日</TopItem>
              <TopItem className="right">次の月</TopItem>
            </TopList>
          </Sdiv>
          <Sdiv className="second">
            <Sdiv>
              <Balance>8000円</Balance>
            </Sdiv>
          </Sdiv>
          <Sdiv className="third">
            <Sdiv>
              <BottomList>
                <BottomItem className="left">
                  <BottomItemLabel>収入</BottomItemLabel>
                  <BottomItemYen>
                    +50000<span>円</span>
                  </BottomItemYen>
                </BottomItem>
                <BottomItem className="right">
                  <BottomItemLabel>支出</BottomItemLabel>
                  <BottomItemYen>
                    -20000<span>円</span>
                  </BottomItemYen>
                </BottomItem>
              </BottomList>
            </Sdiv>
          </Sdiv>
        </MoneyTopInner>
      </MoneyTopImg>
      <StyledErrorMessage>{error}</StyledErrorMessage>

      <MoneyEnrollArea>
        <form onSubmit={handleSubmit}>
          <EnrollInner>
            <RadioWrap>
              <RadioLabel>
                <RadioInput
                  value="支出"
                  name="get"
                  type="radio"
                  onChange={() => setRadio(false)}
                  required
                  checked
                />
                <RadioParts className="radio-part">支出</RadioParts>
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  value="収入"
                  name="get"
                  type="radio"
                  onChange={() => setRadio(true)}
                  required
                />
                <RadioParts className="radio-part">収入</RadioParts>
              </RadioLabel>
            </RadioWrap>
            <Sdiv>
              <ContentsUl>
                <span>内容</span>
                <input
                  type="text"
                  onChange={(e) => setMemo(e.target.value)}
                  value={memo}
                />
              </ContentsUl>
            </Sdiv>
            <Sdiv>
              <MoneyUl>
                <span>金額</span>
                <input
                  type="number"
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                  placeholder="半角数字"
                />
                <span className="parts">円</span>
              </MoneyUl>
            </Sdiv>
            <Sdiv>
              <Sbutton>追加</Sbutton>
            </Sdiv>
          </EnrollInner>
        </form>
      </MoneyEnrollArea>
      <ListArea>
        <ListAreaInner>
          <ListLeft>
            <ListAreaTitle>収入</ListAreaTitle>
            <ListAreaDl>
              {incomeList &&
                incomeList.map((income) => (
                  <ListAreaRow key={income.id}>
                    <ListAreaDt>{income.memo}</ListAreaDt>
                    <ListAreaDd className="left">
                      {income.amount}
                      <span>円</span>
                    </ListAreaDd>
                  </ListAreaRow>
                ))}
            </ListAreaDl>
          </ListLeft>
          <ListRight>
            <ListAreaTitle>支出</ListAreaTitle>
            <ListAreaDl>
              <ListAreaRow>
                <ListAreaDt>収入</ListAreaDt>
                <ListAreaDd className="right">
                  10000<span>円</span>
                </ListAreaDd>
              </ListAreaRow>
            </ListAreaDl>
          </ListRight>
        </ListAreaInner>
      </ListArea>
    </>
  );
};

const MoneyTopImg = styled.div`
  background: url(${background}) center center / cover;
  height: 300px;
  width: 100vw;
  color: #fff;
  padding-top: 50px;
`;

const Sdiv = styled.div`
  &.second {
    margin-top: 30px;
  }

  &.third {
    margin-top: 20px;
  }
`;

const MoneyTopInner = styled.div`
  width: 600px;
  margin: 0 auto;
  /* border: 1px solid red; */
`;

const TopList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TopItem = styled.li`
  &.left {
    background-color: #333;
    padding: 5px;
    border-radius: 10px 100px / 120px;
    cursor: pointer;
    transition: 0.3s;
    transform: translateX(30px);
    &:active {
      transform: translateX(20px);
    }
  }

  &.center {
    font-size: 20px;
  }

  &.right {
    background-color: #333;
    padding: 5px;
    border-radius: 100px 10px / 120px;
    cursor: pointer;
    transition: 0.3s;
    transform: translateX(-30px);
    &:active {
      transform: translateX(-20px);
    }
  }
`;

const Balance = styled.p`
  text-align: center;
  font-size: 30px;
  letter-spacing: 0.15em;
  width: fit-content;
  margin: 10px auto 0;
  position: relative;

  &::after {
    position: absolute;
    content: "残高";
    font-size: 12px;
    top: -10px;
    left: -30px;
  }
`;

const BottomList = styled.ul`
  display: flex;
  width: fit-content;
  margin: 0 auto;
`;

const BottomItem = styled.li`
  display: flex;
  align-items: center;
  width: 190px;
  height: 40px;
  padding: 0 20px;

  &.left {
    background-color: #48cd8e;
  }

  &.right {
    background-color: #f6686e;
  }

  & + & {
    margin-left: 50px;
  }
`;

const BottomItemLabel = styled.p`
  color: #333;
  font-size: 12px;
  white-space: nowrap;
`;

const BottomItemYen = styled.p`
  letter-spacing: 0.15em;
  margin-left: 40px;
  font-size: 16px;
  white-space: nowrap;

  span {
    font-size: 11px;
  }
`;

const MoneyEnrollArea = styled.div`
  height: 80px;
  background-color: #f3eefb;

  form {
    height: inherit;
  }
`;

/////////////////// Radio //////////////////////////

const RadioWrap = styled.div`
  display: inline-flex;
  border-radius: 1px;
  color: #333;
`;

const RadioLabel = styled.label`
  position: relative;
  cursor: pointer;
`;

const RadioInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;

  &:checked + .radio-part {
    background-color: #3f51b5;
    color: #fff;
    outline: none;
  }

  &:focus + .radio-part {
    /* outline: -webkit-focus-ring-color auto 5px; */
  }
`;

const RadioParts = styled.span`
  display: block;
  background: #fff;
  color: #333;
  height: 38px;
  line-height: 38px;
  width: 60px;
  text-align: center;
  transition: 0.3s;
  border-radius: 50% 20% / 10% 40%;
`;

////////////////// 新規投稿 内容以降
const ContentsUl = styled.ul`
  display: flex;
  align-items: center;

  input {
    margin-left: 10px;

    box-shadow: none;
    border: 1px solid #eee;
    background: #fff;
    padding: 5px 5px;
    appearance: none;
    border-radius: 0;
    color: inherit;
    font-family: inherit;
    font-size: 14px;
    width: 100%;
  }
`;
const MoneyUl = styled.ul`
  display: flex;
  align-items: center;
  position: relative;
  input {
    margin-left: 10px;
    box-shadow: none;
    border: 1px solid #eee;
    background: #fff;
    padding: 5px 5px;
    appearance: none;
    border-radius: 0;
    color: inherit;
    font-family: inherit;
    font-size: 14px;
    width: 100%;
  }

  .parts {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(120%, -20%);
  }
`;
const Sbutton = styled.button`
  background-color: #3f51b5;
  color: #fff;
  border: none;
  padding: 5px 20px;
  margin-left: 5px;
  border-radius: 50% 20% / 10% 40%;
  transition: 0.3s;
  cursor: pointer;
  &:active {
    transform: translateY(5px);
  }
`;

const EnrollInner = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: inherit;
  width: fit-content;

  span {
    white-space: nowrap;
  }

  div {
    &:not(:first-of-type) {
      margin-left: 20px;
    }
  }
`;

////////////// List Area ///////////////

const ListAreaInner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ListAreaTitle = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #333;
  padding-bottom: 20px;
`;

const ListArea = styled.div``;

const ListLeft = styled.div`
  div {
    margin-right: 20px;
  }
`;

const ListRight = styled.div``;

const ListAreaDl = styled.dl``;

const ListAreaRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;

  &:not(:first-of-type) {
    margin-top: 20px;
  }
`;

const ListAreaDt = styled.dt``;

const ListAreaDd = styled.dd`
  letter-spacing: 0.05em;
  &.left {
    color: #f6686e;
  }

  &.right {
    color: #48cd8e;
  }
`;

/////////// error //////////
const StyledErrorMessage = styled.div`
  background-color: #de6363;
  color: #fff;
  font-size: 20px;
  text-align: center;
`;
