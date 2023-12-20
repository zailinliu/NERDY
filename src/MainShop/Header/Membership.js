import styled from "styled-components";
import { Mypage } from "./Mypage";
import { Register } from "./Register";

const Container = styled.div``;

const Membership = ({ isLoggedIn }) => {
  return <Container>{isLoggedIn ? <Mypage /> : <Register />}</Container>;
};

export { Membership };
