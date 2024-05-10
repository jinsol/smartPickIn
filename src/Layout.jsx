import React from "react";
import styled, { css } from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MouseFollower from "./MouseFollower";

const Main = styled.main`
  z-index: 1;
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  min-height: 100vh; // 임시

  ${(props) =>
    !props.isProductPage &&
    css`
      backdrop-filter: blur(60px);
    `}
`;

const Layout = () => {
  const location = useLocation();
  const isProductPage = location.pathname.includes("/product");

  return (
    <>
      {/* <MouseFollower /> */}
      <Header />
      <Main isProductPage={isProductPage}>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
