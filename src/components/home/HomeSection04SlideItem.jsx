import React from "react";
import styled from "styled-components";

const HomeSection04SlideItemBlock = styled.ul`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10%;
  border-radius: 16px;
  border: 1px solid red;
  min-height: 500px;
  cursor: pointer;

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px); /* hover 시 카드 위로 이동 */
    box-shadow: 10px -10px 0px 10px blue, -10px 10px 0px 10px red;
  }
  @media (max-width: 1100px) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

const Tag = styled.li`
  background-color: pink;
  color: red;
  padding: 5px 10px;
  border-radius: 10px;
  width: fit-content;
  font-weight: 800;
  letter-spacing: -0.4px;
`;

const Title = styled.li`
  font-size: clamp(28px, 36px, 42px);
  font-weight: 800;
  color: gray;
`;

const List = styled.ul`
  li {
    list-style: disc;
  }
`;

const HomeSection04SlideItem = ({ tag, title, list }) => {
  return (
    <HomeSection04SlideItemBlock>
      <Tag>{tag}</Tag>
      <Title>{title}</Title>
      <li>
        <List>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </List>
      </li>
      <li>→</li>
    </HomeSection04SlideItemBlock>
  );
};

export default HomeSection04SlideItem;
