import React from "react";
import styled from "styled-components";
import CartQtyWrap from "./CartQtyWrap";

const BtnWrapBlock = styled.div`
  display: flex;
  gap: 10px;
  button {
    font-size: 1em;
    padding: 10px 20px;
    font-weight: 800;
    transition: all 0.3s;
    &.GoCart {
    }
    &.BuyNow {
      background-color: var(--blue);
      color: var(--white);
      border: 1px solid var(--blue);
      &:hover {
        background-color: var(--blue-hover);
      }
    }
  }

  .ContentWrapBtn_Cart {
    display: flex;
    border: 1px solid var(--gray02);
    background-color: var(--gray06);
    color: var(--gray01);
    .ContentWrapBtn_Cart_Qty {
      border-right: 1px solid var(--gray02);
    }
  }
`;

const BtnWrap = ({ id }) => {
  return (
    <BtnWrapBlock>
      <div className="ContentWrapBtn_Cart">
        <div className="ContentWrapBtn_Cart_Qty">
          <CartQtyWrap />
        </div>
        <button className="GoCart">장바구니</button>
      </div>
      <button className="BuyNow">바로 구매하기</button>
    </BtnWrapBlock>
  );
};

export default BtnWrap;
