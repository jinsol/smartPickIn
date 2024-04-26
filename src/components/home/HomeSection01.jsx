import React from "react";
import styled from "styled-components";
import gsap from "gsap";
import HomeSection01TextAni from "@/components/home/HomeSection01TextAni";

const SectionBlock = styled.section`
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  display: grid;
  place-content: center;
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
  h2 {
    span {
      font-size: clamp(62px, 2.5vw, 82px);
    }
  }
  @media (max-width: 1100px) {
    h2 {
      span {
        justify-content: center;
      }
    }
  }
`;

const LineAniBox = styled.span`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  .LineAni {
    flex: auto;
    display: inline-block;
    span {
      width: 0;
      opacity: 0;
      height: 1px;
      display: block;
      transition: all 2s;
      background-color: gray;
    }
    @media (max-width: 1100px) {
      display: none;
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
  @media (max-width: 1100px) {
    justify-content: center;
    &.right {
      justify-content: center;
    }
  }
`;

const SubTitleBox = styled.div`
  color: gray;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 3%;
  h4 {
    span {
      display: block;
      font-weight: 300;
      font-size: clamp(16px, 2.5vw, 20px);
    }
  }
  @media (max-width: 1100px) {
    justify-content: center;
    padding-bottom: 0;
  }
`;

const HomeSection01 = () => {
  React.useEffect(() => {
    gsap.from(".LineAni span", {
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
              <LineAniBox>
                스마트픽인
                <i className="LineAni">
                  <span></span>
                </i>
              </LineAniBox>
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
