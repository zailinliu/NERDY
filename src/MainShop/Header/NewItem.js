import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllNewItems } from "../Api/api";
import { PriceCalc } from "../Body/PriceCalc";

const Container = styled.div`
  min-width: 1200px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: calc(100% - 298px);
  position: relative;
`;

const NewItemBanner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;
const Ul = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
`;
const Li = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;
  flex: 0 0 20%;
  padding: 0 0 80px 0;
`;
const ItemText = styled.div`
  color: black;
  font-size: 14px;
  h1 {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;
const Thumbnail = styled.div`
  position: relative;
  width: 230px;
  margin-top: 30px;
  img {
    width: 100%;
  }
`;
const BestNum = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 35px;
  background-color: black;
  color: white;
  font-size: 12px;
  font-weight: 900;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const ItemIf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;
const Txt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Coast = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const Sale = styled.div`
  color: red;
`;
const Price = styled.div``;
const ItemTitle = styled.div`
  color: black;
  font-size: 14px;
  display: flex;
  gap: 30px;
  h1 {
    font-size: 40px;
    font-weight: 900;
    margin-top: 50px;
  }
  strong {
    margin-top: 70px;
    font-size: 14px;
  }
`;

const Basket = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 36px;
  height: 36px;
  cursor: pointer;
  background: url(https://whoisnerdy.com/web/upload/images/ico_cart_6.png?v=1) 0
    0;
  background-size: 36px 36px;
`;
const Box = styled.div`
  padding: 0 10px;
  overflow: hidden;
`;
export function NewItem() {
  const [newitemList, setNewItemList] = useState([]);

  useEffect(() => {
    getAllNewItems().then((newitem) => {
      setNewItemList(newitem);
    });
  }, []);
  return (
    <>
      <Container>
        <ItemTitle>
          <h1>23FW 신상품</h1>
          <strong>전체</strong>
        </ItemTitle>
        <NewItemBanner>
          <img
            src="https://www.whoisnerdy.com/web/upload/event/2023/editorial_01.png?ver=2"
            alt=""
          />
        </NewItemBanner>
        <ItemText>
          <p>{newitemList.length}개의 상품이 있습니다</p>
        </ItemText>
        <Ul>
          {newitemList.map((newitem, index) => (
            <Li key={newitem.id}>
              <Box>
                <Thumbnail>
                  <NavLink
                    to="/detail"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <a href={newitem.link}>
                      <img src={newitem.mainimg} alt="이미지" />
                    </a>
                  </NavLink>
                  <Basket></Basket>
                  <BestNum>
                    <p>Best</p>
                    <p>{index + 1}</p>
                  </BestNum>
                </Thumbnail>
                <ItemIf>
                  <Txt>
                    <p>★ 평점</p>
                    <p>{newitem.name}</p>
                  </Txt>
                  <Coast>
                    <Sale>{newitem.sale}</Sale>
                    <Price>{PriceCalc(newitem.price)}원</Price>
                  </Coast>
                </ItemIf>
              </Box>
            </Li>
          ))}
        </Ul>
      </Container>
    </>
  );
}
