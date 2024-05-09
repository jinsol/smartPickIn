import React from "react";
import styled from "styled-components";

const DetailWrapBlock = styled.div`
  p {
    font-size: 1em;
    color: var(--gray01);
    line-height: 180%;
    word-break: keep-all;
  }
`;

const DetailWrap = ({ detail }) => {
  return (
    <DetailWrapBlock>
      <p>{detail}</p>
    </DetailWrapBlock>
  );
};

export default DetailWrap;
