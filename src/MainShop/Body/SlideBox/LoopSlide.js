import styled from "styled-components";
import { keyframes } from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  overflow: hidden;
  background: black;
  span {
    display: inline-block;
    flex-direction: row;
    white-space: nowrap;
    color: white;
    gap: 1.5rem;
  }
`;

const SlideAnimation = keyframes`
0% {
  transform: translateX(100%);  
}

100% {
  transform: translateX(-400%);  
}
`;

const SlideTxt = styled.div`
  display: flex;
  color: white;
  position: relative;
`;
const AnimatedDiv = styled.div`
  width: calc(100% / 4);
  animation: ${SlideAnimation} 20s linear infinite;
`;

export function LoopSlide() {
  const texts = [
    "널디 퍼플 프라이데이! 전 품목 최대 83% 할인",
    "널디 퍼플 프라이데이! 전 품목 최대 83% 할인",
    "널디 퍼플 프라이데이! 전 품목 최대 83% 할인",
    "널디 퍼플 프라이데이! 전 품목 최대 83% 할인",
  ];

  return (
    <>
      <Container>
        <SlideTxt>
          {texts.map((text, index) => (
            <AnimatedDiv key={index}>{text}</AnimatedDiv>
          ))}
        </SlideTxt>
      </Container>
    </>
  );
}
