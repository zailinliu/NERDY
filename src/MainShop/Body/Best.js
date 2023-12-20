import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  position: relative;
  margin-top:-4px;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  Link {
    width: 100%;
    height: 100%;
  }
`;
const TextDiv = styled.div`
  position: absolute;
  top: 20%;
  left: 15%;
  transform: translate(-50%, -50%);
  color: black;
  text-align: center;
`;
const Text1 = styled.div`
  font-weight: 900;
  font-size: 21px;
`;
const Text2 = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;

export function Best() {
  return (
    <>
      <StyledDiv>
        <Link to="/BestItem">
          <img
            src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/d6f312b3dac67073bda4b0018a47c320.jpg"
            alt=""
          />
          <TextDiv>
            <Text1>BEST ITEM</Text1>
            <Text2>보러가기 〉</Text2>
          </TextDiv>
        </Link>
      </StyledDiv>
    </>
  );
}
