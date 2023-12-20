import styled from "styled-components";
import React, { useState, useContext, useEffect } from "react";
import { signUp } from "../Api/api";
import { MyContext } from "../NerdyShop";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
// 모든 컨텐츠의 부모
const Contents = styled.div`
  width: 1200px;
  min-width: 1200px;
  min-height: 100%;
  min-height: calc(100%-298px);
  margin: 0 auto;
  padding: 33px 0 0;
  position: relative;
`;
// 가입하는 곳 크기
const Joinbody = styled.div`
  margin: 0 auto;
  max-width: 580px;
`;
// 회원가입 타이틀
const Joinbodytitle = styled.b`
  font-weight: 700;
  font-size: 25px;
  letter-spacing: -0.5px;
  display: block;
  color: #000;
`;
// 가입창 기본 속성
const Joinform = styled.form`
  margin: 0;
  padding: 0;
`;
// 각 문단의 제목 ex)본인인증,필수정보 등
const Jointit = styled.b`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  display: block;
  padding: 60px 0 15px;
  color: #000;
`;
// 본인인증 기본 속성
const MobileWrap = styled.div`
  margin: 0;
  padding: 0;
`;
// 모바일 팝업
const MobilePopup = styled.a`
  text-decoration: none;
  color: #000;
`;
// 휴대폰 인증하기 속성
const Phone = styled.span`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #000;
  color: #000;
  font-weight: 600;
  font-size: 15px;
`;
// 입력구간 기본 속성
const Inputwrap = styled.div`
  margin: 0;
  padding: 0;
`;
// 각 문단의 위 아래 선 및 크기 정렬
const Joininfo = styled.div`
  border-top: 1px solid #000000;
  padding: 20px 0;
  border-bottom: 1px solid #dedede;
`;
// 각 문단 기본 속성
const Jointr = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin: 10px 0;
`;
// 각 문단의 입력해야되는 구간 옆 제목
const Jointh = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  width: 130px;
`;
// 입력 구간 서로 띄워놓기
const Jointd = styled.div`
  width: calc(100% - 130px);
`;
// 라벨
const Labelpl = styled.div``;

// 입력창 기본속성
const Input = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid #dedede;
  border-radius: 0;
  font-size: 15px;
  letter-spacing: -0.5px;
  color: #000;
  padding: 0 14px;
  line-height: 45px;
  box-sizing: border-box;
`;
// 이메일쪽 에러 속성
const Moderror = styled.div`
  color: #c8002f;
  font-size: 13px;
  margin: 10px 0;
  padding: 0 0 0 0;
  letter-spacing: -0.5px;
`;
// 개인정보 속성
const Personal = styled.div`
  padding-bottom: 10px;
`;

const Labelplh = styled.div`
  border: 1px solid #cfcfcf;
  margin-bottom: 0;
  position: relative;
  height: 45px;
  line-height: 45px;
  padding: 0 10px;
`;

const Inputtext = styled.input`
  width: 50px;
  height: 41px;
  line-height: 41px;
  margin-top: -3px;
  padding: 0 0;
  border: none;
  outline: none;
  color: #353535;
  font-size: 12px;
  vertical-align: middle;
`;

const Choice = styled.div`
  margin: 0;
  padding: 0;
`;

const Gender = styled.p`
  margin: 0;
  padding: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const Gendercheck = styled.input`
  display: none;

  &:checked + label::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background: url("https://whoisnerdy.com/web/upload/img/radio_checked.png")
      no-repeat center/cover;
    vertical-align: middle;
  }

  &:not(:checked) + label::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background: url("https://whoisnerdy.com/web/upload/img/radio_uncheck.png")
      no-repeat center/cover;
    vertical-align: middle;
  }
`;
const Genderlabel = styled.label`
  margin-right: 30px;
  font-size: 15px;
`;

const Btnjoin = styled.div`
  text-align: center;
  padding: 0 0;
  height: 60px;
  width: 100%;
  margin-bottom: 200px;
`;

