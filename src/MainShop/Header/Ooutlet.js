import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100%;
`;
const OutletContainer = styled.div`
  width: 100%;
  height: 907px;
  background-color: black;
  position: relative;
  margin: 0 auto;
  font-family: "Pretendard", sans-serif;
  h1 {
    font-size: 70px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
  }
  h2 {
    font-size: 28px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
    margin-bottom: 30px;
  }
`;
const Gradi = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: -245px;
  height: 100%;
  width: 68px;
  justify-content: space-between;
`;
const Gra = styled.div`
  width: 26px;
  height: 100%;
  background: linear-gradient(to top, black 0%, #5c3296 70%);
`;

const Inner = styled.div`
  width: 1437px;
  margin: 0 auto;
  height: 100%;
  position: relative;
`;
const OutletContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ContentBox = styled.div`
  width: 695px;
`;
const LinkBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 377px;
  border-top-left-radius: 40px;
  margin-bottom: 73px;
  img {
    width: 100%;
    position: absolute;
    bottom: 0px;
  }
`;
const ContentTextBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  button {
    width: 175px;
    height: 46px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;
const TextBox = styled.div`
  display: flex;

  gap: 10px;
  h3 {
    font-size: 32px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.84;
    letter-spacing: normal;
    color: #fff;
  }
  h4 {
    color: white;
    font-size: 18px;
    font-weight: 500;
    margin-left: 10px;
  }
`;
const SmallBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 56px;
  button {
    flex: 1;
    margin-right: 5px;
    border-radius: 15px;
    height: 105px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    box-sizing: border-box;
    gap: 10px;
  }
  span {
    font-family: "Nanum Gothic";
    font-size: 14px;
    font-weight: 500;
  }
`;
const Sale = styled.div`
  span {
    justify-content: flex-end;
    font-size: 36px;
    font-weight: 700;
  }
`;
const Sale2 = styled.div`
  justify-content: flex-end;
  font-size: 30px;
  font-weight: 700;
  margin-top: 10px;
`;
export function Ooutlet() {
  return (
    <>
      <Container>
        <OutletContainer>
          <Inner>
            <Gradi>
              <Gra />
              <Gra />
            </Gradi>
            <h1>OUTLET</h1>
            <h2>LAST ONE / UP TO 70% OFF</h2>
            <OutletContent>
              <ContentBox>
                <LinkBox>
                  <img
                    src="https://whoisnerdy.com/web/upload/NNEditor/20220315/outlet2_pc_1.png?ver=4"
                    alt=""
                  />

                  <ContentTextBox>
                    <span>실시간 인기상품 바로가기</span>
                    <h1>OUTLET </h1>
                    <NavLink
                      to="/bestItem"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <button>더 알아보기</button>
                    </NavLink>
                  </ContentTextBox>
                </LinkBox>
                <TextBox>
                  <h3>SALE CHECK</h3>
                  <h4>할인율 별</h4>
                </TextBox>
                <SmallBox>
                  <button>
                    <span>자세히보기 〉</span>
                    <Sale>
                      <span>60%~</span>
                    </Sale>
                  </button>
                  <button>
                    <span>자세히보기 〉</span>
                    <Sale>
                      <span>~50%</span>
                    </Sale>
                  </button>
                  <button>
                    <span>자세히보기 〉</span>
                    <Sale>
                      <span>~40%</span>
                    </Sale>
                  </button>
                  <button>
                    <span>자세히보기 〉</span>
                    <Sale>
                      <span>~30%</span>
                    </Sale>
                  </button>
                </SmallBox>
              </ContentBox>
              <ContentBox>
                <LinkBox>
                  <img
                    src="https://whoisnerdy.com/web/upload/NNEditor/20220315/outlet2_pc_2.png?ver=2"
                    alt=""
                  />
                  <ContentTextBox>
                    <span>최신 유행 악세사리 바로가기</span>
                    <h1>ACCESSORIES</h1>
                    <NavLink
                      to="/Acc"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <button>더 알아보기</button>
                    </NavLink>
                  </ContentTextBox>
                </LinkBox>
                <TextBox>
                  <h3>SALE CHECK</h3>
                  <h4>할인 금액대별</h4>
                </TextBox>
                <SmallBox>
                  <button>
                    <span>자세히보기 〉</span>
                    <Sale2>BAG</Sale2>
                  </button>
                  <button>
                    <span>자세히보기 〉</span>
                    <Sale2>CAP</Sale2>
                  </button>
                  <button>
                    <span>자세히보기 〉</span>
                    <Sale2>RASHGUARD</Sale2>
                  </button>
                  <button>
                    <span>자세히보기 〉</span>
                    <Sale2>ETC</Sale2>
                  </button>
                </SmallBox>
              </ContentBox>
            </OutletContent>
          </Inner>
        </OutletContainer>
      </Container>
    </>
  );
}
