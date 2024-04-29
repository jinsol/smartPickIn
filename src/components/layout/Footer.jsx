import React from "react";
import styled from "styled-components";
import { IoChatbubble, IoMegaphone, IoChevronDownSharp } from "react-icons/io5";

const FooterBlock = styled.footer`
  z-index: 99999;
  position: relative;
  background-color: var(--blue);
  color: white;
  min-height: 300px;
  place-items: center;
  display: grid;
  padding: 8vh 0;
  & > ul.nav {
    width: 92.5%;
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: auto auto;
    @media (max-width: 1100px) {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`;

const CompanyInfo = styled.li`
  display: grid;
  ul {
    display: flex;
    /* gap: 0 16px; */
    @media (max-width: 1100px) {
      justify-content: center;
    }
  }
  .logo {
  }
  .company {
  }

  .copyright {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
  }
`;

const Logo = styled.ul`
  gap: 20px;
  .logo {
    width: 110px;
  }
`;

const FamilySite = styled.li`
  position: relative;
  &.depth1 > a {
    display: block;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid white;
    font-weight: 600;
    letter-spacing: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    svg {
      transition: all 0.3s;
    }
  }
  .depth2 {
    position: absolute;
    display: none !important;
    width: 100%;
    max-height: 140px;
    background-color: white;
    color: red;
    overflow-y: scroll;
    flex-direction: column;
    li {
      a {
        display: block;
        padding: 10px 20px;
        transition: display 0 visibility 0.5s;
      }
    }
  }
  &.on {
    &.depth1 > a > svg {
      transform: rotate(180deg);
    }
    .depth2 {
      display: flex !important;
      li {
        a {
          display: block;
          visibility: visible;
          opacity: 1;
        }
      }
    }
    background-color: red;
  }
`;

const Company = styled.ul`
  display: flex;
  padding: 1em 0;
  li {
    display: flex;
    align-items: center;
    &:not(:last-child)::after {
      content: "|";
      padding: 0 20px;
    }
    a {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

const Address = styled.ul`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.4em 0;
  @media (max-width: 1100px) {
    width: 100%;
  }
  li {
    display: inline-flex;
    align-items: center;
    font-weight: 300;
    &:not(:last-child)::after {
      content: "|";
      padding: 0 16px;
    }
    a {
      font-weight: 300;
      letter-spacing: 0;
    }
  }
`;

const Copyright = styled.ul`
  padding: 1em 0;
`;

const TelInfo = styled.li`
  position: relative;
  h4 {
    text-align: right;

    * {
      display: block;
    }
    a {
      font-size: 48px;
    }
    button {
      padding: 10px 15px;
      border: 1px solid white;
      border-radius: 50px;
    }
  }
  @media (max-width: 1100px) {
    h4 {
      display: flex;
      align-items: center;
      * {
        display: inline-block;
      }
    }
  }
  .icon {
    position: absolute;
    font-size: 60px;
    width: 60px;
    height: 60px;
    inset: 0;
    transform: translate(-100%, -100%);
    transition: all 0.3s;
    .iconBackground {
      transform: scaleX(-1);
    }
    .iconElement {
      color: var(--blue);
      position: absolute;
      inset: 0;
      transform: scale(0.5);
    }
    @media (max-width: 1100px) {
      transform: translate(-100%, -70%);
    }
  }
`;

const ModalBox = styled.ul`
  display: none;
  width: 80%;
  height: 80%;
  position: fixed;
  inset: 10% 10%;
  z-index: 100000;
  background-color: white;
  .Title {
    background-color: var(--blue);

    ul {
      display: flex;
      justify-content: space-between;
    }
  }
  .Contents {
    overflow-y: scroll;
    p {
      color: gray;
    }
  }
  &.on {
    display: block;
  }
`;

const BlackBox = styled.div`
  &.on {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.9);
  }
