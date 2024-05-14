import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleLine3 from "@/components/layout/TitleLine3";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SectionBlock = styled.section`
  padding: 10vh 0;
  position: relative;
  & > ul {
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 3fr;
    gap: 80px;
    @media (max-width: 1450px) {
      width: 100%;
    }
    @media (max-width: 1100px) {
      grid-template-columns: auto;
    }
    @media (max-width: 768px) {
    }
  }
  .TextBox {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 10vh;
    gap: 40px;
    height: fit-content;
    > * {
      &:nth-child(1) {
      }
      &:nth-child(2) {
      }
    }
    .TextBoxCon4 {
      @media (max-width: 1100px) {
        display: none;
      }
      top: 10vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      div {
        background-color: var(--white);
        aspect-ratio: 1/1;
        border-radius: 30px;
        padding: 10%;
        border: 1px solid var(--gray06);
        transition: all 0.3s;
        position: relative;
        cursor: pointer;
        > * {
          transition: all 0.3s;
          display: block;
        }
        .BoxNumber {
          color: var(--blue);
          font-weight: 800;
          font-size: 1em;
          display: block;
        }
        .BoxTitle {
          color: var(--gray03);
          font-size: 1.4em;
          font-weight: 800;
        }
        .BoxArrow {
          position: absolute;
          right: 10%;
          bottom: 10%;
          border: 1px solid var(--gray03);
          color: var(--gray03);
          display: flex;
          place-content: center;
          place-items: center;
          padding: 10px;
          border-radius: 50%;
        }
        &.active {
          background-color: var(--blue);
          > * {
            color: var(--white);
            &.BoxArrow {
              border: 1px solid var(--white);
            }
          }
        }
      }
    }
  }
`;

const ContentsBox = styled.li`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  min-height: 500px;
  perspective-origin: top;
  ul {
    position: sticky;
    display: grid;
    top: 10vh;
    background-color: var(--light-blue);
    border-radius: 20px;
    border: 1px solid white;
    width: 100%;
    min-height: 80vh;
    transition: all 0.5s;
    grid-template-rows: auto auto auto 1fr;
    gap: 4%;
    padding: 10%;
    word-break: auto-phrase;
    li {
    }
    .number {
      color: var(--blue);
      font-weight: 900;
      font-size: 1.4em;
    }
    .title {
      font-weight: 800;
      font-size: clamp(32px, 2.5vw, 48px);
    }
    .subTitle {
      font-size: clamp(16px, 2.5vw, 23px);
      font-weight: 600;
      color: var(--gray01);
    }
    .content {
      color: gray;
      font-size: clamp(16px, 2.5vw, 16px);
    }
    .image {
      position: absolute;
      inset: auto 0 0 auto;
      @media (max-width: 1100px) {
        width: 80%;
        padding: 5%;
      }
    }
  }
`;

