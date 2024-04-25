import React from "react";
import styled from "styled-components";

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

  /* 미디어 쿼리로 최대 너비 1450px 이하일 때 적용할 스타일 설정 */
  @media (max-width: 1450px) {
    width: 100%;
  }
  @media (max-width: 1100px) {
    background-color: blue;
  }
  @media (max-width: 768px) {
    background-color: pink;
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ListBox = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2em;
  &.right {
    text-align: right;
  }
`;

const TitleBox = styled.div`
  font-size: clamp(82px, 2.5vw, 42px);
  transition: all 0.3s;
  font-weight: 900;
`;

const HashTagBox = styled.div`
  font-size: clamp(20px, 2.5vw, 16px);
`;

const SubTitleBox = styled.div`
  font-size: clamp(20px, 2.5vw, 16px);
`;

const ButtonBox = styled.div`
  font-size: clamp(20px, 2.5vw, 16px);
  a {
    padding: 10px 40px;
    border-radius: 50px;
    color: white;
    background-color: black;
  }
`;

const HomeView = () => {
  return (
    <>
      <SectionBlock>
        <UnorderedListBox>
          <ListBox>
            <TitleBox>
              <h2 className="box_left_title">
                <span>잘되는 &quot;예시&quot;의 비밀</span>
                <span>스마트픽인</span>
              </h2>
            </TitleBox>
            <HashTagBox>
              <h3>#브랜딩 #순위상승 #매출 #NO어뷰징</h3>
            </HashTagBox>
          </ListBox>
          <ListBox className="right">
            <SubTitleBox>
              <h4>
                <span>SEO 검색엔진 최적화 전문가들이 </span>
                <span>맞춤형 순위상승 전략을 제안드립니다.</span>
              </h4>
            </SubTitleBox>
            <ButtonBox>
              <a href="#">진단받기 →</a>
            </ButtonBox>
          </ListBox>
        </UnorderedListBox>
      </SectionBlock>
      <section>2</section>
      <section>3</section>
      <section>4</section>
    </>
  );
};

export default HomeView;
