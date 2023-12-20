import { Best } from "./Best";
import { New } from "./New";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SlideItem } from "./SlideItem";
import { SlideFooterBar } from "../Footer/SlideFooterBar";
import { MBSlide } from "./SlideBox/MBSlide";

const Container = styled.div`
  width: calc(100%);
`;

const StyledMainBanner = styled.div`
  display: flex;
  width: 100%;
`;
const StyledMain = styled.div`
  width: 100%;
  height: 400px;
`;

export function Home() {
  return (
    <>
      <Container>
        <StyledMainBanner>
          <MBSlide />
        </StyledMainBanner>
        <SlideItem />
        <StyledMain>
          <Link to="/BestItem" />
          <Best />
        </StyledMain>
        <StyledMain>
          <Link to="/NewItem" />
          <New />
        </StyledMain>
      </Container>
      <SlideFooterBar />
    </>
  );
}
