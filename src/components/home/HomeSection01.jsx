import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import HomeSection01TextAni from "@/components/home/HomeSection01TextAni";

const SectionBlock = styled.section`
  height: 100vh;
  background-color: antiquewhite;
  display: grid;
  place-content: center;
  span {
    display: block;
  }
`;
const UnorderedListBox = styled.ul`
  width: 1450px;
  display: grid;
  grid-template-columns: 3fr 1fr;

  gap: 80px;
  transition: all 0.3s;

  @media (max-width: 1450px) {
    width: 100%;
  }
  @media (max-width: 1100px) {
    background-color: blue;
    grid-template-columns: auto;
    gap: 0;
  }
  @media (max-width: 768px) {
    background-color: pink;

    text-align: center;
  }
`;

const ListBox = styled.li`
  display: grid;
  grid-template-rows: 3fr 1fr;
  gap: 2em;
  &.right {
    text-align: right;
  }
  @media (max-width: 1100px) {
    grid-template-rows: auto;
    &.right {
      text-align: center;
    }
  }
`;

const TitleBox = styled.div`
  transition: all 0.3s;
  font-weight: 900;
  * {
    font-size: clamp(48px, 82px, 82px);
  }
  .test-container {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
    .test {
      flex: auto;

      display: inline-block;

      span {
        width: 0;
        opacity: 0;
        height: 1px;
        transition: all 2s;
        background-color: gray;
      }
    }
  }
`;

const SupportBox = styled.div`
  display: flex;
  align-items: center;
  &.right {
    justify-content: flex-end;
  }
  * {
    font-size: clamp(16px, 2.5vw, 20px);
  }
  a {
    padding: 10px 40px;
    border-radius: 50px;
    color: white;
    background-color: black;
  }
`;

const SubTitleBox = styled.div`
  color: gray;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  * {
    font-weight: 300;
    font-size: clamp(16px, 2.5vw, 20px);
  }
`;

const HomeSection01 = () => {
  React.useEffect(() => {
    gsap.from(".test span", {
      opacity: 1,
      width: "100%",
      duration: 1,
    });
  }, []);

  return (
    <SectionBlock>
      <UnorderedListBox>
        <ListBox>
          <TitleBox>
            <h2 className="box_left_title">
              <span>
                잘되는 &quot;
                <HomeSection01TextAni />
                &quot;의 비밀
              </span>
              <span className="test-container">
                스마트픽인
                <i className="test">
                  <span></span>
                </i>
              </span>
            </h2>
          </TitleBox>
          <SupportBox>
            <h3>#브랜딩 #순위상승 #매출 #NO어뷰징</h3>
          </SupportBox>
        </ListBox>
        <ListBox className="right">
          <SubTitleBox>
            <h4>
              <span>SEO 검색엔진 최적화 전문가들이 </span>
              <span>맞춤형 순위상승 전략을 제안드립니다.</span>
            </h4>
          </SubTitleBox>
          <SupportBox className="right">
            <a href="#">진단받기 →</a>
          </SupportBox>
        </ListBox>
      </UnorderedListBox>
    </SectionBlock>
  );
};

export default HomeSection01;
