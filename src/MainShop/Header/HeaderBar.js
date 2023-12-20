import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { SnapBody } from "../Body/SnapBody";
import React, { useContext, useState } from "react";
import { MyContext } from "../NerdyShop";

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 80px;
  width: 100%;
  display: flex;
  z-index: 2000;
  background-color: white;
  border-bottom: 1px solid #eaeaea;
`;

//Heaer 로고 부분
const Logo = styled.div`
  position: absolute;
  left: 50px;
  top: 30px;
`;
const LogoImg = styled.img`
  height: 22px;
`;

//Header Nav 중간
const NavMid = styled.div`
  padding: 0 0 0 0;
  max-width: calc(100%- 360px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`;

const Li = styled.li`
  font-weight: 600;
  font-size: 15px;
  padding: 0 10px;
`;
const CusNavLink = styled(NavLink)`
  position: relative;
  padding: 2px 0 2px 0;
  cursor: pointer;
  width: 0%;
  text-decoration: none;
  color: black;
  ${Li}:first-child & {
    color: #7a2bdf;
    &::before {
      border-top: 2px solid #7a2bdf;
    }
    &::after {
      border-bottom: 2px solid #7a2bdf;
    }
  }
  &::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    border-top: 2px solid black;
    transition: width 300ms ease-in-out;
  }
  &:hover::before {
    width: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    bottom: 0;
    left: 0;
    border-bottom: 2px solid black;
    transition: width 300ms ease-in-out;
    transition-delay: 0.2s;
  }
  &:hover::after {
    width: 100%;
  }
`;

const LiSmall = styled.li`
  font-size: 13px;
  font-weight: 500;
`;
const LiBar = styled.li`
  color: #eaeaea;
`;

//Header 오른쪽 메뉴
const RightMenu = styled.div`
  position: absolute;
  right: 45px;
  top: 17px;
  width: 150px;
`;
const RUl = styled.ul`
  display: flex;
  justify-content: right;
  list-style: none;
`;
const RLi = styled.li`
  display: inline-block;
  font-size: 12px;
  padding-right: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 1;
  color: #999999;
`;

const ICON = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  right: 20px;
  top: 20px;
  gap: 10px;
`;

export function HeaderBar() {
  const [opacity, setOpacity] = useState(0);
  const [height, setHeight] = useState(0);
  const handleMouseOver = () => {
    setOpacity(1);
    setHeight(360);
  };
  const handleMouseOut = () => {
    setOpacity(0);
    setHeight(0);
  };
  const [isRegisterVisible, setIsRegisterVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginStatusChange = () => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
    setIsRegisterVisible(true);
  };

  const {loginState} = useContext(MyContext);
  return (
    <>
      <Container>
        <Logo>
          <Link to="/" target="self">
            <LogoImg
              src="https://whoisnerdy.com/web/upload/images/logo_blank.png"
              alt="Logo_Icon"
            />
          </Link>
        </Logo>
        <NavMid>
          <Ul>
            <Li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <CusNavLink to="/the8">with THE 8</CusNavLink>
              <SnapBody opacity={opacity} height={height} />
            </Li>
            <Li>
              <CusNavLink to="/bestItem">BEST</CusNavLink>
            </Li>
            <Li>
              <CusNavLink to="/newItem">New</CusNavLink>
            </Li>
            <Li>
              <CusNavLink to="/shoes">Shoes</CusNavLink>
            </Li>
            <Li>
              <CusNavLink to="/acc">ACC</CusNavLink>
            </Li>
            <Li>
              <CusNavLink to="/outlet">OUTLET</CusNavLink>
            </Li>
            <LiBar>|</LiBar>
            <LiSmall>
              <NavLink
                to="/benefit"
                style={{ textDecoration: "none", color: "black" }}
              >
                BENEFIT
              </NavLink>
            </LiSmall>
            <LiSmall>
              <NavLink
                to="/lookbook"
                style={{ textDecoration: "none", color: "black" }}
              >
                LOOKBOOK
              </NavLink>
            </LiSmall>
            <LiSmall>
              <NavLink
                to="/community"
                style={{ textDecoration: "none", color: "black" }}
              >
                COMMUNITY
              </NavLink>
            </LiSmall>
          </Ul>
        </NavMid>
        <RightMenu>
          {/* 상단 */}
          <RUl>
            {!loginState ?(
              <>
            <RLi>
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "#999" }}
              >
                로그인
              </NavLink>
            </RLi>
            <RLi>
              <NavLink
                to="/register"
                style={{ textDecoration: "none", color: "#999" }}
              >
                멤버쉽가입
              </NavLink>
            </RLi>
            </>
            ) : (

          <RUl>
          <NavLink to="/logout" style={{textDecoration:"none", color:"#999"}}>
            로그아웃
          </NavLink>
          </RUl>
          )}
          </RUl>
          <ICON>
            <a href="/search">
              <img
                src="https://whoisnerdy.com/web/upload/images/icotb_zoom.png"
                alt="search_Icon"
              />
            </a>
            <a href="/cart">
              <img
                src="https://whoisnerdy.com/web/upload/images/icotb_cart.png"
                alt="cart_Icon"
              />
            </a>
            <a href="/member">
              <img
                src="https://whoisnerdy.com/web/upload/images/icotb_my.png"
                alt="member_Icon"
              />
            </a>
          </ICON>
        </RightMenu>
      </Container>
    </>
  );
}
