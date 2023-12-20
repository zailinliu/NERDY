import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const TextDiv = styled.div`
  position: absolute;
  top: 20%;
  left: 15%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
`;
const Text1 = styled.div`
  font-weight: 900;
  font-size: 20px;
`;
const Text2 = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;
export function New() {
  return (
    <>
      <StyledDiv>
        <Link to="/newItem">
          <img src="https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/c58259f3fc789b832fcfcd4d7ec8995f.jpg" />
          <TextDiv>
            <Text1>NEW COLLECTION</Text1>
            <Text2>보러가기 〉</Text2>
          </TextDiv>
        </Link>
      </StyledDiv>
    </>
  );
}
