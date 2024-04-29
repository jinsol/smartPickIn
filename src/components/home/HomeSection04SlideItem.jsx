import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const HomeSection04SlideItemBlock = styled.ul`
  background-color: white;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  gap: 2%;
  padding: 14%;
  border-radius: 16px;
  border: 1px solid var(--gray06);
  min-height: 500px;
  cursor: pointer;
  position: relative;
  backdrop-filter: blur(20px);

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  * {
    transition: all 0.5s;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    /* background-color: var(--blue); */
    /* background: linear-gradient(
      130deg,
      rgba(23, 116, 208, 0.3),
      rgba(23, 116, 208, 1)
    ); */

    border: 1px solid var(--white);
    transform: translateY(-5px);
    box-shadow: 5px -5px 0px 5px var(--gray06), -5px 5px 0px 5px var(--blue);
    * {
      color: var(--blue);
    }
  }
  @media (max-width: 1100px) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

const Tag = styled.li`
  background-color: var(--light-blue);
  color: var(--blue);
  padding: 5px 10px;
  border-radius: 10px;
  width: fit-content;
  font-weight: 800;
  letter-spacing: -0.4px;
`;

const Title = styled.li`
  font-size: clamp(28px, 36px, 42px);
  font-weight: 800;
  color: var(--gray05);
`;

const List = styled.ul`
  li {
    color: var(--gray05);
    font-weight: 600;
  }
`;

const Arrow = styled.li`
  display: flex;
  align-items: flex-end;

  button {
    display: flex;
    letter-spacing: 0;
    gap: 10px;
    align-items: center;
    color: var(--gray05);
  }
`;

const DecoImage = styled.li`
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 60%;
  height: 60%;
  inset: auto 0 0 auto;
  img {
    width: 100%;
  }
`;

const HomeSection04SlideItem = ({ tag, title, list, image }) => {
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
      <Arrow>
        <button>
          Learn more
          <FaArrowRight />
        </button>
      </Arrow>
      <DecoImage>
        <img src={image} alt="" />
      </DecoImage>
    </HomeSection04SlideItemBlock>
  );
};

export default HomeSection04SlideItem;
