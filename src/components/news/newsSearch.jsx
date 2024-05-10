import React from 'react';
import styled from 'styled-components';
import { CiSearch } from "react-icons/ci";

const SearchBarWrapper = styled.div`
    margin: 0px 60px;
    display: flex;
    justify-content: right;
    align-items: center;
`;

const SearchInput = styled.input`
    /* 입력 필드의 스타일 */
    width: 340px;
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
    font-size: 2.5em;
    color: var(--blue);
    padding: 5px 10px;
    transition: all 0.3s ease;
    border-radius: 50%;


    

    &:hover{
        background: var(--blue);
        border-radius: 50%;
        padding: 5px 10px;
        color: var(--white)
    }
`;


const newsSearch = ({ value, onChange, onSearch }) => {

    return (
        <SearchBarWrapper>
            <SearchInput
                type="text"
                placeholder="검색어를 입력하세요"
                value={value}
                onChange={onChange}
            />
            <SearchButton onClick={onSearch}> <CiSearch /></SearchButton>
        </SearchBarWrapper>
    );
};

export default newsSearch;