const HomeSection02 = () => {
  const contents = [
    {
      title: "플레이스 마케팅",
      subTitle:
        "플레이스는 적합도, 인기도, 신뢰도 총 3가지 요소로 순위최적화가 이루어집니다.",
      content:
        "플레이스는 특정 작업만 진행한다고 하여 순위 상승이 이루어지지 않는 것은 물론, 단기간에 과도한 작업시 어뷰징으로 불이익이 발생할 수 있습니다. 전체 요소를 통합적으로 관리하여 장기간에 걸쳐 안정적으로 순위를 높이는 전략을 세우는 것이 중요합니다.",
      img: "/assets/image/service_site.png",
    },
    {
      title: "사이트 마케팅",
      subTitle:
        "검색시 나오지 않는 사이트는 의미가 없다. 검색엔진최적화(SEO)를 통해 우선순위를 기대해 보세요.",
      content:
        "기본적인 사이트맵, robots의 부재를 비롯하여 메타태그, 오픈그래프, 파비콘, 캐노니컬, 스키마 마크업 등 SEO에 직·간접적으로 관련을 맺는 대부분의 요소를 검토하고, 자신의 사이트명 혹은 희망하는 키워드에서 웹사이트가 노출될 수 있도록 합니다.",
      img: "/assets/image/service_place.png",
    },
    {
      title: "백링크",
      subTitle:
        "백링크는 검색 결과에서 최소 70% 이상을 차지할만큼 가장 영향이 큰 요소입니다.",
      content:
        "백링크는 키워드를 기반으로 하여 타 사이트나 웹페이지에 유입 링크를 개제하는 것입니다. 이때 무조건 많은 양의 링크를 걸게 되면 오히려 불이익이 발생할 수 있으므로, 사이트 지수에 도움이 되는 높은 품질의 링크빌딩형 백링크를 이용하세요.",
      img: "/assets/image/service_backlink.png",
    },
    {
      title: "인스타그램 마케팅",
      subTitle: "한국인이 가장 선호하고 오래 사용하는 SNS 플랫폼 인스타그램",
      content:
        "한국인 10명 중 7명이 사용하며, 국내 고객을 타겟으로 한다면 필수적이라고 할 수 있는 인스타그램. 계정 육성 및 최적화 관리로 원하는 키워드, 원하는 타겟층에 24시간 노출시켜 팔로워 증가와 브랜드 인지도 상승은 물론, 다양한 온라인 홍보 마케팅에도 활용해 보세요.",
      img: "/assets/image/service_instagram.png",
    },
  ];

  const TL3C = ["내 업체에", "꼭 맞는 마케팅", "지금 시작해보세요."];
  gsap.registerPlugin(ScrollTrigger);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.utils.toArray(".ContentsBox ul").forEach((selector, index) => {
      const textBoxCon4Div = document.querySelector(
        `.TextBoxCon4 > div:nth-child(${index + 1})`
      );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: selector,
            start: "100% 100%", // 요소가 화면 위로 올라올 때 트리거
            end: "100% 100%", // 요소가 화면의 중앙으로 올 때 이벤트 끝
            scrub: 1,
          },
        })
        .add(() => {
          textBoxCon4Div.classList.add("active"); // active 클래스 추가
        }, 0)
        .fromTo(
          selector.querySelector(".number"),
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, ease: "none", duration: 0.5 },
          0
        )
        .fromTo(
          selector.querySelector(".title"),
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, ease: "none", duration: 0.5 },
          0.1
        )
        .fromTo(
          selector.querySelector(".subTitle"),
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, ease: "none", duration: 0.5 },
          0.1
        )
        .fromTo(
          selector.querySelector(".content"),
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, ease: "none", duration: 0.5 },
          0.2
        )
        .fromTo(
          selector.querySelector(".image"),
          { opacity: 0 },
          { opacity: 1, ease: "none", duration: 1 },
          0.2
        );
    });
  }, []);

  const onClickBox = () => {
    navigate("/product");
  };

  return (
    <SectionBlock>
      <ul className="homeRow">
        <li className="TextBox">
          <TitleLine3 TL3C={TL3C} />
          <div className="TextBoxCon4">
            {contents.map((item, index) => {
              return (
                <div key={index} onClick={onClickBox}>
                  <span className="BoxNumber">0{index + 1}</span>
                  <span className="BoxTitle">{item.title}</span>
                  <span className="BoxArrow">
                    <FaArrowRight />
                  </span>
                </div>
              );
            })}
          </div>
        </li>

        <ContentsBox className="ContentsBox">
          {contents.map((item, index) => {
            return (
              <ul key={index}>
                <li className="number">0{index + 1}</li>
                <li className="title">{item.title}</li>
                <li className="subTitle">{item.subTitle}</li>
                <li className="content bodyFont">{item.content}</li>
                <li className="image">
                  <img src={item.img} alt={item.title} />
                </li>
              </ul>
            );
          })}
        </ContentsBox>
      </ul>
    </SectionBlock>
  );
};

export default HomeSection02;
