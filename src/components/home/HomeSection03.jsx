import React from "react";
import styled from "styled-components";
import HomeSection03Title from "@/components/home/HomeSection03Title";
import HomeSection03Slide from "@/components/home/HomeSection03Slide";

const SectionBlock = styled.section`
  min-height: 100vh;
  padding: 200px 0;
  overflow: hidden;
`;

const HomeSection03 = () => {
  return (
    <SectionBlock>
      <HomeSection03Title />
      <HomeSection03Slide />
    </SectionBlock>
  );
};

export default HomeSection03;
