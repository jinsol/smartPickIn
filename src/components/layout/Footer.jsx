import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoChatbubble, IoMegaphone, IoChevronDownSharp } from "react-icons/io5";
import ModalPrivacyNotice from "./ModalPrivacyNotice";

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
    @media (max-width: 1100px) {
      justify-content: center;
    }
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
    gap: 60px;
    svg {
      transition: all 0.3s;
    }
  }
  .depth2 {
    position: absolute;
    /* display: none !important; */
    visibility: hidden;
    opacity: 0;
    transform: scale(0.6);
    transition: all 0.3s;
    display: flex !important;
    width: 100%;
    border-radius: 10px;
    margin-top: 6px;
    max-height: 140px;
    background-color: white;
    color: var(--gray01);
    overflow-x: hidden;
    overflow-y: scroll;

    flex-direction: column;
    &::-webkit-scrollbar {
      width: 16px;
      border-radius: 30px;
      overflow: hidden;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--blue);
      border-radius: 30px;
      border: 4px solid transparent;
      background-clip: padding-box;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--light-blue);
      border-radius: 30px;
    }
    li {
      a {
        display: block;
        padding: 10px 20px;
        transition: all 0.3s;
      }
    }
  }
  &.on {
    &.depth1 > a > svg {
      transform: rotate(180deg);
    }
    .depth2 {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
      li {
        a:hover {
          background-color: var(--light-blue);
          font-weight: 600;
          color: var(--blue);
        }
      }
    }
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
  line-height: 140%;
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
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
`;

const TelInfo = styled.li`
  position: relative;
  h4 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
  }

  * {
    display: block;
  }
  a {
    font-size: 48px;
  }
  button {
    padding: 16px 30px;
    border: 1px solid white;
    border-radius: 50px;
    font-size: 1.2em;
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

const Footer = () => {
  const onClickFamilySite = (e) => {
    e.preventDefault();
    e.target.parentElement.classList.toggle("on");
  };

  const onClickPersonalData = (e) => {
    e.preventDefault();
    document.querySelector(".Modal").classList.add("on");
    document.querySelector(".ModalOveray").classList.add("on");
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
              <Link to="/ask">문의하기</Link>
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
      <ModalPrivacyNotice />
    </FooterBlock>
  );
};

export default Footer;