const Submitbtn = styled.button`
  border: none;
  outline: none;
  display: block;
  color: #fff;
  width: 100%;
  font-size: 16px;
  text-align: center;
  background: #000;
  line-height: 60px;
  height: 60px;
  font-weight: 600;
`;
export function Register() {

  const navigate = useNavigate();
  const { loginState, setLoginState } = useContext(MyContext);
  const [userRegister, setUserRegister] = useState(null);

  const { data, isLoading, refetch} = useQuery("register", () => {
    if(userRegister){
      // setRegistering(true);
      return signUp(userRegister);
    }
  });

  useEffect(() => {
    refetch();
  }, [userRegister]);

// 버튼 클릭시 정보가 서버로 전송
  const onSubmit = async (e) =>{
    e.preventDefault();
    try{
    const user ={
      username: username,
      password: password,
      name: document.getElementById('realname').value,
      birthDate: `${year}-${month}-${day}`,
      gender: selectedGender,
      email: email,
    };
    console.log(user)
    const response = await signUp(user);

    if (response.resultCode === "SUCCESS"){
      localStorage.setItem("loginState", JSON.stringify({id:userRegister.username}));
      setLoginState({id:username});
      navigate("/signup");
    } else {
      navigate("/login");
    }
  } catch (error) {
    console.error("Error during signup:", error);
  }
}
  // 아이디에 useState를 사용해서 오류를 표시해줌
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    const { value } = event.target;
    setUsername(value);

    if (!isValidUsername(value)) {
      setError("아이디는 영문 소문자 또는 숫자 4~16자로 입력해 주세요.");
    } else {
      setError("");
    }
  };

  const isValidUsername = (value) => {
    const regex = /^[a-z0-9]{4,16}$/;
    return regex.test(value);
  };
  // 비밀번호도 똑같이 오류 표시
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState("");

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  
    // 비밀번호 유효성 검사
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,20}$/;
    const isValidPassword = passwordRegex.test(newPassword);
  
    // 비밀번호가 조건에 맞지 않는 경우 오류 메시지 설정
    if (newPassword.length < 8 || !isValidPassword) {
      setPasswordErrorText("비밀번호는 영문, 숫자, 특수문자를 포함하여 8글자 이상이어야 합니다.");
      setConfirmPasswordErrorText(""); // 다른 오류가 발생하면 비밀번호 확인 오류 초기화
    } else {
      setPasswordErrorText(""); // 조건을 충족할 경우 오류 메시지 초기화
    }
  
    // 비밀번호와 비밀번호 확인 필드가 다른 경우 오류 메시지 설정
    if (confirmPassword && newPassword !== confirmPassword) {
      setConfirmPasswordErrorText("비밀번호가 일치하지 않습니다.");
    } else if (!passwordErrorText) { // 비밀번호 오류가 없을 때만 비밀번호 확인 오류 메시지 초기화
      setConfirmPasswordErrorText("");
    }
  };
  
  // 비밀번호 확인 변경 시
  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmpassword(newConfirmPassword);
  
    // 비밀번호가 다를 때 오류 메시지 설정
    if (password !== newConfirmPassword) {
      setConfirmPasswordErrorText("비밀번호가 일치하지 않습니다.");
    } else if (!passwordErrorText) { // 비밀번호 오류가 없을 때만 비밀번호 확인 오류 메시지 초기화
      setConfirmPasswordErrorText("");
    }
  };

  // 이메일쪽 오류 표시
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(value)) {
      setEmailError("유효한 이메일을 입력해 주세요.");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    validateEmail(value);
  };

  // 생년월일 입력 제한 및 오류 담당
  const [realname, setRealname] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [birthError, setBirthError] = useState("");

  const handleRealnameChange = (event) => {
    const {value} = event.target;
    setRealname(value);
  }

  // 각 입력 필드의 변경 핸들러
  const handleYearChange = (event) => {
    const { value } = event.target;
    setYear(value); // 입력값 그대로 설정
    validateDate();
  };

  const handleMonthChange = (event) => {
    const { value } = event.target;
    setMonth(value); // 입력값 그대로 설정
    validateDate();
  };

  const handleDayChange = (event) => {
    const { value } = event.target;
    setDay(value); // 입력값 그대로 설정
    validateDate();
  };

  const validateDate = () => {
    const numericYear = parseInt(year, 10); // 문자열 year를 숫자로 변환
    if (!(year && month && day)) {
      setBirthError("년월일을 모두 입력하세요.");
    } else if (
      !(numericYear >= 1000 && numericYear <= new Date().getFullYear())
    ) {
      setBirthError("올바른 연도를 입력하세요.");
    } else if (!(month >= 1 && month <= 12)) {
      setBirthError("올바른 월을 입력하세요.");
    } else if (!(day >= 1 && day <= 31)) {
      setBirthError("올바른 일을 입력하세요.");
    } else {
      setBirthError("");
    }
  };

  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  return (
    <>
      <Contents>
        <Joinbody>
          <Joinbodytitle>회원가입</Joinbodytitle>
          <Joinform onSubmit={onSubmit}>
            <Jointit>본인인증하기</Jointit>
            <MobileWrap>
              <MobilePopup>
                <Phone>휴대폰 인증하기</Phone>
              </MobilePopup>
            </MobileWrap>
            <Inputwrap>
              <Jointit>필수정보입력</Jointit>
              <Joininfo>
                <Jointr>
                  <Jointh style={{ padding: "0 0 10px" }}>아이디</Jointh>
                  <Jointd>
                    <Labelpl>
                      <Input
                        style={{ width: "200px", marginTop: "-4px" }}
                        placeholder="아이디"
                        id="loginId"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                      {error && (
                        <div
                          style={{
                            color: "#c8002f",
                            fontSize: "13px",
                            margin: "10px 0",
                            padding: "0 0 0 0",
                            letterspacing: " -0.5px",
                          }}
                        >
                          {error}
                        </div>
                      )}
                    </Labelpl>
                  </Jointd>
                </Jointr>
                <Jointr>
                  <Jointh>비밀번호</Jointh>
                  <Jointd>
                    <Labelpl>
                      <Input
                        style={{ marginBottom: "10px" }}
                        placeholder="비밀번호"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      {passwordErrorText && (
  <span
    style={{
      color: "#c8002f",
      fontSize: "13px",
      margin: "10px 0",
      padding: "0 0 0 0",
      letterSpacing: "-0.5px",
    }}
  >
    {passwordErrorText}
  </span>
)}
                    </Labelpl>
                    <Labelpl>
                      <Input
                        placeholder="비밀번호 확인"
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      {confirmPasswordErrorText && (
  <span
    style={{
      color: "#c8002f",
      fontSize: "13px",
      margin: "10px 0",
      padding: "0 0 0 0",
      letterSpacing: "-0.5px",
    }}
  >
    {confirmPasswordErrorText}
  </span>
)}
                    </Labelpl>
                  </Jointd>
                </Jointr>
                <Jointr>
                  <Jointh>이메일</Jointh>
                  <Jointd>
                    <Labelpl>
                      <Input
                        placeholder="이메일"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      {emailError && <Moderror>{emailError}</Moderror>}
                    </Labelpl>
                  </Jointd>
                </Jointr>
              </Joininfo>
            </Inputwrap>
            <Personal>
              <Jointit>개인정보확인</Jointit>
              <Joininfo
                style={{
                  borderTop: "1px solid #000000",
                  padding: "20px 0",
                  borderBottom: "1px solid #DEDEDE",
                }}
              >
                <Jointr>
                  <Jointh>이름</Jointh>
                  <Jointd>
                    <Labelpl>
                      <Input placeholder="이름" 
                      id="realname"
                      value={realname}
                      onChange={handleRealnameChange}/>
                    </Labelpl>
                  </Jointd>
                </Jointr>
                <Jointr>
                  <Jointh>생년월일</Jointh>
                  <Jointd>
                    <Labelplh>
                      <Inputtext
                        value={year}
                        onChange={handleYearChange}
                        maxLength={4}
                      />
                      년
                      <Inputtext
                        value={month}
                        onChange={handleMonthChange}
                        maxLength={2}
                      />
                      월
                      <Inputtext
                        value={day}
                        onChange={handleDayChange}
                        maxLength={2}
                      />
                      일
                    </Labelplh>
                    {birthError && <span>{birthError}</span>}
                  </Jointd>
                </Jointr>
              </Joininfo>
            </Personal>
            <Choice>
              <Jointit>선택사항</Jointit>
              <Joininfo>
                <Jointr>
                  <Jointh>성별</Jointh>
                  <Jointd>
                    <Labelplh style={{ border: "none" }}>
                      <Gender>
                        <Gendercheck
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                          checked={selectedGender === "male"}
                          onChange={handleGenderChange}
                        />
                        <Genderlabel htmlFor="male">남자</Genderlabel>
                        <Gendercheck
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                          checked={selectedGender === "female"}
                          onChange={handleGenderChange}
                        />
                        <Genderlabel htmlFor="female">여자</Genderlabel>
                      </Gender>
                    </Labelplh>
                  </Jointd>
                </Jointr>
              </Joininfo>
            </Choice>
            <Btnjoin>
              <Submitbtn type="submit">가입하기</Submitbtn>
            </Btnjoin>
          </Joinform>
        </Joinbody>
      </Contents>
    </>
  );
}
