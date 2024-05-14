import React from "react";
import styled from "styled-components";
import ImageWrap from "./ImageWrap";
import ContentWrap from "./ContentWrap";
import ReviewWrap from "./ReviewWrap";
import ProductModal from "./ProductModal";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  column-gap: 80px;
  row-gap: 20px;
  padding: 10vh 0;
  .ContentWrap {
    grid-row-end: span 2;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const ProductDetailSection = ({ product }) => {
  const { thumbnail } = product;
  return (
    <Section>
      <ImageWrap thumbnail={thumbnail} />
      <ContentWrap product={product} />
      <ReviewWrap />
      <ProductModal />
    </Section>
  );
};

export default ProductDetailSection;
