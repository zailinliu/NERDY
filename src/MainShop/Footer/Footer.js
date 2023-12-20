import styled from "styled-components";
import { Icon } from "@iconify/react";
const Container = styled.div`
  position: relative;
  padding: 20px 0;
  width: 100%;
  height: 296px;
  border-top: 1px solid #eaeaea;
`;
const FooterBox = styled.div`
  padding: 50px;
`;
const Img = styled.img`
  width: 70px;
  height: 14px;
`;
const FooterText = styled.div`
  font-size: 11px;
  color: #5f5f5f;
  margin-top: 12px;
  margin-bottom: 4px;
`;

const FooterText2 = styled.div`
  font-size: 10px;
  color: darkgrey;
  p {
    margin-bottom: 4px;
  }
`;

const FooterText3 = styled.div`
  font-size: 10px;
  color: darkgrey;
  margin-top: 12px;
`;

const RightTxt = styled.div`
  position: absolute;
  width: 45%;
  right: 50px;
  top: 70px;
  text-align: right;
  font-size: 12px;
`;

const Ul = styled.ul`
  width: 110px;
  margin-right: 20px;
  display: inline-block;
  text-align: left;
  vertical-align: top;
  list-style: none;
`;
const Li = styled.li`
  padding: 0 0 10px 0;
`;
const A = styled.a`
  color: #9c9c9c;
  font-weight: 400;
  text-decoration: none;
`;
const TelInfo = styled.div`
  width: 180px;
  display: inline-block;
  text-align: left;
`;

const Tel1 = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 10px;
  color: #000000;
`;
const Tel2 = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: #9c9c9c;
`;
const SNS = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  ul {
    list-style: none;
    display: flex;
    position: absolute;
    right: 8%;
    bottom: 15%;
    gap: 1.5rem;
    margin-bottom: -10px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export function Footer() {
  return (
    <>
      <Container>
        <FooterBox>
          <Img
            src="https://whoisnerdy.com/web/upload/images/nerdy_logo_bk.png"
            alt=""
          />
          <FooterText>
            <strong>주식회사 디더블류</strong>
          </FooterText>
          <FooterText2>
            <p>대표이사 : 김대우 / 대전광역시 중구 선화동 DW아카데미 5층</p>
            <p>사업자등록번호 220-88-7777777</p>
            <p>통신매업신고 : 제2020-대전선화-1174</p>
            <p>개인정보책임자 : 이대우(dw123@dw-in.com)</p>
          </FooterText2>
          <FooterText3>
            <p>© NERDY all rights reserved. HostIing by CAFE24</p>
          </FooterText3>
          <RightTxt>
            <Ul>
              <Li>
                <A href="https://whoisnerdy.com/shopinfo/guide.html">
                  이용안내
                </A>
              </Li>
              <Li>
                <A href="https://whoisnerdy.com/member/agreement.html">
                  이용약관
                </A>
              </Li>
              <Li>
                <A href="https://whoisnerdy.com/member/privacy.html">
                  개인정보 처리방침
                </A>
              </Li>
            </Ul>
            <Ul>
              <Li>
                <A href="https://whoisnerdy.com/shopinfo/company.html">
                  회사소개
                </A>
              </Li>
              <Li>
                <A href="https://whoisnerdy.com/board/urgency/urgency.html?board_no=urgency">
                  제휴문의
                </A>
              </Li>
              <Li>
                <A href="https://whoisnerdy.com/shopinfo/membership.html">
                  멤버쉽
                </A>
              </Li>
              <Li>
                <A href="https://whoisnerdy.com/board/urgency/urgency.html?board_no=urgency">
                  파트너쉽
                </A>
              </Li>
            </Ul>
            <TelInfo>
              <Tel1>1544-2083</Tel1>
              <Tel2>
                09: - 18:00(I토, 일, 공휴일 휴무)
                <br />
                LUNCH 12:00 - 13:00
              </Tel2>
            </TelInfo>
            <SNS>
              <ul>
                <li>
                  <a href="https://www.facebook.com/whoisnerdy/">
                    <Icon icon="gg:facebook" width="22" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCbbafMeGLEtEjPLL2QLiShA">
                    <Icon icon="jam:youtube" width="22" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/nerdyofficial/">
                    <Icon icon="lets-icons:insta-light" width="22" />
                  </a>
                </li>
              </ul>
            </SNS>
          </RightTxt>
        </FooterBox>
      </Container>
    </>
  );
}
