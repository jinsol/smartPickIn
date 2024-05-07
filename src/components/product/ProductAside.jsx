import React from "react";
import styled from "styled-components";
// ======================= GSAP 애니메이션 =======================
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// ======================= GSAP 애니메이션 =======================
const AsideMenu = styled.aside`
  position: fixed;
  left: 0;
  width: 200px;
  height: 50vh;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--light-blue);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  ul {
    li {
      font-size: 1.4em;
      button {
        display: block;
        width: 100%;
        padding: 20px;
      }
      &.active {
        background-color: var(--blue);
        color: var(--white);
      }
    }
  }
`;

const ProductAside = ({ changeCategory, category }) => {
  const categoryList = ["all", "woman", "man", "underwear", "kids"];
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
