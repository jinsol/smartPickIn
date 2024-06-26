import React from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HomeSection03TitleBlock = styled.div`
  max-width: 1450px;
  margin: auto;
  @media (max-width: 1450px) {
    width: 100%;
  }
  h2 {
    span {
      display: block;
      &:nth-child(1) {
        color: lightgray;
      }
      &:nth-child(2) {
        color: gray;
      }
      &:nth-child(3) {
      }
    }
  }
`;

const HomeSection03Title = () => {
  React.useEffect(() => {
    gsap.utils.toArray("h2 span").forEach((selector) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: selector,
            start: "100% 100%",
            end: "100% 100%",
            scrub: 1,
            // markers: true,
          },
        })
        .fromTo(
          selector,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, ease: "none", duration: 5 },
          0
        );
    });
  }, []);
  return (
    <HomeSection03TitleBlock className="homeRow">
      <h2>
        <span className="largeFont">안 들리세요?</span>
        <span className="largeFont">매출 오르는 소리!</span>
      </h2>
    </HomeSection03TitleBlock>
  );
};

export default HomeSection03Title;
