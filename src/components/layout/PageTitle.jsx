import React from "react";
import styled from "styled-components";

const PageTitleBlock = styled.h2`
  background-color: pink;
  color: red;
  span {
    display: block;
  }
`;

const PageTitle = ({ title }) => {
  return (
    <PageTitleBlock>
      {title.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
    </PageTitleBlock>
  );
};

export default PageTitle;
