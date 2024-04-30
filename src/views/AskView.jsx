import React from "react";
import styled from "styled-components";
import TitleLine3 from "@/components/layout/TitleLine3";

const AskViewBlock = styled.div`
  section {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    display: flex;
    place-items: center;

    place-content: center;
    .homeRow {
      display: grid;
      grid-template-columns: auto 3fr;
      gap: 80px;
      width: 1450px;
      transition: all 0.3s;
      .two {
        width: 100%;
      }
    }
  }
`;

const AskView = () => {
  const TL3C = ["내 업체에", "꼭 맞는 컨설팅이", "궁금하신가요?"];

  return (
    <AskViewBlock>
      <section>
        <ul className="homeRow">
          <li>
            <TitleLine3 TL3C={TL3C} />
          </li>
          <li className="two">
            <ul>
              <li>문의사항 안내</li>
              <li>의뢰인 정보를 알려주세요</li>
              <li>유입경로를 알려주세요</li>
              <li>문의사항</li>
              <li>상세문의</li>
              <li>문의 접수하기</li>
            </ul>
          </li>
        </ul>

        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScX-EOIHIgIUDHcyW5ig3D37HHc_SpIVD2FLX7hS6RF_q2yrQ/viewform?embedded=true"></iframe> */}
      </section>
    </AskViewBlock>
  );
};

export default AskView;
