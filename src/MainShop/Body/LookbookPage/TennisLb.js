import styled from "styled-components";

const Container = styled.div`
  width: 100%;
    min-width: 1200px;
    min-height: 100%;
    margin: 0 auto;
    padding: 0 0 0 0;
    position: relative;
`;
const Landing = styled.div`
      overflow: hidden;
    margin: 0 auto;
    width: 700px;
    position: relative;
`;
const ImgWrapper = styled.div`
position: relative;
`
const Img = styled.img`
border: none;
    vertical-align: top;
    width:100%;
`


export function TennisLb() {
  return (
    <>
      <Container>
        <Landing>
          <ImgWrapper>
            <Img src="https://whoisnerdy.com/web/upload/event/2023/tennis_01.jpg" alt=""/>
          </ImgWrapper>
          <ImgWrapper>
            <Img src="https://whoisnerdy.com/web/upload/event/2023/tennis_02.jpg" alt=""/>
          </ImgWrapper>
          <ImgWrapper>
            <Img src="https://whoisnerdy.com/web/upload/event/2023/tennis_04.jpg" alt=""/>
          </ImgWrapper>
          {/* 4-5 사이에 스와이퍼 컨텐츠하나 있음 */}
          {/* 5번테니스 사진에 a태그 하나있음 */}
          <ImgWrapper>
            <Img src="https://whoisnerdy.com/web/upload/event/2023/tennis_05.jpg" alt=""/>
          </ImgWrapper>
          <ImgWrapper>
            <Img src="https://whoisnerdy.com/web/upload/event/2023/tennis_06.jpg" alt=""/>
          </ImgWrapper>
          <ImgWrapper>
            <Img src="https://whoisnerdy.com/web/upload/event/2023/tennis_07.jpg" alt=""/>
          </ImgWrapper>
          <ImgWrapper>
            <Img src="https://whoisnerdy.com/web/upload/event/2023/tennis_08.jpg" alt=""/>
          </ImgWrapper>
          <ImgWrapper>
            <Img src="https://whoisnerdy.com/web/upload/event/2023/tennis_09.jpg" alt=""/>
          </ImgWrapper>
          <ImgWrapper>
            <Img src="https://whoisnerdy.com/web/upload/event/2023/tennis_10.jpg" alt=""/>
          </ImgWrapper>
          {/* 10번이후 스와이퍼 컨텐츠 */}
          {/* 비디오 컨텐츠 */}
          <ImgWrapper>
            <Img src="https://whoisnerdy.com/web/upload/event/2023/tennis_12.jpg" alt=""/>
          </ImgWrapper>
        </Landing>
      </Container>
    </>
  );
}
