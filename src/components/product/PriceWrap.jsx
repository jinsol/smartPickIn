import React from "react";
import styled from "styled-components";

const PriceWrapBlock = styled.div`
  p {
    span {
      font-size: 0.8em;
      color: var(--gray03);
      display: block;
    }
    b {
      font-size: 1.6em;
      color: var(--black);
    }
  }
`;

const PriceWrap = ({ price }) => {
  return (
    <PriceWrapBlock>
      <p>
        <span>VAT 별도</span>
        {price == "옵션별 상이" ? (
          <>
            <b>{price}</b>
          </>
        ) : (
          <>
            <b>{Number(price).toLocaleString()}</b> 원
          </>
        )}
      </p>
    </PriceWrapBlock>
  );
};

export default PriceWrap;
