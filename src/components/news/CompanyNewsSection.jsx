import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { IoIosArrowRoundForward  } from "react-icons/io";
import {Link} from 'react-router-dom'
import newscompanydata from '@/assets/data/newscompanydata'
import cn from 'classnames';
import SearchBar from "@/components/news/SearchBar"
import NewsPagination from './NewsPagination';




const CompanyNewsSectionBlock = styled.div`

   
     .news__depth1 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        transform: translateY(200px);
                        opacity: 0;
                        transition: all 0.8s ease;

                        &.on{
                        transform: translateY(0);
                        opacity: 1;
                        }
        .news__list {
            margin: 2% 2%;
            flex:0 0 28%;
            overflow: hidden;

            a {
                .thumbnail {
                    position: relative;
                    .thumbnail__text {
                        text-align: center;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        z-index: 99999;
                        h2{
                            font-size: 1.5em;
                            color: var(--white);
                        }
                      
                        span{
                            font-size: 0.5em;
                            letter-spacing: 1em;
                            color: var(--white);
                            font-weight: lighter;
                        }
                        
                    }
                    .thumbnail__image {
                        width: 100%;
                        height: auto;
                        transition: all 0.5s ease;
                        filter: brightness(0.5);
                        margin-bottom: 20px;
                        

                        img {
                            width: 100%;
                            height: auto;
                            border-radius: 30px;

                        }
                    }
                }

                &:hover .thumbnail__image {
                    filter: brightness(1);
                    
                }
               &:hover  .news__text {
                  
                    .news__text2 {
                      
                        .more{
                      
                            color: var(--yellow);
                            span{
                                color: var(--yellow);
                            }

                            em{
                                display: flex;
                                align-items: center;
                                font-size: 32px;
                                font-weight: bold;
                                padding: 2px;
                                border-radius: 50%;
                                border: 1px solid var(--yellow);
                               
                            }
                        }
                    }
                }

                .news__text {
                    text-align: left;

                    span{
                            font-size: 1.1em;
                            font-weight: 500;
                            color: var(--gray01);
                            margin: 20px 0;
                            overflow: hidden;
                            white-space: normal;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            word-break: keep-all;
                        }
                    .news__text2 {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        span{
                            margin: 0;
                            margin-right: 10px;
                        }
                        .more{
                            display: flex;
                            align-items: center;
                            color: var(--gray04);
                            transition: all 0.5s ease;

                            span{
                                color: var(--gray04);
                            }

                            em{
                                display: flex;
                                align-items: center;
                                font-size: 32px;
                                font-weight: bold;
                                padding: 2px;
                                border-radius: 50%;
                                border: 1px solid var(--gray04);

                               
                            }
                        }
                    }
                }
            }
        }
    }
`

const CompanyNewsSection = () => {
    const [pageNumber, setPageNumber] = useState(0); // 현재 페이지 번호 상태
    const postsPerPage = 9; // 한 페이지에 표시될 아이템 수
    const [searchTerm, setSearchTerm] = useState('')
  

    const pagesVisited = pageNumber * postsPerPage; // 현재 페이지에서 보여질 아이템 시작 인덱스
    const pageCount = Math.ceil(newscompanydata.length / postsPerPage); // 전체 페이지 수
    const displayNewsData = newscompanydata
    .filter((item) => {
        if (!searchTerm) return true; // 검색어가 없는 경우 모든 항목을 반환
        return item.maintext.toLowerCase().includes(searchTerm.toLowerCase()); 
      })
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((item, index) => (
        <li key={index} className='news__list'>
        <Link to={`/newsDetail/${item.id}`} state={{item:item, type:'기업소식'}} >
        <div className="thumbnail">
            <div className="thumbnail__text">
        <span>SMART PICK IN</span>
        <h2>{item.maintext}</h2>
        <span>MAGAZINE</span>
        </div>
        <figure className='thumbnail__image'>
        <img src="../../assets/image/newsCompany_thumNail.png" alt="" />
        </figure>
        </div>
        <div className="news__text">
            <h2>{item.maintext}</h2>
            <span>{item.subtext}</span>
            <div className="news__text2">
                <p className='date'>{item.date}</p>
                <div className="more">
                    <span>자세히보기</span>
                    <em><IoIosArrowRoundForward className='arrow' /></em>
                </div>
            </div>
        </div>
        </Link>
    </li>
    ));

const handlePageChange = ({ selected }) => {
    setPageNumber(selected); // 페이지 변경 시 페이지 번호 업데이트
};
const [listAni, setListAni] = useState(false)

const handleSearch = (value) => {
    // 검색 버튼 클릭 시에만 필터링
    setPageNumber(0); // 페이지 번호 초기화
    setSearchTerm(value)
};

useEffect(()=>{
    setListAni(true)
},[])


 
    return (
        <CompanyNewsSectionBlock>
             <SearchBar type="type2"
             value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            onSearch={handleSearch}
            />
            <ul className={cn('news__depth1', listAni && 'on')}>
                {displayNewsData}
            </ul>
            <NewsPagination pageCount={pageCount} onPageChange={handlePageChange} type='type2'/>
        </CompanyNewsSectionBlock>
    );
};

export default CompanyNewsSection;