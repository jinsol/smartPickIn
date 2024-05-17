import React from "react";
import styled from "styled-components";
import HomeSection01 from "@/components/home/HomeSection01";
import HomeSection02 from "@/components/home/HomeSection02";
import HomeSection03 from "@/components/home/HomeSection03";
import HomeSection04 from "@/components/home/HomeSection04";

const Home = styled.div`
  section {
    width: 100%;
    min-height: 100vh;
   
    .homeRow {
      width: 1450px;
      transition: all 0.3s;
      @media (min-width: 1451px) {
        /* background-color: gray; */
      }
      @media (max-width: 1500px) {
        /* background-color: blue; */
        width: 100%;
        padding: 0 2%;
      }
      @media (max-width: 1100px) {
        /* background-color: red; */
        padding: 0 4%;
      }
      @media (max-width: 768px) {
        /* background-color: pink; */
        padding: 0 6%;
      }
    }
  }
`;

const HomeView = () => {
  return (
    <Home>
      <HomeSection01 />
      <HomeSection02 />
      <HomeSection03 />
      <HomeSection04 />
    </Home>
  );
};

export default HomeView;
