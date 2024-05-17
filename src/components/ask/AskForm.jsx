import React, { useState } from "react";
import styled from "styled-components";
import { IoMdAlert, IoMdCheckmark } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

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
  font-size: 1.2em;
  width: 100%;
  font-weight: 800;
  color: var(--black);
  option {
    all: unset;
    font-weight: 500;
    color: var(--gray01);
    line-height: 180%;
  }
  &.path {
    display: block;
    width: 100%;
  }
`;

const Yellow = styled.span`
  color: var(--yellow);
`;

const CheckUl = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const FormConWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 4% 0;
`;

const CheckLi = styled.li`
  flex: 1;
  position: relative;
  label {
    display: flex;
    align-items: center;
  }
  input {
    all: unset;
    position: absolute;
    inset: 0;
  }
  input:checked + label {
    color: white;
    background-color: var(--blue);
  }
`;

const FormTextarea = styled.div`
  textarea {
    width: 100%;
    box-sizing: border-box;
  }
`;

const BtnSubmit = styled.button`
  display: block;
  font-size: 1.4em;
  font-weight: 800;
  text-align: center;
  border: 1px solid var(--blue);
  border-radius: 50px;
  padding: 20px;
  color: var(--blue);
  background-color: var(--white);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: var(--blue);
    color: var(--white);
    border: 1px solid var(--blue);
  }
`;

const FormCheckAgree = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    content: "";
    color: red;
    background-color: var(--light-blue);
    width: 20px;
    height: 20px;
    &:checked {
      background-color: var(--blue);
    }
  }
`;

const AskForm = ({
  handleStep1Change,
  handleStep2Change,
  handleStep3Change,
  handleStep4Change,
}) => {
  const checkForm = () => {
    if (!document.querySelector("#agree_check").checked) {
      alert("개인정보처리방침에 동의하셔야 합니다.");
      return false;
    } else {
      return true;
    }
  };

  const navigate = useNavigate();

  const onClickSubmit = (e) => {
    e.preventDefault();
    const isFormValid = checkForm();
    if (!isFormValid) return;
    alert("의뢰가 접수되었습니다.");
    const form = document.querySelector("#contact-form");
    form.submit();
    // (추가예정) 제출하고 스크립트 페이지로 이동하는 문제 해결 필요
    navigate("/ask");
  };

  const [step1, setStep1] = useState({
    company: "",
    phone: "",
    email: "",
  });

  const onChangeStep1 = (e) => {
    const { name, value } = e.target;
    setStep1((prevStep1) => ({
      ...prevStep1,
      [name]: value,
    }));

    if (step1.company && step1.phone && step1.email) {
      handleStep1Change(true);
    } else {
      handleStep1Change(false);
    }
  };

  const onChangeStep2 = (e) => {
    if (e.target.value !== "유입경로를 선택해주세요") {
      handleStep2Change(true);
    } else {
      handleStep2Change(false);
    }
  };

  const [step3, setStep3] = useState({
    consulting: { site: "", place: "", instagram: "" },
    url: "",
    keyword: "",
  });

  const onChangeStep3 = (e) => {
    const { name, value } = e.target;
    console.log(name, value, e.target, e.target.value, e);
    const isCheckedSite = document.getElementById("site").checked;
    const isCheckedPlace = document.getElementById("place").checked;
    const isCheckedInstagram = document.getElementById("instagram").checked;

    setStep3((prevStep3) => ({
      ...prevStep3,
      [name]: value,
    }));

    if (
      (isCheckedSite || isCheckedPlace || isCheckedInstagram) &&
      step3.url &&
      step3.keyword
    ) {
      handleStep3Change(true);
    }
  };

  const onChangeStep4 = (e) => {
    if (e.target.value) {
      console.log("내용 있어요");
      handleStep4Change(true);
    } else {
      console.log("내용 없어요");
      handleStep4Change(false);
    }
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

          <FormConWrap>
            <InputUl>
              <InputLiLabel>
                <label htmlFor="company_name">기업명</label>
              </InputLiLabel>
              <InputLiInput>
                <input
                  name="company"
                  id="company_name"
                  placeholder="ex) 스마트픽인"
                  onChange={onChangeStep1}
                  required
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
                  onChange={onChangeStep1}
                  required
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
                  onChange={onChangeStep1}
                  required
                />
              </InputLiInput>
            </InputUl>
          </FormConWrap>
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
            <InputSelect
              className="inputStyle path"
              name="inFlow"
              id="inFlow"
              onChange={onChangeStep2}
              required
            >
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
        <div className="form-group">
          <h3 className="form-tit">
            <NumberBlue>03</NumberBlue>
            <FormTitle>문의사항</FormTitle>
          </h3>
          <div className="form-conts">
            <FormConWrap>
              <h3>컨설팅 받고 싶은 분야를 1가지 이상 선택해주세요</h3>
              <CheckUl>
                <CheckLi>
                  <input
                    type="checkbox"
                    name="site"
                    id="site"
                    onChange={onChangeStep3}
                    required
                  />
                  <label htmlFor="site" className="inputStyle">
                    사이트
                  </label>
                </CheckLi>
                <CheckLi>
                  <input
                    type="checkbox"
                    id="place"
                    name="place"
                    onChange={onChangeStep3}
                    required
                  />
                  <label htmlFor="place" className="inputStyle">
                    플레이스
                  </label>
                </CheckLi>
                <CheckLi>
                  <input
                    type="checkbox"
                    name="instagram"
                    id="instagram"
                    onChange={onChangeStep3}
                    required
                  />
                  <label htmlFor="instagram" className="inputStyle">
                    인스타그램
                  </label>
                </CheckLi>
              </CheckUl>
              <h3>컨설팅 받고싶은 url주소를 작성해주세요</h3>
              <InputUl>
                <InputLiInput>
                  <input
                    type="text"
                    name="url"
                    id="url_name"
                    className="inputStyle"
                    onChange={onChangeStep3}
                    placeholder="ex) https://site-high.com/"
                    required
                  />
                </InputLiInput>
              </InputUl>
              <h3>요청 키워드</h3>
              <InputUl>
                <InputLiInput>
                  <input
                    type="text"
                    name="keyword"
                    id="keyword_name"
                    onChange={onChangeStep3}
                    placeholder="노출을 희망하는 키워드를 입력해주세요 ex) 서면맛집"
                    required
                  />
                </InputLiInput>
              </InputUl>
            </FormConWrap>
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
          <FormTextarea className="form-conts">
            <textarea
              className="inputStyle"
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={onChangeStep4}
              required
            ></textarea>
          </FormTextarea>
        </div>
        <FormCheckAgree className="form-group privacy">
          <input type="checkbox" id="agree_check" />
          <label htmlFor="agree_check">
            개인정보 수집 · 이용하는데 동의합니다.
          </label>
        </FormCheckAgree>
        <BtnSubmit type="submit" onClick={onClickSubmit}>
          문의 접수하기
        </BtnSubmit>
      </FormBlock>
    </>
  );
};

export default AskForm;
