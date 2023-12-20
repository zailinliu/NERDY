import styled from "styled-components";

const Container = styled.div``;
const BenefitBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export function Benefit() {
  return (
    <>
      <Container>
        <BenefitBox>
          <img
            src="https://whoisnerdy.com/web/upload/event/2022/ncrew_01_2.png"
            alt=""
          />
          <img
            src="https://whoisnerdy.com/web/upload/event/2022/ncrew_02_2.png"
            alt=""
          />
          <img
            src="https://whoisnerdy.com/web/upload/event/2022/ncrew_04_2.png"
            alt=""
          />
        </BenefitBox>
      </Container>
    </>
  );
}
