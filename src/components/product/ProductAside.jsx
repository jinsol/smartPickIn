import React, { useEffect } from "react";
import styled from "styled-components";
// ======================= GSAP 애니메이션 =======================
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// ======================= GSAP 애니메이션 =======================
const AsideMenu = styled.aside`
  background-color: var(--light-blue);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  z-index: 1;
  ul {
    li {
      font-size: 1.2em;
      button {
        display: block;
        width: 100%;
        padding: 10px 0;
        padding-left: 20px;
      }
      &.active {
        background-color: var(--blue);
        color: var(--white);
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
      }
    }
  }
`;

const ProductAside = ({ changeCategory, category }) => {
  const categoryList = [
    "전체",
    "플레이스",
    "사이트",
    "백링크",
    "순위확인",
    "인스타그램",
  ];

  return (
    <AsideMenu className="asideMenu">
      <ul>
        {categoryList.map((item, index) => {
          return (
            <li key={index} className={category === item ? "active" : ""}>
              <button type="button" onClick={() => changeCategory(item)}>
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </AsideMenu>
  );
};

export default ProductAside;
