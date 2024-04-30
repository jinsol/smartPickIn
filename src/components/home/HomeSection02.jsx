import React from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleLine3 from "@/components/layout/TitleLine3";
gsap.registerPlugin(ScrollTrigger);

const SectionBlock = styled.section`
  padding: 10vh 0;
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
    h2 {
      position: sticky;
      top: 10vh;
    }
  }
`;

const ContentsBox = styled.li`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  min-height: 500px;
  /* perspective: 900px; */
  perspective-origin: top;
  ul {
    position: sticky;
    display: grid;
    top: 10vh;
    /* background-color: rgba(255, 255, 255, 0.1); */
    background-color: var(--light-blue);
    border-radius: 20px;
    /* backdrop-filter: blur(20px); */
    border: 1px solid white;
    width: 100%;
    min-height: 80vh;
    transition: all 0.5s;
    grid-template-rows: auto auto auto 1fr;
    gap: 2%;
    padding: 7%;
    opacity: 0;
    transform: translateX(100%);
    word-break: auto-phrase;
    li {
    }
    .number {
      color: var(--blue);
      font-weight: 900;
    }
    .title {
      font-weight: 800;
      font-size: clamp(32px, 2.5vw, 48px);
    }
    .subTitle {
      font-size: clamp(16px, 2.5vw, 23px);
      font-weight: 600;
      color: gray;
    }
    .content {
      color: gray;
      font-size: clamp(16px, 2.5vw, 16px);
    }
    .image {
      position: absolute;
      inset: auto 0 0 auto;
    }
  }
`;

const HomeSection02 = () => {
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

  React.useEffect(() => {
    gsap.utils.toArray(".ContentsBox ul").forEach((selector) => {
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
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, ease: "none", duration: 0 },
          0
        );
    });
  }, []);

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
        "검색시 나오지 않는 사이트는 의미가 없다.검색엔진최적화(SEO)를 통해 우선순위를 기대해 보세요.",
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

  return (
    <SectionBlock>
      <ul className="homeRow">
        <li className="TextBox">
          <TitleLine3 TL3C={TL3C} />
        </li>
        <ContentsBox className="ContentsBox">
          {contents.map((item, index) => {
            return (
              <ul key={index}>
                <li className="number">{index + 1}</li>
                <li className="title">{item.title}</li>
                <li className="subTitle">{item.subTitle}</li>
                <li className="content">{item.content}</li>
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
