import React from "react";
import styled from "styled-components";

const CartTitleWrapBlock = styled.h3`
  padding-bottom: 20px;
  border-bottom: 1px solid var(--gray04);
  gap: 10px;
  display: flex;
  align-items: baseline;

  b {
    font-size: 1.8em;
    font-weight: 800;
    color: var(--black);
  }
  span {
    font-size: 1.4em;
    font-weight: 400;
    color: var(--gray01);
    letter-spacing: -0.2px;
  }
`;

const CartTitleWrap = ({ title }) => {
  console.log(title);
  return (
    <CartTitleWrapBlock>
      <b>{title[0]}</b>
      <span>{title[1]}</span>
    </CartTitleWrapBlock>
  );
};

export default CartTitleWrap;
