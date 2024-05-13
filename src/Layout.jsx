import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MouseFollower from "./MouseFollower";

const Main = styled.main`
  z-index: 1;
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  min-height: 100vh; // 임시
  backdrop-filter: blur(60px);
`;
const Layout = () => {
  const [isMouseOverHeader, setIsMouseOverHeader] = useState("");

  const handleHeaderMouseEnter = () => {
    setIsMouseOverHeader(false);
  };

  const handleHeaderMouseLeave = () => {
    setIsMouseOverHeader(true);
  };
  return (
    <>
      <MouseFollower
        isMouseOverHeader={isMouseOverHeader}
        onMouseEnter={handleHeaderMouseEnter}
      />
      <Header
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
      />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
