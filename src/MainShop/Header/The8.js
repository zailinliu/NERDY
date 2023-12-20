import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllThe8s } from "../Api/api";

const Container = styled.div`
  width: calc(100vw-10px);
  min-width: 1200px;
  max-width: 1400px;
  min-height: calc(100% - 298px);
  overflow: hidden;
  margin: 0 auto;
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
const ItemText = styled.div`
  color: black;
  font-size: 14px;
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

const Box = styled.div`
padding: 0 10px;
overflow: hidden;
`;
export function The8() {
  const [the8List, setThe8List] = useState([]);

  useEffect(()=>{
    getAllThe8s().then((the8)=>{
      setThe8List(the8);
    })
  })
  return (
    <>
      <Container>
        <ItemTitle>
          <h1>세븐틴 THE 8</h1>
          <strong>전체</strong>
          <p>아우터</p>
          <p>세트</p>
          <p>상의</p>
          <p>하의</p>
        </ItemTitle>
        <BestItemBanner>
          <img
            src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/18400e1b6ea73d897fac9d9e1190b7f6.jpg"
            alt="배너"
          />
        </BestItemBanner>
        <ItemText>
          <p>{the8List.length}개의 상품이 있습니다</p>
        </ItemText>
        <Ul>
          {the8List.map((the8, index) => (
            <Li key={the8.id}>
              <Box>
              <Thumbnail>
                <a href={the8.link}>
                  <img src={the8.mainimg} alt="이미지" />
                </a>
                <ItemIf>
                  <p>{the8.name}</p>
                  <p>
                    <Sale>{the8.sale}</Sale> {the8.price}원
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
