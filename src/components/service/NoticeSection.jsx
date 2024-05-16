import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotice } from "@/store/board";
// import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";
import Pagination from "../layout/Pagination";

const SectionBlock = styled.section`
  ul {
    li {
      color: var(--gray01);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      &:nth-child(1) {
        flex-basis: 10%;
      }
      &:nth-child(2) {
        flex-basis: 80%;
      }
      &:nth-child(3) {
        flex-basis: 10%;
      }
    }
  }
  @media (max-width: 768px) {
    ul {
      li {
        &:nth-child(1) {
          display: none;
        }
        &:nth-child(2) {
          flex-basis: 75%;
        }
        &:nth-child(3) {
          flex-basis: 25%;
        }
      }
    }
  }
`;

const BoardHeader = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  font-weight: bold;
  background-color: var(--light-blue);
  padding: 1.5em 0;
  li {
    color: var(--black) !important;
  }
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const BoardContent = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    cursor: pointer;
    padding: 1.5em 0;
    border-bottom: 1px solid var(--gray06);
    &:nth-child(1) {
    }
    &:nth-child(2) {
      justify-content: flex-start;
      font-size: 1.4em;
      font-weight: 800;
      color: var(--black);
    }
    &:nth-child(3) {
    }
    &:hover {
      &:nth-child(2) {
        color: var(--blue);
      }
    }
  }
  @media (max-width: 768px) {
    li {
      padding: 1em 0;
      &:nth-child(2) {
        font-size: 1em;
      }
    }
  }
`;

const AccordionHeader = styled.div`
  button {
    width: 100%;
  }
`;
const AccordionCollapse = styled.div`
  background-color: var(--light-blue);
  line-height: 180%;
  overflow: hidden;
  height: 0;
  padding: 0;
  opacity: 0;
  transition: all 0.3s ease-in;
  .accordion-content {
    font-size: 1.2em;
    p {
      padding: 1em 0;
      word-break: keep-all;
      &.title {
        font-weight: 800;
      }
    }
  }
  &.active {
    padding: 2em;
    opacity: 1;
    height: auto;
    .accordion-body {
      .accordion-content {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  @media (max-width: 768px) {
    .accordion-content {
      font-size: 1em;
    }
  }
`;

const NoticeSection = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.board.notice);
  const totalItems = list.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // 한 페이지에 보여줄 아이템 수

  useEffect(() => {
    dispatch(fetchNotice());
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
  const onNextPage = () => setCurrentPage(currentPage + 1);
  const onPrevPage = () => setCurrentPage(currentPage - 1);
  const onPageClick = (e) => setCurrentPage(e);

  const onClickAccordion = (e) => {
    e.currentTarget.classList.toggle("active");
    e.currentTarget.parentElement.nextElementSibling.classList.toggle("active");
  };

  return (
    <>
      <SectionBlock className="borderTopLine">
        <BoardHeader className="BoardHeader">
          <li>번호</li>
          <li>제목</li>
          <li>작성일</li>
        </BoardHeader>

        {currentItems.map((item, index) => (
          <div key={index} className="accordion-item">
            <AccordionHeader className="accordion-header">
              <button type="button" onClick={onClickAccordion}>
                <BoardContent>
                  <li>{totalItems - (indexOfFirstItem + index)}</li>
                  <li className="HeaderTitle">{item.subject}</li>
                  <li>{item.date.split("T")[0]}</li>
                </BoardContent>
              </button>
            </AccordionHeader>
            <AccordionCollapse>
              <div className="accordion-body">
                <div
                  className="accordion-content"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            </AccordionCollapse>
          </div>
        ))}
      </SectionBlock>
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        onPageClick={onPageClick}
      />
    </>
  );
};

export default NoticeSection;
