import React, { useState } from "react";
import styled from "styled-components";

const CartQtyWrapBlock = styled.div`
  button {
    padding: 10px 3px;
  }
  span {
    width: 30px;
    display: inline-block;
    text-align: center;
  }
`;

const CartQtyWrap = ({ qty, decreaseQuantity, increaseQuantity }) => {
  return (
    <CartQtyWrapBlock>
      <button onClick={decreaseQuantity}>-</button>
      <span>{qty}</span>
      <button onClick={increaseQuantity}>+</button>
    </CartQtyWrapBlock>
  );
};

export default CartQtyWrap;
