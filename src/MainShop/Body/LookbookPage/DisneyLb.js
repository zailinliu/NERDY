import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  min-width: 1200px;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 0 0 0;
  position: relative;
`;
const Landing = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 700px;
  position: relative;
`;
const ImgWrapper = styled.div`
  position: relative;
`;
const Img = styled.img`
  border: none;
  vertical-align: top;
  width: 100%;
`;
const Nav = styled.div`
  background: #93b9d2;
  text-align: center;
  width: 100%;
  height: 60%;
`;

const Ul = styled.ul`
  text-align: center;
`;
const Li = styled.li`
  display: inline-block;
  width: 25%;
  position: relative;
  padding: 0 0 0;
  list-style: none;
  border-left: 1px solid #ffffff;
  color: white;
  &:first-child {
    border-left: 0;
  }
`;
const A = styled.a`
  display: block;
  line-height: 60px;
  font-size: 16px;
  letter-spacing: -0.5px;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.active ? "#2fecd0" : "white")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  &:active {
    color: #2fecd0;
    font-weight: bold;
  }
`;
const ItemWrapper = styled.div``;
const Item = styled.div`
  display: ${(props) => (props.selected ? "block" : "none")};
`;

export function DisneyLb() {
  const [selectedItem, setSelectedItem] = useState("Item1");
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      <Container>
        <Landing>
          <ImgWrapper>
            <Img
              src="https://whoisnerdy.com/web/upload/event/2023/disney2_01.png"
              alt=""
            />
          </ImgWrapper>
          {/* NavBar */}
          <Nav>
            <Ul>
              <Li>
                <A
                  onClick={() => handleItemClick("Item1")}
                  active={selectedItem === "Item1"}
                >
                  <span>#LOOK01</span>
                </A>
              </Li>
              <Li>
                <A
                  onClick={() => handleItemClick("Item2")}
                  active={selectedItem === "Item2"}
                >
                  <span>#LOOK02</span>
                </A>
              </Li>
              <Li>
                <A
                  onClick={() => handleItemClick("Item3")}
                  active={selectedItem === "Item3"}
                >
                  <span>#LOOK03</span>
                </A>
              </Li>
              <Li>
                <A
                  onClick={() => handleItemClick("Item4")}
                  active={selectedItem === "Item4"}
                >
                  <span>#LOOK04</span>
                </A>
              </Li>
            </Ul>
          </Nav>
          {/* NavBar 선택에 따른 Item 출력 */}
          <ItemWrapper>
            <Item id="Item1" selected={selectedItem === "Item1"}>
              {/* 스와이퍼컨텐츠 */}
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_03.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_04.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_05.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_06.jpg"
                  alt=""
                />
              </ImgWrapper>
              {/* 스와이퍼컨텐츠 */}
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_08.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_09.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_10.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_11.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_12.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_13.jpg"
                  alt=""
                />
              </ImgWrapper>
            </Item>
            <Item id="Item2" selected={selectedItem === "Item2"}>
              {/* 스와이퍼컨텐츠 14*/}
              <ImgWrapper>
                <Img
                  src="	https://whoisnerdy.com/web/upload/event/2023/disney2_15.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_16.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_17.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_18.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_19.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_20.jpg"
                  alt=""
                />
              </ImgWrapper>
              {/* 스와이퍼컨텐츠 21*/}
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_22.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_23.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_24.jpg"
                  alt=""
                />
              </ImgWrapper>
            </Item>
            <Item id="Item3" selected={selectedItem === "Item3"}>
              {/* 스와이퍼컨텐츠 25*/}
              <ImgWrapper>
                <Img
                  src="	https://whoisnerdy.com/web/upload/event/2023/disney2_26.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_27.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_28.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_29.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_30.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_31.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_32.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_33.jpg"
                  alt=""
                />
              </ImgWrapper>
            </Item>
            <Item id="Item4" selected={selectedItem === "Item4"}>
              {/* 스와이퍼컨텐츠 34*/}
              <ImgWrapper>
                <Img
                  src="	https://whoisnerdy.com/web/upload/event/2023/disney2_35.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_36.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_37.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_38.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_39.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_40.jpg"
                  alt=""
                />
              </ImgWrapper>
              {/* 스와이퍼컨텐츠 41*/}
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_42.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_43.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_44.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_45.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_46.jpg"
                  alt=""
                />
              </ImgWrapper>
              <ImgWrapper>
                <Img
                  src="https://whoisnerdy.com/web/upload/event/2023/disney2_47.jpg"
                  alt=""
                />
              </ImgWrapper>
            </Item>
          </ItemWrapper>
        </Landing>
      </Container>
    </>
  );
}
