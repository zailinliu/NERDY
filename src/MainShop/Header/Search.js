import styled from "styled-components";
import { useState } from "react";

// 기본적인 배경
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
// 안에 만들 작은 배경
const Subcontainer = styled.div`
  width: 1200px;
  min-height: 100%;
  min-height: calc(100% - 298px);
  margin: 0 auto;
  padding: 33px 0 0 0;
  position: relative;
`;
// 검색창의 요소
const SearchBox = styled.div`
  display: flex;
  border-bottom: solid 2px black;
  align-items: center;
  justify-content: space-between;
  width: 432px;
  margin: 0 auto;
  padding: 14px 0;
  margin-bottom: 68px;
  input {
    font-size: 24px;
    font-weight: 500;
    border: none;
    outline: none;
    height: auto;
    padding: 0;
  }
  p {
    font-size: 14px;
    color: #000;
    font-weight: 500;
    margin-left: auto;
    margin-right: 22px;
  }
  a {
    /* position: absolute; */
    top: -3px;
    margin-left: 6px;
  }
`;
// 인기검색어 및 추천카테고리를 한데 묶는 박스
const Metaform = styled.div`
  display: flex;
  flex: 0 0 auto;
  height: 260px;
  margin: 0;
  margin-bottom: 76px;
  padding: 0;
`;
// 인기검색어와 추천카테고리의 거리를 서로 떨어뜨리는 박스
const SearchMeta = styled.div`
  width: 100%;
  justify-content: space-between;
  margin-bottom: 16px;
`;
// 인기검색어와 랭킹을 한데 묶는 박스
const Topsearch = styled.div`
  /* display: flex; */
  justify-content: space-between;
  margin-bottom: 38px;
`;
// 인기 검색어 요소
const Populear = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
`;
// 랭킹을 한데 묶는 요소
const AllList = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
`;
// 랭킹 하나하나의 요소
const Record = styled.li`
  margin-right: 10px;
  list-style: none;
`;
//랭킹 요소의 크기 및 글자를 정하는것
const TopNum = styled.a`
  display: flex;
  align-items: center;
  height: 34px;
  border-radius: 17px;
  border: solid 1px #0b0b0b;
  box-sizing: border-box;
  padding: 0 15px 0 14px;
  line-height: 1;
  font-size: 13px;
`;
// 랭킹 숫자 css
const Index = styled.span`
  color: purple;
  margin-right: 5px;
`;
// 추천카테고리의 큰박스
const Recommended = styled.div``;
// 추천카테고리 제목
const TitleBox = styled.div`
  margin-bottom: 20px;
`;
// 카테고리 박스
const Category = styled.ul`
  display: flex;
  list-style: none;
`;
const Things = styled.li`
  display: flex;
  position: relative;
  margin-right: 13px;
  font-size: 14px;
  list-style: none;
`;
const Thing = styled.a`
  position: relative;
  display: block;
  width: 212px;
  height: 125px;
  background: url() 0 0 no-repeat;
  background-size: 100% 100%;
`;
const ThingText = styled.span`
  position: absolute;
  top: 14px;
  left: 12px;
  line-height: 1;
  font-weight: 500;
  z-index: 10;
`;

export function Search() {
  // 검색창의 useState
  const [searchKeyword, setSearchKeyword] = useState("");
  // 버튼 클릭으로 버튼안에 있는 텍스트를 검색창으로 이동
  const handleLinkClick = (text) => {
    setSearchKeyword(text);
  };
  // 클릭했을때 이벤트를 발생해서 값을 전달
  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };
  // 검색창에 입력된 값 검색
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    console.log("검색어:", searchKeyword);

    await sendSearchKeywordToServer();
  };
  // 배열로 요소를 만들어서 정해둠 나중에 요소를 바꿔서 서버에서 검색을 제일 많이 한걸로 나타나게 하기
  const rankings = [
    "THE 8",
    "세븐틴",
    "신상품",
    "트랙",
    "후드티",
    "바람막이",
    "플리스",
    "조거팬츠",
  ];
  const imgurl = [
    "https://whoisnerdy.com/web/upload/images/search_category2.png?ver=0829",
    "https://whoisnerdy.com/web/upload/images/search_category1.png?ver=0829",
  ];
  // 서버로 검색어를 보내는 코드
  const sendSearchKeywordToServer = async () => {
    try {
      const response = await fetch("http://your-backend-server/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyword: searchKeyword }), // 검색어를 JSON 형태로 백엔드에 전송
      });

      if (response.ok) {
        const data = await response.json();
        // 서버로부터 받은 데이터 처리
        console.log(data);
      } else {
        console.error("서버로부터 데이터를 받지 못했습니다.");
      }
    } catch (error) {
      console.error("요청 중 오류가 발생했습니다.", error);
    }
  };
  return (
    <>
      <Container>
        <Subcontainer>
          <SearchBox onSubmit={handleSearchSubmit}>
            <input
              id="keyword"
              name="keyword"
              value={searchKeyword}
              onChange={handleSearchInputChange}
              placeholder="검색어를 입력해주세요"
            />
            <a onClick={handleSearchSubmit}>
              <img src="https://whoisnerdy.com/web/upload/images/icotb_zoom.png" />
            </a>
          </SearchBox>
          <Metaform>
            <SearchMeta>
              <Topsearch>
                <Populear>
                  <h4>인기 검색어</h4>
                </Populear>
                <AllList>
                  {rankings.map((item, index) => (
                    // 랭킹이라는 배열을 맵으로 item index로 나누어서 순위에따라 아이템이 자동으로 들어가게 만듬
                    <Record key={index}>
                      <TopNum
                        href="#"
                        onClick={() => handleLinkClick(item)}
                        // 클릭을 하는 순간 검색창에 입력이 되게함
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {/* 표시되는 랭킹숫자와 그에 맞춘 배열 */}
                        <Index>{index + 1}</Index> {item}
                      </TopNum>
                    </Record>
                  ))}
                </AllList>
              </Topsearch>
              <Recommended>
                <TitleBox>
                  <h4>추천 카테고리</h4>
                </TitleBox>
                <Category>
                  <Things>
                    {/* imgurl 배열을 매핑하여 Thing 컴포넌트에 이미지 전달 */}
                    {imgurl.map((imageUrl, index) => (
                      <Thing key={index} href="#" imageUrl={imageUrl} />
                    ))}
                    <ThingText />
                  </Things>
                </Category>
              </Recommended>
            </SearchMeta>
          </Metaform>
        </Subcontainer>
      </Container>

      {/* <ul>
        <li th:each="product : ${searchResults}">
            <span th:text="${product.name}"></span> - <span th:text="${product.description}"></span>
        </li>
    </ul> */}
    </>
  );
}
