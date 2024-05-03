import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BreadcrumbWrap = styled.div`
  ol {
    display: flex;
    gap: 20px;
    li {
    }
  }
`;
const Breadcrumb = ({ depth1, depth2 }) => {
  return (
    <BreadcrumbWrap className="breadcrumb-wrap">
      <ol className="breadcrumb">
        <li className="home">
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="">{depth1}</Link>
        </li>
        <li>
          <a>{depth2}</a>
        </li>
      </ol>
    </BreadcrumbWrap>
  );
};

export default Breadcrumb;
