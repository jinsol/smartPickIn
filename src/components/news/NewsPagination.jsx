import React from 'react';
import ReactPaginate from 'react-paginate';
import styled, { css } from 'styled-components';


const PaginationWrapper = styled.div`
 ${({ type }) => {
    if (type === 'type1') {
      return css`
        .pagination {
            display: flex;
        justify-content: center;
        margin-top:50px;
        align-items: center;
      li {
    font-size: 1.2em;
    list-style-type: none; /* 페이지 번호의 기본 스타일 제거 */
    margin: 0 5px; /* 각 페이지 번호 사이의 간격 설정 */
    cursor: pointer; /* 커서 모양 변경 */
    border-radius: 5px; /* 페이지 번호에 둥근 모서리 추가 */
    transition: background-color 0.3s; /* 배경색 변경에 트랜지션 효과 적용 */
    a{
    padding: 5px 5px;
        
    }
}

li.active {
    
    background : var(--blue);
    color: var(--white); /* 활성화된 페이지 번호의 글자색 변경 */
    padding: 10px 12px;
    border-radius: 50%;
}
        }
      `;
    } else if (type === 'type2') {
      return css`
        .pagination {
            display: flex;
        justify-content: center;
        margin-top:50px;
        align-items: center;
      li {
    font-size: 1.2em;
    list-style-type: none; /* 페이지 번호의 기본 스타일 제거 */
    margin: 0 5px; /* 각 페이지 번호 사이의 간격 설정 */
    cursor: pointer; /* 커서 모양 변경 */
    border-radius: 5px; /* 페이지 번호에 둥근 모서리 추가 */
    transition: background-color 0.3s; /* 배경색 변경에 트랜지션 효과 적용 */
    a{
    padding: 5px 5px;
        
    }
}

li.active {
    
    background : var(--yellow);
    color: var(--white); /* 활성화된 페이지 번호의 글자색 변경 */
    padding: 10px 12px;
    border-radius: 50%;
}
        }
      `;
    }
  }}
  
`


const NewsPagination = ({ pageCount, onPageChange, type  }) => {
  return (
    <PaginationWrapper type={type}>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={type === '소식' ? 3 : 5}
        marginPagesDisplayed={type === '소식' ? 1 : 2}
        previousLabel={type === '소식' ? '이전' : '이전'}
        nextLabel={type === '소식' ? '다음' : '다음'}
        breakLabel={'...'}
        containerClassName={'pagination'}
        activeClassName={'active'}
        onPageChange={onPageChange}
      />
    </PaginationWrapper>
  );
};

export default NewsPagination;