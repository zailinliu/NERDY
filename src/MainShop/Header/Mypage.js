import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Login } from "./Login";

const Container = styled.div`
  width: 1000px;
  height: 1000px;
  margin: 0 auto;
`;
const MypageBox = styled.div`
  position: relative;
  width: 1000px;
  height: 25%;
  border: 1px solid #e0e0e0;
  margin-top: 30px;
  margin-bottom: 50px;
  /* padding: 30px 0px 30px 50px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Level = styled.div`
  width: 40%;
  margin-left: 40px;
  p {
    margin-bottom: 10px;
  }
`;
const Myname = styled.div`
  font-size: 24px;
`;
const Leveltext = styled.div`
  margin-top: 20px;
  font-size: 14px;
`;
const Myshop = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin-right: 10%;
`;
const InfoBox = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;
const After = styled.div`
  border-right: 1px solid #eaeaea;
  height: 50px;
`;
const OrderBox = styled.div`
  width: 80%;
  height: 600px;
  margin: 0 auto;
`;
const OrderTitle = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
`;
const OrderText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  margin: 20px 20px;
  color: gray;
  font-size: 12px;
`;
const OrderTable = styled.div``;
const Bar = styled.div`
  border-bottom: 2px solid black;
`;
const Bar2 = styled.div`
  border-bottom: 2px solid #e0e0e0;
`;

const Mypage = ({ isLoggedIn }) => {
  return <Container>{isLoggedIn ? <Mypage/> : <Login/>}</Container>;
  <>
      <Container>
        <MypageBox>
          <Level>
            <Myname>
              <p>"아이디"크루님은</p> <p>"레벨"등급입니다</p>
            </Myname>
            <Leveltext>
              <p>다음 등급인 "next레벨"까지 구매금액이 "@원" 남았습니다.</p>
              <NavLink
                to="/gift"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>혜택보기 》</p>
              </NavLink>
            </Leveltext>
          </Level>
          <Myshop>
            <InfoBox>
              <p>주문배송</p>
              <After />
            </InfoBox>
            <InfoBox>
              <p>리뷰</p>
              <After />
            </InfoBox>
            <InfoBox>
              <p>적립금</p>
              <After />
            </InfoBox>
            <InfoBox>
              <p>쿠폰</p>
            </InfoBox>
          </Myshop>
        </MypageBox>
        <OrderBox>
          <OrderTitle>
            <h4>최근 주문</h4>
          </OrderTitle>
          <Bar />
          <OrderText>
            <p>주문일자</p>
            <p>이미지</p>
            <p>상품정보</p>
            <p>수량</p>
            <p>주문번호</p>
            <p>주문금액</p>
          </OrderText>
          <Bar2 />
          <OrderTable>주문내역/이미지 들어올 테이블</OrderTable>
        </OrderBox>
      </Container>
    </>
};

export {Mypage};

