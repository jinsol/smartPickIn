import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchProducts } from "@/store/product";
import { useSelector, useDispatch } from "react-redux";
import gsap from "gsap";

const articleBlock = styled.article`
  .main {
    display: flex;
    flex-direction: column;
    gap: 20px;

    li {
      border: 1px solid red;
      padding: 2em;
      border-radius: 20px;
    }
  }
`;

const ProductList = ({ category }) => {
  const list = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const [products, setProducts] = useState(list);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (category === "all") {
      setProducts(list);
      gsap.from(".main li", {
        duration: 0.5,
        opacity: 0,
        scale: 0.5,
        stagger: 0.1,
        delay: 0,
      });
    } else {
      setProducts(list.filter((item) => item.category === category));
      // .main의 li가 사라지거나 등장할 때 scale 애니메이션 넣기
      gsap.fromTo(
        ".main li",
        {
          opacity: 0,
          scale: 0.5,
        },
        { opacity: 1, scale: 1, stagger: 0.1, ease: "back.out(1.3)" }
      );
    }
  }, [list, category]);

  useEffect(() => {
    // .main의 li가 사라지거나 등장할 때 scale 애니메이션 넣기
  }, []);

  return (
    <articleBlock>
      <ul className="main">
        {products.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </articleBlock>
  );
};

export default ProductList;
