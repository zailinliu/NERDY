import styled from "styled-components";
import { The8LBSlide } from "../SlideBox/The8LBSlide";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Gothe8 = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  text-align: center;
  margin: 50px 0 100px;

  button {
    width: 200px;
    height: 50px;
    border: 1px solid black;
    font-size: 16px;
    background-color: white;
    cursor: pointer;
  }
`;

export function The8LB() {
  return (
    <>
      <Container>
        <The8LBSlide />
        <Gothe8>
          <NavLink
            to="/the8"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button>상품보러가기</button>
          </NavLink>
        </Gothe8>
      </Container>
    </>
  );
}
