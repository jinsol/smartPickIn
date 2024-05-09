import React, { useState,useRef } from 'react';
import styled, {css} from 'styled-components';
import { CiSearch } from "react-icons/ci";

const SearchBarWrapper = styled.div`
form{
    margin: 0px 60px;
    display: flex;
    justify-content: right;
    align-items: center;
    }
`;

const SearchInput = styled.input`
    /* 입력 필드의 스타일 */
    width: 300px;
    padding: 20px 50px;
    margin-right: 8px;
    border-radius: 50px;
    outline: none;
    background: rgba(255,255,255,0.5);
    border: 1px solid var(--gray05);
    transition: all 0.3s ease;
    font-size: 1.1em;
    &:hover{
        border: 1px solid var(--blue)
    }
    &:focus{
        border: 1px solid var(--blue)
        
    }
`;

const SearchButton = styled.button`
    /* 검색 버튼의 스타일 */
  
        /* 예: type1 스타일 */
        font-size: 2.5em;
    color: var(--gray02);
    padding: 5px 10px;
    transition: all 0.3s ease;
    border-radius: 50%;

    &:hover{
        background: var(--blue);
        border-radius: 50%;
        padding: 5px 10px;
        color: var(--white)
    }

        /* 타입에 따라 다른 스타일을 적용할 부분 */
        /* 예: type2 스타일 */
`;

   

const SearchBar = ({ onSearch,type}) => {
    const [searchInput, setSearchInput] = useState("")
    const searchRef = useRef("")
    const handleButtonClick = () => {
        onSearch(searchInput); // 검색 버튼 클릭 시에만 필터링 함수 호출
        setSearchInput("")
    };
    const onChange = (e) =>{
    setSearchInput(e.target.value)
    }

    return (
        <SearchBarWrapper>
            <form onSubmit={handleButtonClick} >
            <SearchInput
                ref={searchRef}
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchInput}
                onChange={onChange} // 입력 필드 값이 변경될 때 상태 업데이트
            />
            <SearchButton type='submit'> <CiSearch /></SearchButton>
            </form>

        </SearchBarWrapper>
    );
};

export default SearchBar;