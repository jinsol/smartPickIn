import React from "react";
import styled from "styled-components";

const TabUl = styled.ul`
  display: inline-flex;
  background-color: var(--light-blue);
  border-radius: 50px;
  position: relative;
  margin: 20px 0;
  li {
    font-size: 1.2em;
    button {
      padding: 0.6em 2em 0.7em;
    }
    &.active {
      color: var(--white);
      font-weight: 800;
      background-color: var(--blue);
      border-radius: 50px;
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
