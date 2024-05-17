import React from "react";
import styled from "styled-components";

const CartSubTotalBlock = styled.div``;

const CartSubTotal = ({ list, totalPrice }) => {
  return (
    <CartSubTotalBlock>
      <ul className="flexSpaceBetween">
        <li className="title">소계</li>
        <li className="content">{totalPrice}원</li>
      </ul>
      {Object.values(list).map((item, index) => {
        return (
          <ul
            className="flexSpaceBetween"
            key={index}
            style={{ lineHeight: "180%" }}
          >
            <li className="title">
              {item.title}, {item.qty}개
            </li>
            <li className="content">
              {(item.qty * item.price).toLocaleString()}원
            </li>
          </ul>
        );
      })}
      <ul className="flexSpaceBetween">
        <li className="title">VAT</li>
        <li className="content"></li>
      </ul>
    </CartSubTotalBlock>
  );
};

export default CartSubTotal;
