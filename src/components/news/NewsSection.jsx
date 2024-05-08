import React, {useState} from 'react';
import styled from 'styled-components';
import { IoIosArrowRoundForward  } from "react-icons/io";
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom'
import newsdata from '@/assets/data/newsdata'

const NewsSectionBlock = styled.div`

    .pagination{
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
    background-color: var(--blue); /* 활성화된 페이지 번호의 배경색 변경 */
    color: var(--white); /* 활성화된 페이지 번호의 글자색 변경 */
    padding: 10px 12px;
    border-radius: 50%;
}
    }
     .news__depth1 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
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
                        filter: grayscale(2);
                        margin-bottom: 20px;
                        

                        img {
                            width: 100%;
                            height: auto;
                            border-radius: 30px;

                        }
                    }
                }

                &:hover .thumbnail__image {
                    filter: grayscale(0);
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

const NewsSection = () => {
    const [pageNumber, setPageNumber] = useState(0); // 현재 페이지 번호 상태
    const postsPerPage = 9; // 한 페이지에 표시될 아이템 수
  

    const pagesVisited = pageNumber * postsPerPage; // 현재 페이지에서 보여질 아이템 시작 인덱스
    const pageCount = Math.ceil(newsdata.length / postsPerPage); // 전체 페이지 수
    const displayNewsData = newsdata
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((item, index) => (
        <li key={index} className='news__list'>
        <Link to={`/newsDetail/${item.id}`} state={{item:item}} >
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


 
    return (
        <NewsSectionBlock>
            <ul className='news__depth1'>
                {displayNewsData}
            </ul>
            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                previousLabel={pageNumber === 0 ? null : '이전'}
                nextLabel={pageNumber === 1 ? null : '다음'}
                breakLabel={'...'}
                containerClassName={'pagination'}
                activeClassName={'active'}
                onPageChange={handlePageChange}
            />
        </NewsSectionBlock>
    );
};

export default NewsSection;