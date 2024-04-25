import React from "react";
import styled from "styled-components";

const SectionBlock = styled.section`
  height: 100vh;
  background-color: whitesmoke;
  display: grid;
  place-content: center;
  ul {
    width: 1450px;
    background-color: pink;
    span {
      display: block;
    }
    .TitleBox {
      font-size: clamp(34px, 56px, 56px);
    }
    .section4_bottom {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      ul {
        background-color: gray;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        padding: 5%;
      }
    }
  }
`;

const HomeSection04 = () => {
  return (
    <SectionBlock>
      <ul>
        <li>
          <h3 className="TitleBox">
            <span>순위상승</span>
            <span>어떻게 해야할지 모르겠다면?</span>
          </h3>
          <p>
            <span>처음 진행하시나요?</span>
            <span>순위를 올릴 수 있는 방법은 뭐가 있을까요?</span>
          </p>
        </li>
        <li className="section4_bottom">
          <ul>
            <li>SITE</li>
            <li>사이트 순위상승</li>
            <li>스타트 패키지</li>
            <li>→</li>
          </ul>
          <ul>
            <li>SITE</li>
            <li>사이트 순위상승</li>
            <li>스타트 패키지</li>
            <li>→</li>
          </ul>
          <ul>
            <li>SITE</li>
            <li>사이트 순위상승</li>
            <li>스타트 패키지</li>
            <li>→</li>
          </ul>
        </li>
      </ul>
    </SectionBlock>
  );
};

export default HomeSection04;
