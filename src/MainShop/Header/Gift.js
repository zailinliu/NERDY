import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;
const GoLoginBtn = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  button {
    width: 50%;
    height: 80%;
    background-color: #9000ff;
    border: 1px solid #dbdbdb;
    color: white;
    font-weight: 900;
    font-size: 16px;
    margin-left: 25%;
  }
`;
export function Gift() {
  return (
    <>
      <Container>
        <img src="https://www.whoisnerdy.com/web/upload/images/mbs_01.jpg?ver=2" alt=""/>
        <img src="https://www.whoisnerdy.com/web/upload/images/mbs_02-1.jpg?ver=4" alt=""/>
        <GoLoginBtn>
          <NavLink
            to="/login"
            style={{ textDecoration: "none", color: "#424242" }}
          >
            <button>회원가입 하러가기</button>
          </NavLink>
        </GoLoginBtn>
        <img src="https://www.whoisnerdy.com/web/upload/images/mbs_05.jpg" alt=""/>
      </Container>
    </>
  );
}
