import React from "react";
import styled from "styled-components";
import { IoMdAlert } from "react-icons/io";

const ArticleBlock = styled.article`
  h3 {
    font-size: 1.4em;
    color: var(--black);
  }
  p {
    background-color: var(--light-blue);
    line-height: 180%;
    padding: 35px 30px;
    border-radius: 20px;
    font-size: 1em;
    color: var(--gray02);
    span {
      display: block;
    }
  }
`;

const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const NumberBlue = styled.span`
  color: var(--blue);
  display: block;
  font-size: 1.4em;
`;

const FormTitle = styled.span`
  color: var(--black);
  display: block;
  font-size: 2.8em;
`;

const FormLabel = styled.p`
  color: var(--gray01);
  display: block;
  font-size: 1em;
  font-weight: 500;
`;

const InputUl = styled.ul`
  display: flex;
  // 제목은 20% 내용은 80%

  gap: 1em;
  border: 1px solid var(--gray06);
  background-color: var(--white);
  padding: 25px 30px;
  border-radius: 20px;
  align-items: center;
`;

const InputLiLabel = styled.li`
  flex-basis: 20%;
  font-size: 1.2em;
  font-weight: 800;
  color: var(--black);
`;

const InputLiInput = styled.li`
  flex: 1;
  input {
    all: unset;
    width: 100%;
    font-size: 1.2em;
  }
`;

const InputSelect = styled.select`
  all: unset;
  font-size: 1.2em;
  font-weight: 800;
  color: var(--black);
  display: flex;
  width: 100%;

  border: 1px solid var(--gray06);
  border-radius: 20px;

  background-color: var(--white);
  padding: 25px 30px;

  align-items: center;
  option {
    all: unset;
    font-weight: 500;
    color: var(--gray01);
    line-height: 180%;
  }
`;

const Yellow = styled.span`
  color: var(--yellow);
`;

const CheckUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  li {
    flex: 1;
    label {
      display: flex;
      border: 1px solid var(--gray06);
      background-color: var(--white);
      padding: 25px 30px;
      border-radius: 20px;
      align-items: center;
    }
    input {
      all: unset;
    }
    input:checked + label {
      color: white;
      background-color: var(--blue);
    }
  }
