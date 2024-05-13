import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";

const BtnBlock = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 60px;
  border-radius: 50px;
  font-weight: 700;
  transition: all 0.3s;
  .icon {
    animation: arrowDisappear 0.5s forwards;
  }
  &:hover {
    background-color: var(--blue-hover);
    .icon {
      animation: arrowAnimation 1.5s forwards;
    }
  }
  @keyframes arrowAnimation {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    50% {
      opacity: 0;
      transform: translateX(100%);
    }
    51% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

const Btn = ({ text }) => {
  return (
    <BtnBlock className="BblueCwhite">
      {text} <FaArrowRight className="icon" />
    </BtnBlock>
  );
};

export default Btn;
