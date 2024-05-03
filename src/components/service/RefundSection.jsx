import React from "react";
import styled from "styled-components";

const SectionBlock = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 80px;
  padding: 10vh 0;
  article {
    h3 {
      font-size: 2.6em;
      color: var(--black);
      span {
        color: var(--gray02);
        display: block;
      }
    }
  }
  ol {
    li {
      h4 {
        font-size: 1.4em;
        color: var(--black);
      }
      p {
        font-size: 1.2em;
        color: var(--gray01);
        padding: 1.2em 0 2em;
        line-height: 180%;
        span {
          display: block;
        }
      }
    }
  }
`;

const Blue = styled.span`
  color: var(--blue);
`;

const RefundSection = () => {
  return (
    <SectionBlock>
      <article>
        <h3>
          <span>스마트픽인</span>
          취소 및 환불 규정안내
        </h3>
      </article>
      <ol>
        <li>
          <h4>
            <Blue>01.</Blue> 고객은 회사에 환불을 요구할 수 있습니다.
          </h4>
          <p>환불은 회사가 안내하는 정책 및 방법에 따라 진행됩니다.</p>
        </li>
        <li>
          <h4>
            <Blue>02.</Blue> 회사는 다음 각 호의 방식으로 환불을 진행합니다.
          </h4>
          <p>
            <span>작업 착수 이전 100% 환불가능합니다.</span>
            <span>
              작업 진행 전 의뢰인과 일정 및 기초 안내여부를 논하는
              &apos;협의기간&apos; 에는 100% 환불가능합니다.
            </span>
            <span>
              작업 착수 및 협의된 내용하에 작업이 시작된 부분에 대해서는 환불이
              불가능합니다.
            </span>
            <span>의뢰인의 단순변심에 따른 환불요청은 불가능합니다.</span>
            <span>작업에 관한 모든 사항은 보장형을 기본으로 하지않습니다.</span>
          </p>
        </li>
      </ol>
    </SectionBlock>
  );
};

export default RefundSection;
