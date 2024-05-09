import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchProducts } from "@/store/product";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ImageWrap from "./ImageWrap";
import ContentWrapTitle from "./TitleWrap";
import ContentWrapPrice from "./PriceWrap";
import HashtagWrap from "./HashtagWrap";
import DetailWrap from "./DetailWrap";
import TagWrap from "./TagWrap";

const ArticleBlock = styled.article`
  .ProductUl {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    @media (max-width: 1100px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const ProductLi = styled.li`
  display: flex;
  justify-content: space-between;
  > div {
    &:nth-child(1) {
      flex-basis: 20%;
    }
    &:nth-child(2) {
      flex-basis: 60%;
    }
    &:nth-child(3) {
      flex-basis: 15%;
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    > div {
      &:nth-child(1) {
        flex-basis: auto;
      }
      &:nth-child(2) {
        flex-basis: auto;
      }
      &:nth-child(3) {
        flex-basis: auto;
      }
    }
  }
  color: var(--gray02);
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--gray06);
  padding: 2em;
  border-radius: 20px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--blue);
    background-color: var(--light-blue);
  }
`;

const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr auto;
  grid-template-rows: 1fr auto 2fr;
  row-gap: 20px;
  position: relative;

  .Line {
    background-color: var(--gray02);
    grid-column: span 3;
    height: 1px;
  }
  .HashtagWrap {
    span {
      display: block;
    }
  }
  @media (max-width: 1100px) {
    display: block;
  }
`;

const PriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .Btn {
    background-color: var(--blue);
    width: 100%;
    color: var(--white);
    text-align: center;
    border-radius: 10px;
    padding: 20px 0;
    font-weight: 800;
    font-size: 1.2em;
  }
`;

const ProductList = ({ category }) => {
  const list = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState(list);
  const onClickProduct = (product) => navigate(`/product/${product.id}`);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (category === "전체") {
      gsap.fromTo(
        ".ProductUl li",
        {
          opacity: 0,
          scale: 0.5,
        },
        { opacity: 1, scale: 1, stagger: 0.1 }
      );
      setProducts(list);
      window.scrollTo(0, 0);
    } else {
      setProducts(list.filter((item) => item.category === category));
      gsap.fromTo(
        ".ProductUl li",
        {
          opacity: 0,
          scale: 0.5,
        },
        { opacity: 1, scale: 1, stagger: 0.1 }
      );
      window.scrollTo(0, 0);
    }
  }, [list, category]);

  return (
    <ArticleBlock>
      <ul className="ProductUl">
        {products.map((item, index) => {
          return (
            <ProductLi
              className="ProductLi"
              key={index}
              onClick={() => onClickProduct(item)}
            >
              <ImageWrap thumbnail={item.thumbnail} />
              <ContentWrap className="ContentWrap">
                <ContentWrapTitle title={item.title} subtitle={item.subtitle} />
                <TagWrap tag={item.tag} />
                <div className="Line"></div>
                <HashtagWrap hashtag={item.hashtag} />
                <DetailWrap detail={item.detail} />
              </ContentWrap>
              <PriceWrap className="PriceWrap">
                <ContentWrapPrice price={item.price} />
                <button className="Btn">자세히 보기</button>
              </PriceWrap>
            </ProductLi>
          );
        })}
      </ul>
    </ArticleBlock>
  );
};

export default ProductList;
