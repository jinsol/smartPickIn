import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TabUl = styled.ul`
  display: flex;
  gap: 20px;
  li {
    &.active {
      color: white;
      background-color: red;
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
