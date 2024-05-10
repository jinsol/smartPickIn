import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BtnWrapBlock = styled.button`
  font-weight: 600;
  text-align: center;
  padding: 14px;
  display: block;
  width: 100%;
  font-size: 1.2em;
  transition: all 0.3s;
  border-radius: 10px;

  background-color: var(--white);
  color: var(--gray02);
  border: 1px solid var(--gray02);
  &:hover {
    background-color: var(--light-blue);
    color: var(--blue);
    border: 1px solid var(--blue);
  }

  &.primary {
    background-color: var(--blue);
    color: var(--white);
    border: 1px solid var(--blue);
    &:hover {
      background-color: var(--blue-hover);
    }
  }
`;

const BtnWrap = ({ button, btnType, link }) => {
  const navigate = useNavigate();
  const onClickButton = () => {
    if (link) {
      navigate(link);
    }
  };
  return (
    <BtnWrapBlock type="button" className={btnType} onClick={onClickButton}>
      {button}
    </BtnWrapBlock>
  );
};

export default BtnWrap;
