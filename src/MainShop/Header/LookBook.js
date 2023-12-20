import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { The8LB } from "../Body/LookbookPage/The8LB";
import { SeasonLb } from "../Body/LookbookPage/SeasonLb";
import { EarlyLb } from "../Body/LookbookPage/EarlyLb";
import { BlenkLb } from "../Body/LookbookPage/BlenkLb";
import { TennisLb } from "../Body/LookbookPage/TennisLb";
import { DisneyLb } from "../Body/LookbookPage/DisneyLb";
import { useEffect, useState } from "react";
import { getAllLookbooks } from "../Api/api";

const Container = styled.div`
  width: 1200px;
  min-width: 1200px;
  min-height: calc(100% - 298px);
  margin: 0 auto;
  padding: 33px 0 0 0;
  position: relative;
  overflow: hidden;
`;

const LbTitle = styled.div`
  display: flex;
  padding: 40px;
  gap: 30px;
  h1 {
    font-size: 42px;
    font-weight: 900;
  }
  strong {
    margin-top: 16px;
    font-size: 14px;
  }
  p {
    margin-top: 16px;
    font-size: 14px;
    color: gray;
  }
`;
const Content = styled.div`
  width: 1200px;
  overflow: hidden;
`;
const UI = styled.ul`
  width: 1230px;
  margin-top: -25px;
  margin-left: -15px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;
const LI = styled.li`
  position: relative;
  margin: 28px 15px;
  width: 380px;
  list-style: none;
`;
const LookbookBox = styled.div`
  position: relative;
  h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  p {
    font-size: 16px;
    font-weight: 600;
  }
  img {
    position: relative;
    width: 380px;
    height: 288px;
    border-radius: 5px;
    margin-bottom: 14px;
    transition: 0.5s;
  }
`;
const ImgWrapper = styled.div`
  margin-bottom: 18px;
  height: 288px;
  width: 380px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const EndEvent = styled.div`
  position: absolute;
  z-index: 1000;
  right: 0;
  top: 0;
  width: 95px;
  height: 56px;
  box-sizing: border-box;
  font-size: 19.4px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 56px;
  letter-spacing: -1px;
  text-align: center;
  background: rgba(0, 0, 0, 1);
  color: #ffffff;
`;

const Fog = styled.div`
  transition: 0.5s;
  cursor: pointer;
  position: absolute;
  height: 288px;
  width: 380px;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

export function LookBook() {
  const [lookbookList, setLookbookList] = useState([]);

  useEffect(() => {
    getAllLookbooks().then((lookbook) => {
      setLookbookList(lookbook);
    });
  }, []);
  return (
    <>
      <Container>
        <LbTitle>
          <h1>LOOKBOOK</h1>
          <strong>전체</strong>
          <p>진행중</p>
          <p>종료</p>
        </LbTitle>
        <Content>
          <UI>
            {lookbookList.map((lookbook, index) => (
              <LI key={lookbook.id}>
                <LookbookBox>
                  <NavLink
                    to={lookbook.path}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <ImgWrapper>
                      {index >= 6 && <Fog />}
                      <img src={lookbook.img} alt="이미지" />
                    </ImgWrapper>
                  </NavLink>
                  <h3>{lookbook.title}</h3>
                  <p>{lookbook.date}</p>
                  {index >= 6 && <EndEvent>종료</EndEvent>}
                </LookbookBox>
              </LI>
            ))}
          </UI>
        </Content>
      </Container>
    </>
  );
}
export function LookBookRoutes() {
  return (
    <Routes>
      <Route index element={<LookBook />} />
      <Route path="the8lb" element={<The8LB />} />
      <Route path="seasonlb" element={<SeasonLb />} />
      <Route path="earlylb" element={<EarlyLb />} />
      <Route path="blenklb" element={<BlenkLb />} />
      <Route path="tennislb" element={<TennisLb />} />
      <Route path="disneylb" element={<DisneyLb />} />
    </Routes>
  );
}
