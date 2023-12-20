import { useEffect, useRef, useState, useCallback } from "react";
import styled from "styled-components";
import { getAllMBSlide } from "../../Api/api";

// 슬라이드 한개의 크기를 여기서 세팅함(px)
// 화면 전체는 window.innerWidth, window.innerHeight를 사용
const WIDTH = 1897;
const DRAG_THRESHOLD = 20; // 일정 거리 이상 이동해야 슬라이드를 넘김
const PageCount = 2;

// 화면전체. 슬라이드 컨테이너를 화면 가운데 배치
const Wrapper = styled.div`
  width: 100vw;
  /* height:770px; */
  height: ${(props) => props.height}px;
  display: flex;
  position: relative;
`;
// 슬라이드 1개를 보여주는 윈도우. 슬라이드 하나의 사이즈를 가짐(액자형식)
const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  user-select: none; /* 드래그 시 텍스트 선택 방지 */
  /* height: 100%;   
  max-width: 1920px;
  min-width: 1200px; */
  /* cursor: grab; 드래그 가능한 커서로 설정 */
`;
// 이동하는 슬라이드, 여러개의 슬라이드가 연결되어있음
const Slide = styled.div`
  display: flex;
  position: relative;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.$translateX}px);
  z-index: 1;
`;

// 슬라이드페이지 1개의 스타일링
const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${(props) => props.$left}px;
  top: 0;
  z-index: 1;
`;
const PageWrapper = styled(Page)``;

const Img = styled.img`
  height: 100%;
`;
// StatusBar ( 슬라이드 전체 범위 표시 바)
const StatusBar = styled.div`
  position: absolute;
  width: 80%;
  height: 3px;
  left: 10%;
  bottom: 50px;
  padding: 0 0;
  margin: 0;
  border-radius: 1px;
  background: black;
  opacity: 0.8;
  z-index: 2;
`;

// InnerBar (이동하는 바)
const InnerBar = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background: white;
  border-radius: 10px;
  left: 0;
  top: 0;
  width: calc(100% / ${PageCount}); // InnerBar의 너비
  transition: transform 0.5s ease;
  z-index: 3;
  transform: translateX(${(props) => `calc(759px * ${props.currentPage})`});
`;

//슬라이드 내 txt 문구
const TxtdivWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  left: 10%;
  padding-right: 30px;
  bottom: 15%;
  color: #fff;
  transition: all 1s ease-out;
  transition-delay: 0.5s;
  opacity: ${(props) => (props.active ? 1 : 0)};
  z-index: 5;
`;
const Txtdiv1 = styled.div`
  display: block;
  font-size: 18px;
  font-weight: 300;
  margin: 0 0 20px;
  line-height: 1.5;
`;
const Txtdiv2 = styled.div`
  display: block;
  font-size: 28px;
  font-weight: 500;
  margin: 0 0 8px 0;
  line-height: 1.2;
`;
const Txtdiv3 = styled.div`
  display: block;
  font-size: 20px;
  font-weight: 200;
  line-height: 1.2;
`;

export function MBSlide() {
  const [currentPage, SetCurrentPage] = useState(0);
  const pageList = Array.from({ length: PageCount }).map((_, index) => (
    <CreatePage
      key={index}
      index={index}
      left={index * WIDTH}
      generateImgUrl={(index) => getImageUrlForIndex(index)}
      currentPage={currentPage}
    />
  ));
  const [slideX, setSlideX] = useState(0);
  const dragStartX = useRef(null);
  const isDragging = useRef(false);
  const pageWidth = WIDTH; // 각 페이지의 너비
  const totalPageCount = pageList.length;

  // 페이지 순환 함수
  const getNextPage = useCallback(
    (page) => (page + 1) % totalPageCount,
    [totalPageCount]
  );
  const getPrevPage = useCallback(
    (page) => (page - 1 + totalPageCount) % totalPageCount,
    [totalPageCount]
  );

  //슬라이드 좌우 버튼함수
  function handleLeftBtn() {
    setSlideX((prevSlideX) => {
      // 변경된 부분: 현재 페이지가 첫 번째 페이지일 때, 마지막 페이지로 이동
      if (currentPage === 0) {
        return -(totalPageCount - 1) * pageWidth;
      }
      return Math.min(prevSlideX + pageWidth, 0);
    });
    SetCurrentPage((prevPage) => getPrevPage(prevPage));
  }

  const handleRightBtn = useCallback(() => {
    setSlideX((prevSlideX) => {
      if (currentPage === totalPageCount - 1) {
        return 0;
      }
      return Math.max(
        prevSlideX - pageWidth,
        -(totalPageCount - 1) * pageWidth
      );
    });
    SetCurrentPage((prevPage) => getNextPage(prevPage));
  }, [currentPage, totalPageCount, pageWidth, getNextPage]);

  // 자동 슬라이드 동작을 수행하는 useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      handleRightBtn();
    }, 3000);

    return () => clearInterval(interval);
  }, [handleRightBtn]);

  //드래그 시 슬라이드 이동 실행 부
  function handleDragStart(e) {
    dragStartX.current = e.clientX;
    isDragging.current = true;
  }

  function handleDragMove(e) {
    e.preventDefault(); // 드래그 중 기본 동작을 막음
    if (isDragging.current) {
      const distance = e.clientX - dragStartX.current;
      if (Math.abs(distance) > DRAG_THRESHOLD) {
        if (distance > 0) {
          handleLeftBtn();
        } else {
          handleRightBtn();
        }
        dragStartX.current = e.clientX;
        isDragging.current = false;
      }
    }
  }

  function handleDragEnd() {
    dragStartX.current = null;
    isDragging.current = false;
  }

  return (
    <>
      <Wrapper style={{ height: "770px" }}>
        <Container
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
        >
          <Slide style={{ transform: `translateX(${slideX}px)` }}>
            {pageList}
          </Slide>
          <StatusBar>
            {/*InnerBar의 width를 현재 페이지 1개분으로 설정 */}
            <InnerBar currentPage={currentPage} />
          </StatusBar>
        </Container>
      </Wrapper>
    </>
  );
}

function CreatePage({ index, left, generateImgUrl, currentPage }) {
  const imgUrl = generateImgUrl(index);

  const renderTxt = () => {
    if (index === 0) {
      return (
        <TxtdivWrapper active={currentPage === 0}>
          <Txtdiv1>11.10 - 11.26</Txtdiv1>
          <Txtdiv2>PURPLE FRIDAY</Txtdiv2>
          <Txtdiv3>1년에 단 한번! 역대급 할인 혜택</Txtdiv3>
        </TxtdivWrapper>
      );
    } else if (index === 1) {
      return (
        <TxtdivWrapper active={currentPage === 1}>
          <Txtdiv1>23FW</Txtdiv1>
          <Txtdiv2>RISE ANEW, NERDY</Txtdiv2>
          <Txtdiv3>세븐틴 THE 8과 함께한 23F/W 컬렉션</Txtdiv3>
        </TxtdivWrapper>
      );
    }
    return null;
  };
  return (
    <PageWrapper $left={left} key={index}>
      <Img src={imgUrl} alt="" />
      {renderTxt()}
    </PageWrapper>
  );
}
function getImageUrlForIndex(index) {
  if (index % 2 === 0) {
    return `https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/04e7f7ca1797c81236959ab9395b1552.jpg`;
  } else {
    return `https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/f85c783fe46b384389d73b0bb2e04784.jpg`;
  }
}
