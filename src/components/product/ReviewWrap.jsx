import React from "react";
import styled from "styled-components";
import { FaRegThumbsUp } from "react-icons/fa";

const ReviewWrapBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .ReviewTitle {
    display: flex;
  }
  .ReviewNumber {
    border: 1px solid var(--gray03);
    padding: 12px 6px;
    font-weight: 800;
    display: flex;

    .title {
      flex-basis: 30%;
      text-align: center;
    }
    .content {
      flex-basis: 70%;
      text-align: left;
      .number {
        color: var(--blue);
        text-decoration: underline;
      }
    }
  }

  .ReviewContent {
    background-color: var(--white);
    li {
      display: flex;
      line-height: 160%;
      .star {
        flex-basis: 30%;
        text-align: center;
      }
      .review {
        flex-basis: 70%;
      }
      &.Header {
        background-color: var(--gray06);
        font-weight: 700;
        padding: 6px;
        border-top: 1px solid var(--gray03);
        border-bottom: 1px solid var(--gray03);
        text-align: center;
      }
      &.Content {
        & {
          padding: 6px;
          border-bottom: 1px solid var(--gray03);
        }
        .star {
          color: var(--blue);
        }
      }
    }
  }
`;

const ReviewWrap = () => {
  return (
    <ReviewWrapBlock>
      <div className="ReviewTitle">
        <FaRegThumbsUp />
        ★★★★★ 4.9 구매 고객 총 평점(총 19건 상품평 기준)
      </div>
      <div className="ReviewNumber">
        <span className="title">상품평</span>
        <span className="content">
          총 <span className="number">19</span>건
        </span>
      </div>
      <ul className="ReviewContent">
        <li className="Header">
          <p className="star">별점</p>
          <p className="review">한줄평</p>
        </li>
        <li className="Content">
          <p className="star">★★★★★</p>
          <p className="review">너무 좋습니다</p>
        </li>
        <li className="Content">
          <p className="star">★★★★★</p>
          <p className="review">최고의 상품입니다</p>
        </li>
        <li className="Content">
          <p className="star">★★★★★</p>
          <p className="review">추천합니다</p>
        </li>
      </ul>
    </ReviewWrapBlock>
  );
};

export default ReviewWrap;
