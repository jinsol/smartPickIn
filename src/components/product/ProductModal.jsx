import React from "react";
import styled from "styled-components";
import { FaCircleInfo } from "react-icons/fa6";

const ProductModalBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  background-color: var(--white);
  padding: 30px;
  max-width: 500px;
  height: fit-content;
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 20px;
  &.active {
    visibility: visible;
    opacity: 1;
    display: flex;
  }
  > div {
    &:first-child::after {
      content: "";
      width: 100%;
      height: 1px;
      bottom: -10px;
      position: absolute;
      background-color: var(--gray03);
    }
    &.ModalSection {
      position: relative;
      display: grid;
      .ModalHeader {
        display: flex;
        color: var(--black);
        font-size: 1.2em;
        font-weight: 800;
        > * {
          &:nth-child(1) {
            flex-basis: 10%;
          }
          &:nth-child(2) {
            flex-basis: 90%;
          }
        }
        .ModalIcon {
          color: var(--blue);
          display: flex;
          align-items: center;
        }
      }
      .ModalContent {
        display: flex;
        justify-content: flex-end;
        word-break: keep-all;
        padding: 10px 0;
        span {
          flex-basis: 90%;
        }
      }
    }
    &.ModalBtn {
      display: flex;
      justify-content: flex-end;
      button {
        font-size: 1.2em;
        color: var(--blue);
        font-weight: 800;
      }
    }
  }
`;

const ProductModal = ({}) => {
  const onClickClose = () => {
    document.querySelector(".Modal").classList.remove("active");
  };
  return (
    <>
      <ProductModalBlock className="Modal">
        <div className="ModalSection">
          <div className="ModalHeader">
            <span className="ModalIcon">
              <FaCircleInfo />
            </span>
            <span>장바구니에 상품을 추가했습니다</span>
          </div>
          <div className="ModalContent">
            <span>
              상품을 더 둘러보세요! 언제든지 마이페이지에서 상품을 확인할 수
              있습니다 .
            </span>
          </div>
        </div>
        <div className="ModalBtn">
          <button onClick={onClickClose}>확인</button>
        </div>
      </ProductModalBlock>
    </>
  );
};

export default ProductModal;
