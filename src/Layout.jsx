import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MouseFollower from "./MouseFollower";
import BackEffect from "./BackEffect";
import TopButton from "@/components/layout/TopButton"


const Main = styled.main`
  z-index: 1;
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  min-height: 100vh; // 임시
  backdrop-filter: blur(60px);
`;
const Layout = () => {
  const [isMouseOverHeader, setIsMouseOverHeader] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHeaderMouseEnter = () => {
    setIsMouseOverHeader(false);
  };

  const handleHeaderMouseLeave = () => {
    setIsMouseOverHeader(true);
  };
  return (
    <>
      {width > 1100 ? (
        <MouseFollower
          isMouseOverHeader={isMouseOverHeader}
          onMouseEnter={handleHeaderMouseEnter}
        />
      ) : (
        <BackEffect />
      )}

      <Header
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
      />
      <Main>
        <Outlet />
        <TopButton/>
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
