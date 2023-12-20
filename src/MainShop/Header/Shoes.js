import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllShoes } from "../Api/api";
import { PriceCalc } from "../Body/PriceCalc";

const Container = styled.div`
  width: calc(100vw-10px);
  min-width: 1200px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: calc(100% - 298px);
  overflow: hidden;
`;

const BestItemBanner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Ul = styled.ul`
  margin: 0 -10px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;
const Li = styled.li`
  flex: 0 0 20%;
  padding: 0 0 80px 0;
  list-style: none;
`;
const ItemText = styled.div`
  color: black;
  font-size: 14px;
  h1 {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;
const Box = styled.div`
  padding: 0 10px;
  overflow: hidden;
`;
const Thumbnail = styled.div`
  position: relative;
  margin: 0 0 0 0;
  overflow: hidden;
  a {
    text-decoration: none;
    color: #000;
  }
  img {
    border: 0;
    width: 100%;
    vertical-align: top;
  }
`;

const ItemIf = styled.div`
  p {
    position: relative;
    text-align: center;
    padding: 14px 0 0 0;
    font-size: 15px;
  }
`;
const Sale = styled.div`
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  margin-right: 2px;
  color: red;
`;
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
  p {
    margin-top: 70px;
    font-size: 14px;
  }
`;
export function Shoes() {
  const [shoesList, setShoesList] = useState([]);

  useEffect(() => {
    getAllShoes().then((shoes) => {
      setShoesList(shoes);
    });
  });
  return (
    <>
      <Container>
        <ItemTitle>
          <h1>신발</h1>
          <strong>전체</strong>
          <p>운동화</p>
          <p>슬리퍼</p>
          <p>크록스</p>
        </ItemTitle>
        <BestItemBanner>
          <img
            src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/51782e9141035218da2bfbbcbdfba341.jpg"
            alt="배너"
          />
        </BestItemBanner>
        <ItemText>
          <p>{shoesList.length}개의 상품이 있습니다</p>
        </ItemText>
        <Ul>
          {shoesList.map((shoes, index) => (
            <Li key={shoes.id}>
              <Box>
                <Thumbnail>
                  <a href={shoes.link}>
                    <img src={shoes.mainimg} alt="이미지" />
                  </a>
                  <ItemIf>
                    <p>{shoes.name}</p>
                    <p>
                      <Sale>{shoes.sale}</Sale> {PriceCalc(shoes.price)}원
                    </p>
                  </ItemIf>
                </Thumbnail>
              </Box>
            </Li>
          ))}
        </Ul>
      </Container>
    </>
  );
}
