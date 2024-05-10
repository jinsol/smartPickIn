import React from "react";
import styled from "styled-components";
import CartTitleWrap from "./CartTitleWrap";
import BtnWrap from "./BtnWrap";
import PromotionCode from "./PromotionCode";
import CartSubTotal from "./CartSubTotal";

const ReceiptWrapBlock = styled.div`
  height: fit-content;
  .Total {
    padding: 20px 0;
    li {
      &.title {
        font-size: 1.2em;
      }
      &.content {
        font-weight: bold;
        font-size: 1.2rem;
        color: var(--black);
      }
    }
  }
  .btn {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Line = styled.div`
  height: 1px;
  border-bottom: 1px dashed var(--gray03);
`;

const ReceiptWrap = ({ list }) => {
  const totalPrice = Object.values(list)
    .reduce((acc, item) => {
      return acc + item.qty * item.price;
    }, 0)
    .toLocaleString();

  const title = ["지불정보", "Payment Info"];

  return (
    <ReceiptWrapBlock>
      <CartTitleWrap title={title} />
      <PromotionCode />
      <Line />
      <CartSubTotal list={list} totalPrice={totalPrice} />

      <ul className="Total flexSpaceBetween">
        <li className="title">전체 비용</li>
        <li className="content">{totalPrice}원</li>
      </ul>
      <div className="btn">
        <BtnWrap button={"결제하기"} btnType={"primary"} />
        <BtnWrap button={"상품 둘러보기"} link={"/product"} />
      </div>
    </ReceiptWrapBlock>
  );
};

export default ReceiptWrap;
