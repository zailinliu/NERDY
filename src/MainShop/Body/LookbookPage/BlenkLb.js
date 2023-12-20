
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
    iframe{
  
    width: 100%;
    height: 1062.59px;
    }
`;
const ImgWrapper = styled.div`
position: relative;
`
const Img = styled.img`
border: none;
    vertical-align: top;
    width:100%;
`


export function BlenkLb() {
  return (
    <>
      <Container>
        <Landing>
        <iframe data-id="Xi_x8OOjXXU" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" width="100%" height="100%" src="https://www.youtube.com/embed/Xi_x8OOjXXU?autoplay=1&amp;loop=1&amp;controls=0&amp;showinfo=0&amp;autohide=1&amp;rel=0&amp;modestbranding=1&amp;playsinline=1&amp;vq=hd1080&amp;playlist=Xi_x8OOjXXU&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwhoisnerdy.com&amp;widgetid=1" id="widget2" data-gtm-yt-inspected-17="true" data-gtm-yt-inspected-20="true"/>
          <ImgWrapper>
          <Img src="https://whoisnerdy.com/web/upload/event/2023/23exc_02.jpg" alt=""/>
          </ImgWrapper>
          <ImgWrapper>
          <Img src="https://whoisnerdy.com/web/upload/event/2023/23exc_03.jpg" alt=""/>
          </ImgWrapper>
          <ImgWrapper>
          <Img src="https://whoisnerdy.com/web/upload/event/2023/23exc_04.jpg" alt=""/>
          </ImgWrapper>
          {/* 4-5 사이에 스와이퍼 컨텐츠하나 있음 */}
          {/* 5번테니스 사진에 a태그 하나있음 */}
          <ImgWrapper>
          <Img src="https://whoisnerdy.com/web/upload/event/2023/23exc_05.jpg" alt=""/>
          </ImgWrapper>
        </Landing>
      </Container>
    </>
  );
}
