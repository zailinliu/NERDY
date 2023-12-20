import styled from "styled-components";

const Container = styled.div`
  width: 5000px;
  animation-direction: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  height: 38px;
  position: relative;
  animation: seenbox 20s linear infinite;
  gap: 3rem;
  font-size: 12px;
  background-color: #5c3296;
`;
const Comment = styled.div`
  position: relative;
  /* animation: seenbox 5s linear infinite; */
  width: 100%;
  color: #ffffff;
`;
// 임시코드
export function SwiperComment() {
  return (
    <>
      <Container>
        <Comment>널디 퍼플 프라이데이! 전 품목 최대 83% 할인</Comment>
        <Comment>널디 퍼플 프라이데이! 전 품목 최대 83% 할인</Comment>
        <Comment>널디 퍼플 프라이데이! 전 품목 최대 83% 할인</Comment>
        <Comment>널디 퍼플 프라이데이! 전 품목 최대 83% 할인</Comment>
        <Comment>널디 퍼플 프라이데이! 전 품목 최대 83% 할인</Comment>
      </Container>
    </>
  );
}
