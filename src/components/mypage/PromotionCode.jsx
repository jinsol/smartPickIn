import React from "react";
import styled from "styled-components";

const PromotionCodeBlock = styled.div`
  padding: 20px 0;
  .inputWrap {
    display: flex;
    border-radius: 6px;
    border: 1px solid var(--gray03);
    overflow: hidden;
    input {
      all: unset;
      padding: 10px;
      flex-basis: 80%;
      background-color: var(--white);
    }
    button {
      text-align: center;
      background-color: var(--gray06);
      border-left: 1px solid var(--gray03);
      font-weight: 600;
      border-radius: 6px;
      flex-basis: 20%;
    }
  }
  p {
    padding: 4px 0;
    font-size: 0.9em;
    color: var(--gray03);
  }
`;

const PromotionCode = () => {
  return (
    <PromotionCodeBlock>
      <div className="inputWrap">
        <input type="text" placeholder="프로모션 코드를 입력하세요" />
        <button>적용</button>
      </div>
      <p>*프로모션 코드를 입력하면 할인이 적용됩니다</p>
    </PromotionCodeBlock>
  );
};

export default PromotionCode;
