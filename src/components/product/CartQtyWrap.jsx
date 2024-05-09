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

const CartQtyWrap = () => {
  const [qty, setQty] = useState(1);
  const decreaseQuantity = () => {
    if (!(qty <= 1)) {
      setQty(qty - 1);
    }
  };
  const increaseQuantity = () => {
    setQty(qty + 1);
  };
  return (
    <CartQtyWrapBlock>
      <button onClick={decreaseQuantity}>-</button>
      <span>{qty}</span>
      <button onClick={increaseQuantity}>+</button>
    </CartQtyWrapBlock>
  );
};

export default CartQtyWrap;
