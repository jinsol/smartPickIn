import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

const TextAni = styled.div`
  display: inline-block;
  margin: 0 20px;
  img {
    height: 100%;
    width: auto;
  }
  @media (max-width: 768px) {
    margin: 0px;
  }
`;

const HomeSection01TextAni = () => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.defaults({ ease: "none" });
    gsap.set(".textAni span", { opacity: 0 });

    const tl = gsap.timeline({ repeat: 3, repeatDelay: 1, yoyo: true });
    const texts = ["기업", "", "식당", "", "카페", "", "펜션", "", "병원"];

    gsap.to(".imageAni", { display: "none", delay: 2 });

    texts.forEach((text, index) => {
      let delay = index === 0 ? 3 : 0.4; // 첫 번째 텍스트의 경우 delay를 2.5로, 나머지는 1로 설정
      tl.to(".textAni span", {
        delay: delay,
        opacity: 1,
        duration: 1,
        text: {
          value: text,
          autoAlpha: 1,
          repeat: -1,
          yoyo: true,
          repeatDelay: 1,
          ease: "power4.out",
        },
      });
    });
  }, []);
  return (
    <TextAni className="textAni">
      <img src="/assets/image/main_icn02.gif" alt="GIF" className="imageAni" />
      <span></span>
    </TextAni>
  );
};

export default HomeSection01TextAni;
