import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdHome, MdChevronRight } from "react-icons/md";

const BreadcrumbWrap = styled.div`
  ol {
    display: flex;
    align-items: center;
    font-size: 1.2em;
    font-weight: 700;
    color: var(--black);
    li {
      display: flex;
      align-items: center;
      &.rightArrow {
        padding: 0 10px;
      }
      &.active {
        color: var(--blue);
      }
      a {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
  }
`;
const Breadcrumb = ({ depth1, depth2 }) => {
  return (
    <BreadcrumbWrap className="breadcrumb-wrap">
      <ol className="breadcrumb">
        <li className="home">
          <Link to="/">
            <MdHome />
            <span>홈</span>
          </Link>
        </li>
        <li className="rightArrow">
          <MdChevronRight />
        </li>
        {!depth2 ? (
          <li className="active">
            <a>{depth1}</a>
          </li>
        ) : (
          <>
            <li>
              {depth1 == "서비스주문" ? (
                <Link to="/product">{depth1}</Link>
              ) : (
                <a>{depth1}</a>
              )}
            </li>
            <li className="rightArrow">
              <MdChevronRight />
            </li>
            <li className="depth2 active">
              <a>{depth2}</a>
            </li>
          </>
        )}
      </ol>
    </BreadcrumbWrap>
  );
};

export default Breadcrumb;
