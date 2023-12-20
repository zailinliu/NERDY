import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 80px;
  width: 100%;
  text-align: left;
  z-index: 100;
  background-color: #ffffff;
  overflow: hidden;
  //아래 2개의 값으로 메뉴 on&off Control
  max-height: ${(props) => props.height}px;
  opacity: ${(props) => props.opacity};
  transition: all 0.2s ease-in-out;
`;
const SubBody = styled.div`
  padding: 5px 0 35px 0;
`;
const NavBody = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const CusNavLink = styled(NavLink)`
  display: block;
  height: 100%;
  position: relative;
  padding: 0;
  margin: 0;
  flex: 0 1 320px;
  margin-left: 1px;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ccc;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0);
    transition: all 0.5s ease-out;
  }
`;
const Img = styled.img`
  display: block;
  width: 100%;
`;

export function SnapBody(opacity, height) {
  return (
    <>
      <Container opacity={opacity} height={height}>
        <SubBody>
          <NavBody>
            <CusNavLink to="/the8">
              <Img
                src="https://whoisnerdy.com/web/upload/images/nav_ban_the8_01.jpg"
                alt="first"
              />
            </CusNavLink>
            <CusNavLink to="/the8">
              <Img
                src="https://whoisnerdy.com/web/upload/images/nav_ban_the8_02.jpg"
                alt="middle"
              />
            </CusNavLink>
            <CusNavLink to="/the8">
              <Img
                src="https://whoisnerdy.com/web/upload/images/nav_ban_the8_03.jpg"
                alt="end"
              />
            </CusNavLink>
          </NavBody>
        </SubBody>
      </Container>
    </>
  );
}
