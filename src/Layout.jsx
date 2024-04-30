import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MouseFollower from "./MouseFollower";

const Main = styled.main`
  backdrop-filter: blur(60px);
  z-index: 1;
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  min-height: 100vh; // 임시
`;

const Layout = () => {
  return (
    <>
      <MouseFollower />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
