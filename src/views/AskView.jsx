import React, { useState } from "react";
import styled from "styled-components";
import AskTitle from "@/components/ask/AskTitle";
import AskForm from "@/components/ask/AskForm";

const AskViewBlock = styled.div`
  section {
    width: 100%;
    min-height: 100vh;
    display: flex;
    place-items: center;
    padding: 20vh 0;

    place-content: center;
    .homeRow {
      position: relative;
      display: grid;
      grid-template-columns: auto 3fr;
      gap: 80px;
      width: 1450px;
      transition: all 0.3s;
      > li {
        display: flex;
        flex-direction: column;
        gap: 80px;
      }
      .title {
        height: fit-content;
        top: 10vh;
        position: sticky;
      }
      .contents {
        width: 100%;
      }
      @media (max-width: 1100px) {
        grid-template-columns: auto;
        .title {
          top: unset;
          position: relative;
          ol {
            flex-direction: row;
            justify-content: space-between;

            li {
              flex: 1;
              flex-direction: column;
              align-items: flex-start;
              gap: 10px;
              &:not(:last-child)::after {
                width: 100%;
                height: 1px;
                left: 30px;
                top: 15px;
                padding: 0 2%;
                margin-left: 0;
                transform: translateY(-50%);
              }
            }
          }
        }
      }
      @media (max-width: 768px) {
      }
    }
  }
`;

const AskView = () => {
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);

  const handleStep1Change = (value) => {
    setStep1(value);
  };
  const handleStep2Change = (value) => {
    setStep2(value);
  };
  const handleStep3Change = (value) => {
    setStep3(value);
  };
  const handleStep4Change = (value) => {
    setStep4(value);
  };
  // 위에거 반복문 못 돌리나?

  return (
    <AskViewBlock>
      <section>
        <ul className="homeRow">
          <li className="title">
            <AskTitle step1={step1} step2={step2} step3={step3} step4={step4} />
          </li>
          <li className="contents">
            <AskForm
              handleStep1Change={handleStep1Change}
              handleStep2Change={handleStep2Change}
              handleStep3Change={handleStep3Change}
              handleStep4Change={handleStep4Change}
            />
          </li>
        </ul>
      </section>
    </AskViewBlock>
  );
};

export default AskView;