`;

const CheckLi = styled.li``;

const AskForm = () => {
  const checkForm = () => {
    if (!document.querySelector("#agree_check").checked) {
      alert("개인정보처리방침에 동의하셔야 합니다.");
      return false;
    }
    return true;
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    const isFormValid = checkForm();
    if (!isFormValid) return;
    alert("의뢰가 접수되었습니다.");
    const form = document.querySelector("#contact-form");
    form.submit();
  };
  return (
    <>
      <ArticleBlock className="askInfo">
        <h3>
          <Yellow>
            <IoMdAlert />
          </Yellow>
          문의사항 안내
        </h3>
        <p>
          <span>
            컨설팅을 의뢰해주시면 확인 후 최대한 빠르게 답변드릴 예정입니다.
          </span>
          <span>
            전문가의 분석 및 상담 후 진행되며, 브랜드에 적절한 전략을
            제안드립니다.
          </span>
        </p>
      </ArticleBlock>
      <FormBlock
        id="contact-form"
        action="https://script.google.com/macros/s/AKfycbwVEk76rk2dSsjTsofi8WIileVyCjJjdMItTRybBM0/dev"
        method="POST"
      >
        <div className="form-group">
          <h3 className="form-tit">
            <NumberBlue>01</NumberBlue>
            <FormTitle>의뢰인 정보를 알려주세요</FormTitle>
          </h3>
          <FormLabel className="form-label">
            문의하신 사항에 회신드리기 위한 기본 정보를 작성해 주세요.
          </FormLabel>
          <div className="form-conts">
            <div className="textarea-wrap">
              <InputUl>
                <InputLiLabel>
                  <label htmlFor="company_name">기업명</label>
                </InputLiLabel>
                <InputLiInput>
                  <input
                    name="company"
                    id="company_name"
                    placeholder="ex) 스마트픽인"
                  />
                </InputLiInput>
              </InputUl>
              <InputUl>
                <InputLiLabel>
                  <label htmlFor="company_tel">연락처</label>
                </InputLiLabel>
                <InputLiInput>
                  <input
                    name="phone"
                    id="company_tel"
                    placeholder="ex) 010-0000-0000"
                  />
                </InputLiInput>
              </InputUl>
              <InputUl>
                <InputLiLabel>
                  <label htmlFor="company_mail">이메일</label>
                </InputLiLabel>
                <InputLiInput>
                  <input
                    name="email"
                    id="company_mail"
                    placeholder="ex) hlstorycom@daum.net"
                  />
                </InputLiInput>
              </InputUl>
            </div>
          </div>
        </div>
        <div className="form-group">
          <h3 className="form-tit">
            <NumberBlue>02</NumberBlue>
            <FormTitle>유입경로를 알려주세요</FormTitle>
          </h3>
          <FormLabel className="form-label">
            어떻게 스마트픽인을 알게되었나요?
          </FormLabel>
          <div className="form-conts">
            <div className="textarea-wrap">
              <InputSelect name="inFlow" id="inFlow">
                <option value="유입경로를 선택해주세요" hidden>
                  유입경로를 선택해주세요
                </option>
                <option value="홈페이지">홈페이지</option>
                <option value="블로그">블로그</option>
                <option value="카페">카페</option>
                <option value="파워링크">파워링크</option>
                <option value="플레이스">플레이스</option>
                <option value="쇼핑">쇼핑</option>
                <option value="네이버동영상">네이버동영상</option>
                <option value="유튜브">유튜브</option>
                <option value="오픈채팅">오픈채팅</option>
                <option value="지인추천">지인추천</option>
                <option value="기타">기타</option>
              </InputSelect>
            </div>
          </div>
        </div>
        <div className="form-group">
          <h3 className="form-tit">
            <NumberBlue>03</NumberBlue>
            <FormTitle>문의사항</FormTitle>
          </h3>
          <div className="form-conts">
            <div className="textarea-wrap">
              <CheckUl>
                <CheckLi>
                  <input type="checkbox" id="site" />
                  <label htmlFor="site">사이트</label>
                </CheckLi>
                <li>
                  <input type="checkbox" id="place" />
                  <label htmlFor="place">플레이스</label>
                </li>
                <li>
                  <input type="checkbox" id="instagram" />
                  <label htmlFor="instagram">인스타그램</label>
                </li>
              </CheckUl>
              <InputUl>
                <InputLiInput>
                  <input
                    type="text"
                    name="keyword"
                    id="keyword_name"
                    placeholder="ex) https://site-high.com/"
                  />
                </InputLiInput>
              </InputUl>
              <InputUl>
                <InputLiInput>
                  <input
                    type="text"
                    name="keyword"
                    id="keyword_name"
                    placeholder="노출을 희망하는 키워드를 입력해주세요
                    ex) 서면맛집"
                  />
                </InputLiInput>
              </InputUl>
            </div>
          </div>
        </div>
        <div className="form-group">
          <h3 className="form-tit">
            <NumberBlue>04</NumberBlue>
            <FormTitle>상세문의</FormTitle>
          </h3>
          <FormLabel className="form-label">
            현재 상황과 궁금하신 상황을 입력해주세요.
          </FormLabel>
          <div className="form-conts">
            <div className="textarea-wrap">
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>
        <div className="form-group">
          <input type="checkbox" id="agree_check" />
          <label htmlFor="agree_check">
            개인정보 수집 · 이용하는데 동의합니다.
          </label>
        </div>
        <button type="submit" onClick={onClickSubmit}>
          문의 접수하기
        </button>
      </FormBlock>
    </>
  );
};

export default AskForm;
