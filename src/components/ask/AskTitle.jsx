import React from "react";
import styled from "styled-components";
import TitleLine3 from "@/components/layout/TitleLine3";
import { MdDone } from "react-icons/md";

const StepIndicator = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 2em;
  & > li {
    span::before {
    }
  }
`;

const Process = styled.span`
  content: "완료";
  display: block;
  width: 30px;
  height: 30px;

  background-color: red;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const Step = styled.i``;

const AskTitle = () => {
  const TL3C = ["내 업체에", "꼭 맞는 컨설팅이", "궁금하신가요?"];
  return (
    <>
      <TitleLine3 TL3C={TL3C} />
      <StepIndicator>
        <li className="done">
          <Process></Process>
          <span>
            <Step>1단계</Step>
            <p className="step-tit">정보입력</p>
          </span>
        </li>
        <li>
          <Process></Process>
          <span>
            <Step>2단계</Step>
            <p className="step-tit">유입경로</p>
          </span>
        </li>
        <li>
          <Process></Process>
          <span>
            <Step>3단계</Step>
            <p className="step-tit">문의내용</p>
          </span>
        </li>
        <li>
          <Process></Process>
          <span>
            <Step>4단계</Step>
            <p className="step-tit">문의완료</p>
          </span>
        </li>
      </StepIndicator>
    </>
  );
};

export default AskTitle;
