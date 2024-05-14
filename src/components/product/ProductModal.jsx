import React from "react";
import styled from "styled-components";
import { FaCircleInfo } from "react-icons/fa6";

const ProductModalBlock = styled.div`
  position: fixed;
  visibility: hidden;
  opacity: 0;
  z-index: 999999;
  transition: all 0.3s;
  background-color: var(--white);
  transform: translateY(100);
  &.active {
    visibility: visible;
    opacity: 1;
    display: block;
    inset: 30%;
    transform: translateY(0);
  }
  .ModalSection {
    display: grid;
    grid-template-columns: auto;
  }
`;

const ProductModal = ({ message }) => {
  return (
    <>
      <ProductModalBlock className="Modal">
        <div className="ModalSection">
          <span className="ModalIcon">
            <FaCircleInfo />
          </span>
          <span>{message}</span>
          <span>내용</span>
        </div>
        <div className="ModalBtn">
          <button>확인</button>
        </div>
      </ProductModalBlock>
    </>
  );
};

export default ProductModal;