`;
const Footer = () => {
  const onClickFamilySite = (e) => {
    e.preventDefault();
    e.target.parentElement.classList.toggle("on");
  };

  const onClickPersonalData = (e) => {
    e.preventDefault();
    document.querySelector(".ModalBox").classList.add("on");
    document.querySelector(".BlackBox").classList.add("on");
  };

  const onClickClose = (e) => {
    e.preventDefault();
    document.querySelector(".ModalBox").classList.remove("on");
    document.querySelector(".BlackBox").classList.remove("on");
  };

  return (
    <FooterBlock>
      <ul className="nav">
        <CompanyInfo className="info">
          <Logo>
            <li className="logo">
              <img src="/assets/image/logo_white.png" alt="스마트픽인" />
            </li>
            <FamilySite className="depth1">
              <a href="#" onClick={onClickFamilySite}>
                Family Site <IoChevronDownSharp />
              </a>
              <ul className="depth2">
                <li>
                  <a href="#">에이치엘스토리</a>
                </li>
                <li>
                  <a href="#">피웹</a>
                </li>
                <li>
                  <a href="#">스마트픽인</a>
                </li>
                <li>
                  <a href="#">백링크 매거진</a>
                </li>
                <li>
                  <a href="#">에이치엘스터디</a>
                </li>
                <li>
                  <a href="#">에이치엘디자인</a>
                </li>
              </ul>
            </FamilySite>
          </Logo>
          <Company className="company">
            <li>
              <a href="#">문의하기</a>
            </li>
            <li>
              <a href="#">SEO 제안서 다운받기</a>
            </li>
            <li>
              <a href="#" onClick={onClickPersonalData}>
                개인정보처리방침
              </a>
            </li>
          </Company>
          <Address className="address">
            <li>스마트픽인 (상호 : 에이치엘스토리)</li>
            <li>대표이사 최진명</li>
            <li>부산광역시 남구 용소로 40번길 16 4F</li>
            <li>사업자등록번호 425-81-00741</li>
            <li>통신판매신고 제 2018-부산수영-0073호</li>
            <li>
              <a href="#">TEL. 1588-1815</a>
            </li>
            <li>
              <a href="#">FAX. 051-959-1815</a>
            </li>
            <li>
              <a href="#">hlstorycom@daum.net</a>
            </li>
          </Address>
          <Copyright className="copyright">
            <li>
              ©2023 SMART Pick in. All rights reserved. Designed by HL-STORY
            </li>
          </Copyright>
        </CompanyInfo>
        <TelInfo className="tel">
          <h4>
            <a href="tel:1588-1815">1588-1815</a>
            <button>내선번호 2번</button>
          </h4>
          <span className="icon">
            <IoChatbubble className="iconBackground" />
            <IoMegaphone className="iconElement" />
          </span>
        </TelInfo>
      </ul>
      <ModalBox className="ModalBox">
        <li className="Title">
          <ul>
            <li>개인정보처리방침</li>
            <li>
              <a href="#" onClick={onClickClose}>
                x버튼
              </a>
            </li>
          </ul>
        </li>
        <li className="Contents">
          <p>
            스마트픽인은 웹사이트(https://site-high.com) 이용 및 제반 서비스
            제공시 개인정보보호법령에 따라 이용자의 개인정보 보호 및 권익을
            보호하고 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은
            처리방침을 두고 있습니다. 1. 개인정보 수집에 대한 동의 스마트픽인은
            이용자가 개별 서비스 신청시 개인정보 수집 및 이용에 동의할 수 있는
            절차를 마련하고 있습니다. 이용자는 동의를 거부할 수 있으며 동의를
            거부하는 경우 해당 서비스 이용이 제한될 수 있습니다. 2. 개인정보
            수집에 대한 동의 스마트픽인은 수집한 개인정보를 다음의 목적을 위해
            활용합니다. 1. 서비스 이용에 따른 본인식별, 실명확인, 가입의사 확인
            2. 고지사항 전달, 의사소통 경로 확보 3. 신규 서비스 등 최신정보 개인
            맞춤 서비스 제공을 위한 자료 4. 불량회원 부정 이용 방지 및 비인가
            사용 방지 5. 기타 원활한 양질의 서비스 제공 3. 개인정보 수집 항목 및
            방법 스마트픽인은 기본적인 서비스 제공을 위한 필수 정보만을 수집하고
            있으며, 선택 정보의 경우 입력하지 않더라도 서비스 이용이 제한되지
            않습니다. 스마트픽인은 수집한 정보를 이용 목적 외의 목적으로
            사용하지 않습니다. [회원가입 수집항목] 이름, 휴대전화번호, 이메일,
            업체명 [문의하기 수집항목] 기업명, 연락처, 이메일, 사이트 4.
            개인정보의 보유 및 이용기간 회원가입을 탈퇴하거나 회원에서 제명된 때
            까지 (다만, 수집목적 또는 제공받은 목적이 달성된 경우에도 상법 등
            법령의 규정에 의하여 보존할 필요성이 있는 경우에는 귀하의 개인정보를
            보유할 수 있습니다.) 5. 동의철회 / 회원탈퇴 방법 귀하는 회원가입 시
            개인정보의 수집 · 이용 및 제공에 대해 동의하신 내용을 언제든지
            철회하실 수 있습니다. 회원탈퇴는 개인정보관리책임자로 서면, 전화
            또는 Fax 등으로 연락하시면 지체 없이 귀하의 개인정보를 파기하는 등
            필요한 조치를 하겠습니다. 6. 개인정보 자동 수집 장치의 설치/운영 및
            그 거부에 관한 사항 스마트픽인은 귀하의 정보를 수시로 저장하고
            찾아내는 '쿠키(cookie)'를 운용합니다. 쿠키란 스마트픽인의 웹사이트를
            운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트
            파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 스마트픽인은 다음과
            같은 목적을 위해 쿠키를 사용합니다. 귀하는 쿠키 설치에 대한 권한을
            가지고 있습니다. 따라서, 귀하는 웹 브라우저에서 옵션을 설정함으로써
            모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면
            모든 쿠키의 저장을 거부할 수도 있습니다. 회원님께서 쿠키 설치를
            거부하셨을 경우 일부 서비스 제공에 어려움이 있을 수 있습니다. 7.
            개인정보관리책임자 귀사의 개인정보를 보호하고 개인정보와 관련된
            불만을 처리하기 위하여 스마트픽인은 아래와 같이 개인정보관리책임자를
            두고 있습니다. [개인정보 관리책임자] 이름 : 임연정 전화번호 :
            1588-1815 (내선번호 2번) 이메일 : hlstorycom@daum.net 귀하께서는
            스마트픽인의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련
            민원을 개인정보관리책임자로 신고하실 수 있습니다. 스마트픽인은
            이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
            기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에
            문의하시기 바랍니다. 개인분쟁조정위원회 (http://www.1336.or.kr /
            1336) 정보보호마크인증위원회 (thtp://www.eprivacy.or.kr / (02)
            580-0533 ~ 4) 대검찰청 사이버번죄수사단 (http://www.spo.go.kr / (02)
            3480-3573) 경찰청 사이버테러대응센터 (http://www.ctrc.go.kr / (02)
            392-0330) 8. 개인정보의 안전성 확보조치 스마트픽인은 이용자의
            개인정보보호를 위한 기술적 대책으로서 여러 보안장치를 마련하고
            있습니다. 이용자께서 보내시는 모든 정보는 방화벽장치에 의해 보호되는
            보안시스템에 안전하게 보관/관리되고 있습니다. 또한 본원은 이용자의
            개인정보보호를 위한 관리적 대책으로서 이용자의 개인정보에 대한 접근
            및 관리에 필요한 절차를 마련하고, 이용자의 개인정보를 취급하는
            인원을 최소한으로 제한하여 지속적인 보안교육을 실시하고 있습니다.
            또한 개인정보를 처리하는 시스템의 사용자를 지정하여 사용자
            비밀번호를 부여하고 이를 정기적으로 갱신하겠습니다. 9. 정책 변경에
            따른 공지의무 현 개인정보처리방침 내용의 추가 · 삭제 및 수정이 있을
            시에는 변경되는 개인정보처리방침을 시행하기 최소 7일전에 스마트픽인
            홈페이지를 통해 변경이유 및 내용 등을 공지하도록 하겠습니다.
            개인정보 시행일자 : 2018. 12
          </p>
        </li>
      </ModalBox>
      <BlackBox className="BlackBox" onClick={onClickClose}></BlackBox>
    </FooterBlock>
  );
};

export default Footer;
