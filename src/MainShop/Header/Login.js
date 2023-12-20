import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { login } from "../Api/api";
import { MyContext } from "../NerdyShop";
/**
 * @typeof {Object} CheckProps;
 * @property {boolean} isChecked;
 * @param {CheckProps} props;
 */

// 기본적인 틀
const Container = styled.div`
  width: auto;
  min-width: 1000px;
  min-height: 100%;
  min-height: calc(1005 -298px);
  padding: 33px 0 0 0;
  margin: 0 auto;
  position: relative;
`;
// 틀 안의 실질적인 내용이 들어가는ㄱ소
const Content = styled.div`
  margin: 0;
  padding: 0;
  display: block;
`;
// 로그인바
const Loginbar = styled.div`
  width: 390px;
  margin: 0 auto;
  display: block;
`;
// 로그인 제목
const Logintitle = styled.div`
  font-size: 25px;
  color: #000;
  padding: 23px 0 0;
  margin-bottom: 83px;
  text-align: center;
  letter-spacing: -0.5px;
  font-weight: 600;
`;
// 로그인바의 기본 속성
const Filedset = styled.fieldset`
  border: none;
  display: block;
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  padding-block-start: 0.35em;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  padding-block-end: 0.625em;
  min-inline-size: min-content;
  border-width: 2px;
  /* border-style: groove; */
  border-color: rgb(192, 192, 192);
  border-image: initial;
`;
// 아이디 비밀번호 입력창 부모
const FormBox = styled.div`
  position: relative;
  margin: 0px 0 0;
  font-size: 14px;
  color: #424242;
`;
// 자식요소
const Form = styled.div`
  margin: 0 0px 0 0;
`;
// 아이디 비밀번호 입력창의 문구
const Eplaceholder = styled.label``;
// 입력하는 곳
const Input = styled.input`
  margin: 0 0 7px;
  color: #000;
  font-weight: 400;
  outline: none;
  font-size: 15px;
  width: 100%;
  text-indent: 5px;
  margin: 0;
  padding: 0;
  height: 58px;
  line-height: 58px;
  background: #ffffff;
  border: none;
  border-bottom: 1px solid #dedede;
  box-sizing: border-box;
`;
// 자동로그인 및 비회원주문조회나 id/pw찾기 부모
const Findinfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0 25px;
`;
// 자동로그인
const Security = styled.p`
  margin: 0;
  padding: 0;
  display: flex;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
// 자동로그인 체크
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const CHECKED = "https://whoisnerdy.com/web/upload/img/join_checked.png";
const UNCHECKED = "https://whoisnerdy.com/web/upload/img/join_unchecked.png";

// 체크박스
const Check = styled.div`
  border-radius: 0;
  margin: 0 6px 0 0;
  width: 15px;
  height: 15px;
  border: 0;
  /* 클릭시 이미지 바뀌며 자동로그인 체크 */
  background: url(${(props) => (props.isChecked ? CHECKED : UNCHECKED)})
    no-repeat;
  background-size: cover;
`;
// 자동 로그인 문구
const Membercheck = styled.span`
  margin: 0;
  cursor: pointer;
`;
// 비회원 주문조회 및 id/pw찾기
const Typelogin = styled.div`
  position: relative;
  padding: 0 8px 0 0;
  display: inline-block;
  font-weight: normal;
  font-size: 14px;
  color: #424242;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
// 비회원 주문조회창
const Notmember = styled.a`
  color: #424242;
  font-family: "Apple SD Gothic Neo";
  text-decoration: none;
`;
// id/pw찾기창
const Findidpass = styled.a`
  padding: 0 0 0 8px;
  color: #424242;
  font-family: "Apple SD Gothic Neo";
  text-decoration: none;
  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 5px;
    left: 106px;
    width: 1px;
    height: 12px;
    background: #dbdbdb;
  }
`;
// 로그인 버튼
const Btnbox = styled.div`
  padding: 10px 0 0 0;
`;
// 로그인 버튼 속성
const Button = styled.button`
  display: block;
  background: #000;
  border: none;
  text-align: center;
  width: 100%;
  color: #fff;
  height: 60px;
  line-height: 60px;
  font-size: 15px;
  letter-spacing: -1px;
  font-weight: 500;
`;
// 회원가입 창 부모
const Joinbox = styled.div`
  text-align: center;
  position: relative;
`;
// 회원가입 자식
const Joinspace = styled.div`
  margin: 20px 0;
`;
// 회원가입 클릭
const Join = styled.a`
  text-decoration: none;
  display: block;
  background: #fff;
  color: #000;
  border: 1px solid #d4d4d4;
  font-size: 15px;
  line-height: 50px;
  border-radius: 25px;
  letter-spacing: -1px;
  color: #787878;
  line-height: 21px;
  border: none;
  position: relative;
  display: inline-block;
  ::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #787878;
  }
