import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { PriceCalc } from "../Body/PriceCalc";

const Container = styled.div`
  width: 100%;
  height: 600px;
`;
const CartBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const CartTextBox = styled.div`
  padding-top: 80px;
  padding-left: 200px;
`;
const Bar = styled.div`
  border-bottom: 1px solid black;
  width: 90%;
  margin-top: 43px;
`;
const Bar2 = styled.div`
  border-bottom: 1px solid black;
  width: 70%;
  margin-top: 40px;
  margin-bottom: 20px;
`;
const PayBox = styled.div`
  margin-top: 112px;
`;
const Pay = styled.div`
  display: flex;
  gap: 43%;
  margin-top: 10px;
`;
const PayName = styled.div`
  align-items: flex-start;
  P {
    margin-bottom: 10px;
  }
`;
const Money = styled.div`
  align-items: flex-end;
  h4 {
    margin-bottom: 10px;
  }
`;

const GoBIBtn = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  button {
    width: 90%;
    height: 16%;
    background-color: white;
    border: 1px solid #dbdbdb;
    color: #424242;
  }
`;
const GoLoginBtn = styled.div`
  width: 78%;
  height: 100%;
  padding: 20px 0 0 0;
  button {
    width: 90%;
    height: 16%;
    background-color: black;
    color: white;
    font-weight: 900;
    font-size: 16px;
  }
`;
const ItemBox = styled.div`
  width: 100%;
  height: 170px;
  /* 변경예정 */
`;
const EmptyBox = styled.div`
  width: 100%;
  height: 15px;
`;

const Cart = ({ isLoggedIn }) => {
  const [itemData, setItemData] = useState([]);
  const [itemDiscounts, setItemDiscounts] = useState([0]); // 할인금액 추가
  const [discountAmount, setDiscountAmount] = useState(0);

  useEffect(() => {
    // 데이터베이스에서 아이템 데이터 가져오는 비동기 함수 (예시)
    const fetchItemDataFromDatabase = async () => {
      try {
        // 데이터베이스에서 아이템 데이터 가져오기!
        const response = await fetch("your-database-endpoint");
        const data = await response.json();
        setItemData(data);
      } catch (error) {
        console.error("Error fetching item data:", error);
      }
    };

    fetchItemDataFromDatabase();
  }, []); // 빈 배열을 전달하여 한 번만 실행

  const totalItemPrice = itemData.reduce((acc, item, index) => {
    const discountedPrice = item.price - itemDiscounts[index];
    return acc + discountedPrice;
  }, 0);

  const delivery = 3000;

  const totalDiscount = itemDiscounts.reduce(
    (acc, discount) => acc + discount,
    0
  );
  const totalPayment = totalItemPrice + delivery - totalDiscount;
  const calculateTotalDiscount = () => {
    const totalDiscount = itemDiscounts.reduce(
      (acc, discount) => acc + discount,
      0
    );
    setDiscountAmount(totalDiscount);
  };
  useEffect(() => {
    calculateTotalDiscount();
  }, [itemDiscounts]);
  const updateItemDiscount = (index, newDiscount) => {
    const updatedItemDiscounts = [...itemDiscounts];
    updatedItemDiscounts[index] = newDiscount;
    setItemDiscounts(updatedItemDiscounts);
  };
  return (
    <Container>
      <CartBox>
        <CartTextBox>
          <h2>장바구니</h2>
          <Bar />
          <ItemBox>
            {itemData.map((item, index) => (
              <div key={index}>
                {/* 여기에 각 아이템의 정보 표시 */}
                <p>상품 가격: {PriceCalc(item.price)}원</p>
                <p>할인 금액: {PriceCalc(itemDiscounts[index])}원</p>
                <input
                  type="number"
                  placeholder="할인 금액 입력"
                  value={itemDiscounts[index]}
                  onChange={(e) =>
                    updateItemDiscount(index, parseInt(e.target.value, 10))
                  }
                />
              </div>
            ))}
          </ItemBox>
          <Bar />
          <EmptyBox />
          <GoBIBtn>
            <NavLink
              to="/bestitem"
              style={{ textDecoration: "none", color: "#424242" }}
            >
              <button>+ 더 담으러 가기</button>
            </NavLink>
          </GoBIBtn>
        </CartTextBox>
        <PayBox>
          <Bar2 />
          <h2>결제 내역</h2>
          <Pay>
            <PayName>
              <p>총 상품금액</p>
              <p>총 할인금액</p>
              <p>배송비</p>
            </PayName>
            <Money>
              <h4>{PriceCalc(totalItemPrice)}원</h4>
              <h4>{PriceCalc(totalDiscount)}원</h4>
              <h4>{PriceCalc(delivery)}원</h4>
            </Money>
          </Pay>
          <Bar2 />
          <Pay>
            <PayName>
              <p>총 결제금액</p>
            </PayName>
            <Money>
              <h4>{PriceCalc(totalPayment)}원</h4>
            </Money>
          </Pay>
          <GoLoginBtn>
            <NavLink
              to={isLoggedIn ? "/cart" : "/login"}
              style={{ textDecoration: "none", color: "#424242" }}
            >
              <button>{isLoggedIn ? "결제하기" : "로그인"}</button>
            </NavLink>
          </GoLoginBtn>
        </PayBox>
      </CartBox>
    </Container>
  );
};

export { Cart };
