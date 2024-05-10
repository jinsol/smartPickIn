import React, { useState } from "react";
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
  const [isMouseOverHeader, setIsMouseOverHeader] = useState(false);
  const handleHeaderMouseEnter = () => {
    setIsMouseOverHeader(true);
  };

  const handleHeaderMouseLeave = () => {
    setIsMouseOverHeader(false);
  };
  return (
    <>
      <MouseFollower isMouseOverHeader={isMouseOverHeader} />
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
