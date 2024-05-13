import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const PageTitleWrap = styled.article`
  padding: 20px 0;
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  gap: 80px;
  @media (max-width: 1100px) {
    grid-template-columns: auto;
    .pageImage {
      display: none;
    }
  }
`;

const PageTitleSection = styled.h2`
  color: var(--black);
  p {
    opacity: 0;
    transform: translateY(100px);
    font-weight: 900;
    span {
      b {
        text-emphasis: none;
        color: var(--blue);
        font-weight: 900;
      }
    }
    &:first-child span {
      font-weight: 600;
    }
  }
`;

const PageImage = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    height: 100%;
    width: auto;
  }
`;

const PageTitle = ({ title, imgUrl }) => {
  const titleRef = useRef(null);
  useEffect(() => {
    const titles = titleRef.current.querySelectorAll("p");
    gsap.to(titles, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      ease: "easeInEase",
    });
  }, [title]);

  return (
    <PageTitleWrap>
      <PageTitleSection ref={titleRef}>
        {title.map((item, index) => {
          return (
            <p key={index} className="largeFont">
              {item}
            </p>
          );
        })}
      </PageTitleSection>
      <PageImage className="pageImage">
        <img src={imgUrl} alt="" />
      </PageImage>
    </PageTitleWrap>
  );
};

export default PageTitle;
