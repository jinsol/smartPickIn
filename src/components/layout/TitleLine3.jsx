import React from "react";
import styled from "styled-components";

const TitleLine3Block = styled.article`
  h2 {
    span {
      display: block;
      line-height: 1.4em;
      font-size: clamp(62px, 2.5vw, 82px);
      &:nth-child(1) {
        color: lightgray;
      }
      &:nth-child(2) {
        color: gray;
      }
      &:nth-child(3) {
      }
    }
  }
`;

const TitleLine3 = ({ TL3C }) => {
  return (
    <TitleLine3Block>
      <h2>
        {TL3C.map((item, index) => {
          return <span key={index}>{item}</span>;
        })}
      </h2>
    </TitleLine3Block>
  );
};

export default TitleLine3;
