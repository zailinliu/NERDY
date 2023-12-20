import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllAccs } from "../Api/api";
import { PriceCalc } from "../Body/PriceCalc";

const Container = styled.div`
  width: calc(100%);
  max-width: 1400px;
  margin: 0 auto;
  min-width: 1200px;
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
  padding: 0 00 80px 0;
  list-style: none;
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
const ItemText = styled.div`
  color: black;
  font-size: 14px;
  h1 {
    font-size: 36px;
    margin-bottom: 40px;
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

export function Acc() {
  const [accList, setAccList] = useState([]);

  useEffect(() => {
    getAllAccs().then((acc) => {
      setAccList(acc);
    });
  }, []);
  return (
    <>
      <Container>
        <BestItemBanner>
          <img
            src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/db60889b5882a9635ca35a2a0eee27f6.jpg"
            alt=""
          />
        </BestItemBanner>
        <ItemText>
          <p>{accList.length}개의 상품이 있습니다</p>
        </ItemText>
        <Ul>
          {accList.map((acc, index) => (
            <Li key={acc.id}>
              <Box>
                <Thumbnail>
                  <a href={acc.link}>
                    <img src={acc.mainimg} alt="이미지" />
                  </a>
                  <ItemIf>
                    <p>{acc.name}</p>
                    <p>
                      <Sale>{acc.sale}</Sale> {PriceCalc(acc.price)}원
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
