import React from "react";
import styled from "styled-components";
import HomeSection01 from "@/components/home/HomeSection01";
import HomeSection02 from "@/components/home/HomeSection02";
import HomeSection03 from "@/components/home/HomeSection03";
import HomeSection04 from "@/components/home/HomeSection04";

const HomeSection = styled.div`
  section {
    & > ul {
      /* padding: 0 2%; */
    }
  }
`;

const HomeView = () => {
  return (
    <HomeSection>
      <HomeSection01 />
      <HomeSection02 />
      <HomeSection03 />
      <HomeSection04 />
    </HomeSection>
  );
};

export default HomeView;
