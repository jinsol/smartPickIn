import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TitleLine3Block = styled.article`
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

const TitleLine3 = ({ TL3C }) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.utils.toArray(".TextBox span").forEach((selector) => {
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
        .to(selector, { opacity: 1, y: 0, ease: "none", duration: 5 }, 0);
    });
  }, []);
  return (
    <TitleLine3Block>
      <h2 className="TextAni">
        {TL3C.map((item, index) => {
          return (
            <span key={index} className="largeFont">
              {item}
            </span>
          );
        })}
      </h2>
    </TitleLine3Block>
  );
};

export default TitleLine3;
