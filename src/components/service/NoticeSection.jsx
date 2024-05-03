import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotice } from "@/store/board";

const BoardHeader = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  font-weight: bold;
  background-color: var(--light-blue);
  padding: 0.5em 0;
  li {
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
`;

const BoardContent = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
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
`;

const NoticeSection = () => {
  const dispatch = useDispatch();
  const noticeList = useSelector((state) => state.board.notice);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1); // 한 페이지에 보여줄 아이템 수

  useEffect(() => {
    dispatch(fetchNotice());
  }, [dispatch]);

  // 현재 페이지의 아이템 범위 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = noticeList.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 함수
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <h2>테스트입니다</h2>
      <BoardHeader className="BoardHeader">
        <li>번호</li>
        <li>제목</li>
        <li>작성일</li>
      </BoardHeader>

      {currentItems.map((item, index) => (
        <BoardContent key={index}>
          <li>{index}</li>
          <li>{item.content}</li>
          <li>{item.date}</li>
        </BoardContent>
      ))}

      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        이전
      </button>
      <ul>{}</ul>
      <button
        onClick={handleNextPage}
        disabled={indexOfLastItem >= noticeList.length}
      >
        다음
      </button>
    </div>
  );
};

export default NoticeSection;
