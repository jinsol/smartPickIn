import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import { IoIosArrowRoundForward  } from "react-icons/io";
import {Link} from 'react-router-dom'
import newsdata from '@/assets/data/newsdata'
import cn from 'classnames';
import SearchBar from "@/components/news/SearchBar"
import NewsPagination from './NewsPagination';


const NewsSectionBlock = styled.div`

   
     .news__depth1 {
        width: 100%;
        /* display: flex;
        justify-content: space-around;
        flex-wrap: wrap; */
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap:50px;
        margin: 50px auto;
        transform: translateY(200px);
        opacity: 0;
        transition: all 0.8s ease;

        @media (max-width:1200px){
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width:768px){
            grid-template-columns: 1fr;
            gap:20px;

            
        }

                        &.on{
                        transform: translateY(0);
                        opacity: 1;
                        }
        .news__list {

            a {
                .thumbnail {
                    position: relative;
                    .thumbnail__text {
                        width: 100%;
                        text-align: center;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        z-index: 99999;
                        h2{
                            font-size: 1.3em;
                            color: var(--white);
                            white-space: pre-line;

                            @media (max-width:1200px){
                            font-size: 1.8em;
                            }

                            @media (max-width:900px){
                            font-size: 1.5em;
                            }
                            @media (max-width:768px){
                            font-size: 1.8em;
                            }
                           
                            @media (max-width:550px){
                                font-size: 1.6em;
                            }
                            /* word-break:keep-all; */
                        }
                      
                        span{
                            font-size: 0.5em;
                            letter-spacing: 1em;
                            color: var(--white);
                            font-weight: lighter;

                            @media (max-width:900px){
                            font-size: 0.3em;
                                
                            }
                        }
                        
                    }
                    .thumbnail__image {
                        width: 100%;
                        height: auto;
                        transition: all 0.5s ease;
                         filter: brightness(0.5);
                        margin-bottom: 15px;
                        

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
                      
                            color: var(--blue);
                            span{
                                color: var(--blue);
                            }

                            em{
                                display: flex;
                                align-items: center;
                                font-size: 32px;
                                font-weight: bold;
                                padding: 2px;
                                border-radius: 50%;
                                border: 1px solid var(--blue);
                               
                            }
                        }
                    }
                }

                .news__text {
                    text-align: left;
                    h2{
                            font-size: 1.2em;
                            @media (max-width:1300px){
                                font-size: 1.1em;
                            }
                            @media (max-width:1200px){
                                font-size: 1.2em;
                                
                            }
                            @media (max-width:768px){
                                font-size: 1.5em;
                            }
                           
                            @media (max-width:550px){
                                font-size: 1.3em;
                            }
                         
                        }
                      

                    span{
                            font-size: 1em;
                            font-weight: 300;
                            line-height: 1.3em;
                            color: var(--black);
                            margin: 20px 0;
                            overflow: hidden;
                            white-space: normal;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            word-break: keep-all;
                            
                            @media (max-width:1200px){
                            font-size: 1em;
                                
                            }
                            @media (max-width:900px){
                            font-size: 0.9em;
                            }
                            @media (max-width:768px){
                            font-size: 1em;
                            }
                            @media (max-width:550px){
                            font-size: 0.9em;
                            }
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

const NewsSection = () => {
    const [pageNumber, setPageNumber] = useState(0); // 현재 페이지 번호 상태
    const postsPerPage = 9; // 한 페이지에 표시될 아이템 수
    const [listAni, setListAni] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(()=>{
        setListAni(true)
    },[])


    const pagesVisited = pageNumber * postsPerPage; // 현재 페이지에서 보여질 아이템 시작 인덱스
    const pageCount = Math.ceil(newsdata.length / postsPerPage); // 전체 페이지 수
    const displayNewsData = newsdata
    .filter((item) => {
        if (!searchTerm) return true; // 검색어가 없는 경우 모든 항목을 반환
        return item.maintext.toLowerCase().includes(searchTerm.toLowerCase()); 
      })
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((item, index) => (
        <li key={index} className='news__list'>
        <Link to={`/newsDetail/${item.id}`} state={{item:item, type:'소식'}} >
        <div className="thumbnail">
            <div className="thumbnail__text">
        <span>SMART PICK IN</span>
        <h2>{item.maintext}</h2>
        <span>MAGAZINE</span>
        </div>
        <figure className='thumbnail__image'>
        <img src="../../assets/image/news_thumbNail.png" alt="" />
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
const handleSearch = (value) => {
      // 검색 버튼 클릭 시에만 필터링
      setPageNumber(0); // 페이지 번호 초기화
      setSearchTerm(value)
  };






 
    return (
        <NewsSectionBlock>
            <SearchBar
             value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            onSearch={handleSearch}
            />
            <ul className={cn('news__depth1', listAni && 'on')}>
                {displayNewsData}
            </ul>
           <NewsPagination pageCount={pageCount} onPageChange={handlePageChange} type="type1"/>
        </NewsSectionBlock>
    );
};

export default NewsSection;