import React from "react";
import styled from "styled-components";

const ContentWrapPriceBlock = styled.div`
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

const ContentWrapPrice = ({ price }) => {
  return (
    <ContentWrapPriceBlock>
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
    </ContentWrapPriceBlock>
  );
};

export default ContentWrapPrice;
