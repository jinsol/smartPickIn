import React, { useState } from "react";
import styled from "styled-components";

const BackgroundEffect = styled.div`
  animation: moveEffect 10s linear infinite;
  display: flex;
  position: fixed;
  transform: translate(-50%);
  span {
    border-radius: 50%;
    opacity: 0.5;
    display: inline-block;
    &:nth-child(1) {
      width: 500px;
      height: 500px;
      background-color: var(--yellow);
      transform: translateX(10%);
    }
    &:nth-child(2) {
      width: 300px;
      height: 300px;
      background-color: var(--blue);
      transform: translateX(-10%);
    }
  }
  @keyframes moveEffect {
    0% {
      top: 10%;
      left: 80%;
    }
    25% {
      top: 10%;
      left: 0;
    }
    50% {
      top: 10%;
      left: 0;
    }
    75% {
      top: 10%;
      left: 80%;
    }
    100% {
      top: 10%;
      left: 80%;
    }
  }
`;
const BackEffect = () => {
  return (
    <BackgroundEffect>
      <span></span>
      <span></span>
    </BackgroundEffect>
  );
};

export default BackEffect;
