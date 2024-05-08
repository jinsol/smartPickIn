import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchProducts } from "@/store/product";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

import {
  MdPlace,
  MdManageHistory,
  MdOutlineTrendingUp,
  MdOutlineScience,
  MdOutlineTraffic,
  MdAddLink,
} from "react-icons/md";

const ArticleBlock = styled.article`
  .ProductUl {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

const ProductLi = styled.li`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;

  gap: 20px;
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

const ImageWrap = styled.div`
  background-color: blue;
  border-radius: 10px;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr auto;
  grid-template-rows: 1fr auto 2fr;
  row-gap: 20px;
  position: relative;

  .Line {
    background-color: var(--gray02);
    grid-column: span 3;
    height: 1px;
  }
  .Hashtag {
    span {
      display: block;
      &::before {
        content: "#";
      }
    }
  }
  .Detail {
    p {
      line-height: 180%;
      word-break: keep-all;
    }
  }
`;

const ContentWrapTitle = styled.div`
  .SubTitle {
    color: var(--blue);
    font-size: 0.8em;
  }
  .Title {
    color: var(--black);
    font-size: 1.4em;
  }
`;

const ContentWrapTag = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  .TagIcon {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    .TagIcon_text {
      font-size: 0.8em;
      line-height: 180%;
    }
    .TagIcon_icon {
      display: inline-flex;
      place-content: center;
      place-items: center;

      width: 30px;
      height: 30px;
      border: 1px solid var(--gray02);
      border-radius: 50%;
    }
  }
`;

const PriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .VAT {
    color: var(--gray05);
    font-size: 0.8em;
  }
  .Price {
    color: var(--black);

    letter-spacing: 0;
    b {
      font-size: 1.4em;
    }
  }
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
    }
  }, [list, category]);

  const tagIconMap = {
    플레이스: <MdPlace />,
    통합관리: <MdManageHistory />,
    지수상승: <MdOutlineTrendingUp />,
    테크니컬: <MdOutlineScience />,
    트래픽: <MdOutlineTraffic />,
    백링크: <MdAddLink />,
  };

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
              <ImageWrap className="ImageWrap">
                <img src={item.thumbnail} alt="" />
              </ImageWrap>
              <ContentWrap className="ContentWrap">
                <ContentWrapTitle className="ContentWrap_Title">
                  <h4 className="SubTitle">{item.subtitle}</h4>
                  <h3 className="Title">{item.title}</h3>
                </ContentWrapTitle>
                <ContentWrapTag className="ContentWrap_Tag">
                  {item.tag &&
                    Array.isArray(item.tag) &&
                    item.tag.map((tagItem, index) => (
                      <div key={index} className="TagIcon">
                        <span className="TagIcon_icon">
                          {tagIconMap[tagItem]}
                        </span>
                        <span className="TagIcon_text">{tagItem}</span>
                      </div>
                    ))}
                </ContentWrapTag>
                <div className="Line"></div>
                <div className="Hashtag">
                  {item.hashtag &&
                    Array.isArray(item.hashtag) &&
                    item.hashtag.map((hashtagItem, index) => (
                      <span key={index} className="Hashtag">
                        {hashtagItem}
                      </span>
                    ))}
                </div>
                <div className="Detail">
                  <p>{item.detail}</p>
                </div>
              </ContentWrap>
              <PriceWrap className="PriceWrap">
                <span>
                  <h4 className="VAT">VAT 별도</h4>
                  <h3 className="Price">
                    {item.price == "옵션별 상이" ? (
                      <>
                        <b>{item.price}</b>
                      </>
                    ) : (
                      <>
                        <b>{item.price}</b> 원
                      </>
                    )}
                  </h3>
                </span>
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
