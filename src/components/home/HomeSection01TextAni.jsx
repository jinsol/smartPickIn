import React from "react";
import styled from "styled-components";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

const TextAni = styled.div`
  width: fit-content;
  display: inline-block;
`;
const HomeSection01TextAni = () => {
  React.useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.defaults({ ease: "none" });
    const tl = gsap.timeline({ repeat: 3, repeatDelay: 1, yoyo: true });
    const texts = ["기업", "", "식당", "", "카페", "", "팬션", "", "병원"];
    texts.forEach((text) => {
      tl.to(".textAni", {
        duration: 0.5,
        text: {
          value: text,
          autoAlpha: 1,
          repeat: 1,
          yoyo: true,
          repeatDelay: 1,
          ease: "power4.out",
        },
        delay: 1,
      });
    });
  }, []);

  return <TextAni className="textAni">기업</TextAni>;
};

export default HomeSection01TextAni;
