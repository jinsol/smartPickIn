import React, { useEffect } from "react";
import styled from "styled-components";
// ======================= GSAP 애니메이션 =======================
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// ======================= GSAP 애니메이션 =======================
const AsideMenu = styled.aside`
  overflow: hidden;
  z-index: 1;
  ul {
    display: inline-flex;
    background-color: var(--light-blue);
    li {
      font-size: 1.2em;
      button {
        display: block;
        width: 100%;
        padding: 10px 20px;
      }
      &.active {
        button {
          color: var(--blue);
          border-bottom: 2px solid var(--blue);
          font-weight: 800;
        }
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
    <AsideMenu className="asideMenu tabMargin">
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
