import React from "react";
import styled from "styled-components";
import TitleWrap from "./TitleWrap";
import PriceWrap from "./PriceWrap";
import HashtagWrap from "./HashtagWrap";
import DetailWrap from "./DetailWrap";
import BtnWrap from "./BtnWrap";

const ContentWrapBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid var(--gray04);
  border-radius: 10px;
  padding: 2em;
  background-color: rgba(255, 255, 255, 0.5);
  > div {
    &:nth-child(1) {
      border-bottom: 2px solid var(--gray01);
    }
  }
  .HashtagWrap {
    display: flex;
    gap: 10px;
    span {
      border-radius: 50px;
      border: 1px solid var(--blue);
      background-color: var(--light-blue);
      color: var(--blue);
      padding: 6px 20px;
    }
  }
`;

const ContentWrap = ({ product }) => {
  const { price, title, subtitle, hashtag, detail } = product;
  return (
    <ContentWrapBlock className="ContentWrap">
      <TitleWrap title={title} subtitle={subtitle} />
      <DetailWrap detail={detail} />
      <PriceWrap price={price}></PriceWrap>
      <BtnWrap product={product} />
      <HashtagWrap hashtag={hashtag} />
    </ContentWrapBlock>
  );
};

export default ContentWrap;
