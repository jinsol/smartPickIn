import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import HomeSection04Slide from "@/components/home/HomeSection04Slide";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SectionBlock = styled.section`
  @media (max-width: 1100px) {
    padding: 10vh 0;
  }
`;

const UnorderedListBox = styled.ul`
  /* width: 1400px;
  padding: 0 2%;
  display: block;
  transition: all 0.3s; */
  & > li {
    padding: 1em 0 1.8em;
  }

  @media (max-width: 1450px) {
    width: 100%;
    overflow: hidden;
  }
`;

const TitleBox = styled.h3`
  span {
    display: block;
    &:nth-child(1) {
      color: var(--gray02);
    }
    &:nth-child(2) {
      color: var(--black);
    }
    .IconAni {
      display: inline-flex;
      gap: 2px;
      align-items: center;
      transition: transform 0.5s ease-in-out; /* 이미지 변환 애니메이션 설정 */
      opacity: 1;

      img {
        &:first-child {
          transform: translateY(8px);
        }
        &:nth-child(2) {
          transform: translateY(-10px);
        }
        &:last-child {
          transform: translateY(4px);
        }
      }
    }
  }
`;

const SubTitleBox = styled.p`
  padding: 20px 0;
  span {
    display: block;
  }
`;

const HomeSection04 = () => {
  React.useEffect(() => {
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
        .fromTo(
          selector,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, ease: "none", duration: 5 },
          0
        );
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section04",
        start: "100% 100%",
        end: "100% 100%",
        scrub: true,
        // markers: true,
      },
    });

    tl.fromTo(
      ".IconAni",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "none" },
      5
    );
  }, []);

  useEffect(() => {
    const animateIcons = () => {
      gsap.utils.toArray(".IconAni img").forEach((img) => {
        gsap.to(img, {
          yoyo: true,
          repeat: -1,
          y: 10,
          duration: 1,
          ease: "power1.inOut",
        });
      });
    };

    animateIcons();
    return () => {
      gsap.killTweensOf(".IconAni img");
    };
  }, []);

  return (
    <SectionBlock className="section04 flexCenter">
      <UnorderedListBox className="homeRow">
        <li>
          <TitleBox className="TextBox">
            <span className="largeFont">
              순위상승
              <i className="IconAni">
                <img src="/assets/image/rank_up.png" alt="rank_up" />
                <img src="/assets/image/rank_up.png" alt="rank_up" />
                <img src="/assets/image/rank_up.png" alt="rank_up" />
              </i>
            </span>
            <span className="largeFont">어떻게 해야할지 모르겠다면?</span>
          </TitleBox>
          <SubTitleBox>
            <span className="bodyFont">처음 진행하시나요?</span>
            <span className="bodyFont">
              순위를 올릴 수 있는 방법은 뭐가 있을까요?
            </span>
          </SubTitleBox>
        </li>
        <HomeSection04Slide />
      </UnorderedListBox>
    </SectionBlock>
  );
};

export default HomeSection04;
