import React from "react";
import styled from "styled-components";

const TitleWrapBlock = styled.div`
  h4 {
    font-size: 0.9em;
    color: var(--blue);
  }
  h3 {
    font-size: 1.4em;
    color: var(--black);
    line-height: 180%;
  }
`;

const TitleWrap = ({ title, subtitle }) => {
  return (
    <TitleWrapBlock>
      <h4>{subtitle}</h4>
      <h3>{title}</h3>
    </TitleWrapBlock>
  );
};

export default TitleWrap;
