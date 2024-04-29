import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MouseFollower from "./MouseFollower";

const Layout = () => {
  return (
    <>
      <MouseFollower />
      <Header />
      <main
        style={{
          backdropFilter: "blur(60px)",
          zIndex: 1,
          position: "relative",
          backgroundColor: "rgba(255, 255, 255,0.5)",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
