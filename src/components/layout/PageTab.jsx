import React from "react";
import styled from "styled-components";

const TabUl = styled.ul`
  display: flex;
  gap: 20px;
  li {
    font-size: 1.2em;
    &.active {
      color: var(--blue);
      font-weight: 800;
    }
  }
`;

const PageTab = ({ menu, activeMenu, onClick }) => {
  return (
    <TabUl>
      {menu.map((item, index) => {
        return (
          <li key={index} className={activeMenu === item && "active"}>
            <button onClick={() => onClick(item)}>{item}</button>
          </li>
        );
      })}
    </TabUl>
  );
};

export default PageTab;
