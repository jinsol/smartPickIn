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
  .HashtagWrap {
    display: flex;
    gap: 10px;
    span {
      border-radius: 50px;
      border: 1px solid red;
      background-color: pink;
      color: red;
      padding: 6px 20px;
    }
  }
`;

const ContentWrap = ({ product }) => {
  const { price, title, subtitle, hashtag, detail, id } = product;
  return (
    <ContentWrapBlock className="ContentWrap">
      <TitleWrap title={title} subtitle={subtitle} />
      <p>★★★★★ 4.5 (총 몇 개의 평가)</p>
      <DetailWrap detail={detail} />
      <PriceWrap price={price}></PriceWrap>
      <BtnWrap id={id} />
      <HashtagWrap hashtag={hashtag} />
    </ContentWrapBlock>
  );
};

export default ContentWrap;
