import React from "react";
import styled from "styled-components";
import CartList from "./CartList";
import CartTitleWrap from "./CartTitleWrap";

const CartWrapBlock = styled.div`
  display: flex;
  flex-direction: column;
  .CartList:not(:last-child) {
    border-bottom: 1px solid red;
  }
`;

const CartWrap = ({ list }) => {
  const title = ["장바구니", "Shopping Cart"];
  return (
    <CartWrapBlock>
      <CartTitleWrap title={title} />
      <>
        {Object.values(list).map((item, index) => (
          <CartList key={index} item={item} />
        ))}
      </>
    </CartWrapBlock>
  );
};

export default CartWrap;
