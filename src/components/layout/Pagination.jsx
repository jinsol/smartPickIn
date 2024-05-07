import React from "react";
import styled from "styled-components";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";

const PaginationContainer = styled.div`
  padding: 2em 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  color: var(--gray01);
  * {
    display: flex;
    align-items: center;
  }
  button {
    &:disabled {
      opacity: 0.1;
      cursor: default;
    }
  }
  .pageUl {
    gap: 20px;
    li {
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      place-content: center;
      &.active {
        background-color: var(--blue);
        color: var(--white);
        font-weight: 800;
        cursor: default;
      }
    }
  }
`;

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onNextPage,
  onPrevPage,
  onPageClick,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <PaginationContainer>
      <button onClick={onPrevPage} disabled={currentPage === 1}>
        <FaCaretLeft />
      </button>
      <ul className="pageUl">
        {Array.from({ length: totalPages }).map((_, index) => (
          <li
            key={index + 1}
            onClick={() => onPageClick(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </li>
        ))}
      </ul>
      <button
        onClick={onNextPage}
        disabled={currentPage * itemsPerPage >= totalItems}
      >
        <FaCaretRight />
      </button>
    </PaginationContainer>
  );
};

export default Pagination;