`;
// 또는창 부모
const Orwrap = styled.div`
  position: relative;
  margin: 48px 0;
  border-bottom: 1px solid #eaeaea;
`;
// 또는 속성
const Or = styled.div`
  display: block;
  height: 20px;
  line-height: 20px;
  background: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -9px;
  font-size: 12px;
  font-weight: 300;
  color: #000;
  padding: 0 10px;
`;
// SNS쪽 창 부모
const SnsSync = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 12px;
  max-width: 250px;
  margin: auto;
  margin-bottom: 100px;
`;
// 이미지 및 글자
const KaKaologin = styled.a`
  width: 33.3%;
  position: relative;
  box-sizing: border-box;
  display: block;
  text-decoration: none;
  color: #000;
  img {
    width: 48px;
    margin: auto;
    display: block;
  }
  span {
    font-size: 14px;
    display: block;
    color: #424242;
  }
`;
// 이미지 및 글자
const Naverlogin = styled.a`
  width: 33.3%;
  position: relative;
  box-sizing: border-box;
  display: block;
  text-decoration: none;
  color: #000;
  img {
    width: 48px;
    margin: auto;
    display: block;
  }
  span {
    font-size: 14px;
    display: block;
    color: #424242;
  }
`;
// 이미지 및 글자
const Applelogin = styled.a`
  width: 33.3%;
  position: relative;
  box-sizing: border-box;
  display: block;
  text-decoration: none;
  color: #000;
  img {
    width: 48px;
    margin: auto;
    display: block;
  }
  span {
    font-size: 14px;
    display: block;
    color: #424242;
  }
`;
export function Login() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin, setUserLogin] = useState(null);
  const [loggingIn, setLoggingIn] = useState(false);
  const { loginState, setLoginState } = useContext(MyContext);
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useQuery(
    "login",
    () => {
      if (userLogin) {
        setLoggingIn(true);
        return login(userLogin);
      }
    },
    { retry: 0 }
  );

  useEffect(() => {
    if (data) {
      if (data.resultCode === "SUCCES" && userLogin) {
        console.log(data);
        localStorage.setItem(
          "loginState",
          JSON.stringify({ id: userLogin.username })
        );
        setLoginState({ id: userLogin.username });
        navigate("/");
      } else if (data.resultCode === "ERROR") {
        navigate("/login");
      }
      setLoggingIn(false);
    }
  }, [data]);

  console.log(loggingIn);
  useEffect(() => {
    refetch();
  }, [userLogin]);

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    setUserLogin(user);
  }
  return (
    <>
      {loggingIn ? (
        <h1>로그인중입니다... </h1>
      ) : loginState?.id ? (
        <h1> 이미 로그인되어 있습니다. {loginState.id}</h1>
      ) : (
        <>
          <Container>
            <Content>
              <Loginbar>
                <Logintitle>로그인</Logintitle>
                <Filedset>
                  <FormBox>
                    <form onSubmit={onSubmit}>
                      <Eplaceholder>
                        <Input
                          placeholder="아이디"
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                          placeholder="비밀번호"
                          id="password"
                          value={password}
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Eplaceholder>
                      <Btnbox>
                        <Button type="submit">로그인 하기</Button>
                      </Btnbox>
                    </form>
                    <Findinfo>
                      <Security>
                        <HiddenCheckbox
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheck}
                          id="checkboxId"
                        />
                        <Check isChecked={isChecked} onClick={handleCheck} />
                        <Membercheck
                          htmlFor="checkboxId"
                          onClick={() => handleCheck()}
                        >
                          자동 로그인
                        </Membercheck>
                      </Security>
                      <Typelogin>
                        <Notmember>비회원 주문조회</Notmember>
                        <Findidpass>ID/PW찾기</Findidpass>
                      </Typelogin>
                    </Findinfo>

                    <Joinbox>
                      <Joinspace>
                        <Join href="/register">
                          <text>일반 회원가입</text>
                        </Join>
                      </Joinspace>
                    </Joinbox>
                    <Typelogin />
                  </FormBox>
                </Filedset>
                <Orwrap>
                  <Or>또는</Or>
                </Orwrap>
                <SnsSync>
                  <KaKaologin href="#none">
                    <img
                      src="https://whoisnerdy.com/web/upload/icon/ico_kakao.png"
                      alt=""
                    />
                    &nbsp;
                    <span>카카오</span>
                  </KaKaologin>
                  <Naverlogin href="#none">
                    <img
                      src="https://whoisnerdy.com/web/upload/icon/ico_naver.png"
                      alt=""
                    />
                    &nbsp;
                    <span>네이버</span>
                  </Naverlogin>
                  <Applelogin href="#none">
                    <img
                      src="https://whoisnerdy.com/web/upload/icon/ico_apple.png"
                      alt=""
                    />
                    &nbsp;
                    <span>애플</span>
                  </Applelogin>
                </SnsSync>
              </Loginbar>
            </Content>
          </Container>
        </>
      )}
    </>
  );
}
