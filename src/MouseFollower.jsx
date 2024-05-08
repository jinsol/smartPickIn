import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const MouseFollowerBlock = styled.span`
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  z-index: 1;
`;

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDoubleCircle, setIsDoubleCircle] = useState(false);
  const location = useLocation();
  const isProductPage = location.pathname.includes("/product");

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsDoubleCircle(e.clientY > 100 && !isProductPage);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [isProductPage]);

  return (
    <>
      {isDoubleCircle ? (
        <>
          <MouseFollowerBlock
            style={{
              left: position.x + 100,
              top: position.y - 100,
              backgroundColor: "var(--blue)",
              transform: "scale(15)",
            }}
          />
          <MouseFollowerBlock
            style={{
              left: position.x - 100,
              top: position.y + 100,
              backgroundColor: "var(--yellow)",
              transform: "scale(15)",
            }}
          />
        </>
      ) : (
        <MouseFollowerBlock
          style={{
            left: position.x,
            top: position.y,
            backgroundColor: "var(--blue)",
            zIndex: 100000,
          }}
        />
      )}
    </>
  );
};

export default MouseFollower;
