import React from "react";
import styled from "styled-components";

const ImageWrapBlock = styled.div`
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 4/3;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageWrap = ({ thumbnail }) => {
  return (
    <ImageWrapBlock className="ImageWrap">
      <img src={thumbnail} alt="" />
    </ImageWrapBlock>
  );
};

export default ImageWrap;
