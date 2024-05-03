import React from "react";
import styled from "styled-components";
import TitleLine3 from "@/components/layout/TitleLine3";
import { MdDone } from "react-icons/md";

const StepIndicator = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const StepIndicatorLi = styled.li`
  display: flex;
  gap: 2em;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    background-color: var(--gray05);
    margin-left: 15px;
    top: 70%;
    padding: 2% 0;
    transform: translateX(-50%);
  }
  &.finished {
    p {
      color: var(--black);
    }
    > span {
      background-color: var(--blue);
      color: var(--white);
      border: 1px solid var(--blue);
    }
  }
`;

const Process = styled.span`
  display: inline-flex;
  place-items: center;
  place-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid var(--gray05);
  background-color: var(--white);
  z-index: 1;
  position: relative;
  transition: all 0.3s;
`;

const Step = styled.i`
  font-style: normal;
  font-weight: 800;
  color: var(--blue);
`;

const StepText = styled.p`
  font-size: 1.2em;
  font-weight: 800;
  color: var(--gray05);
`;

const AskTitle = ({ step1, step2, step3, step4 }) => {
  const TL3C = ["내 업체에", "꼭 맞는 컨설팅이", "궁금하신가요?"];
  const step = ["정보입력", "유입경로", "문의내용", "문의완료"];
  const stepStatus = [step1, step2, step3, step4];
  return (
    <>
      <TitleLine3 TL3C={TL3C} style={{ position: "sticky" }} />
      <StepIndicator>
        {step.map((item, index) => (
          <StepIndicatorLi
            key={index}
            className={stepStatus[index] && "finished"}
          >
            <Process>
              <MdDone />
            </Process>
            <div>
              <Step>{index + 1}단계</Step>
              <StepText>{item}</StepText>
            </div>
          </StepIndicatorLi>
        ))}

        {/* <StepIndicatorLi className={step1 && "finished"}>
          <Process className="process">
            <MdDone />
          </Process>
          <div>
            <Step>1단계</Step>
            <StepText className="step-tit">정보입력</StepText>
          </div>
        </StepIndicatorLi>
        <StepIndicatorLi className={step2 && "finished"}>
          <Process className="process">
            <MdDone />
          </Process>
          <div>
            <Step>2단계</Step>
            <StepText className="step-tit">유입경로</StepText>
          </div>
        </StepIndicatorLi>
        <StepIndicatorLi className={step3 && "finished"}>
          <Process>
            <MdDone />
          </Process>
          <div>
            <Step>3단계</Step>
            <StepText className="step-tit">문의내용</StepText>
          </div>
        </StepIndicatorLi>
        <StepIndicatorLi className={step4 && "finished"}>
          <Process>
            <MdDone />
          </Process>
          <div>
            <Step>4단계</Step>
            <StepText className="step-tit">문의완료</StepText>
          </div>
        </StepIndicatorLi> */}
      </StepIndicator>
    </>
  );
};

export default AskTitle;
