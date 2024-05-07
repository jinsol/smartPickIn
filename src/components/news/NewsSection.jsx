import React from 'react';
import styled from 'styled-components';

const NewsSectionBlock = styled.div`
     .news__depth1 {
        .news__list {

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
                    }
                    .thumbnail__image {
                        width: 100%;
                        height: auto;
                        transition: all 0.5s ease;
                        filter: grayscale(1);

                        img {
                            width: 100%;
                            height: auto;
                        }
                    }
                }

                &:hover .thumbnail__image {
                    filter: grayscale(0);
                }

                .news__text {
                    text-align: left;
                    .news__text2 {
                        display: flex;
                        justify-content: space-between;
                    }
                }
            }
        }
    }
`

const NewsSection = () => {
    return (
        <NewsSectionBlock>
            <ul className='news__depth1'>
                <li className='news__list'>
                    <a href="#">
                    <div className="thumbnail">
                        <div className="thumbnail__text">
                    <span>SMART PICK IN</span>
                    <h2>여기에 데이터 제목이 들어갑니다.</h2>
                    <span>MAGAZINE</span>
                    </div>
                    <figure className='thumbnail__image'>
                    <img src="../../assets/image/news_thumbNail.png" alt="" />
                    </figure>
                    </div>
                    <div className="news__text">
                        <h2>여기에 데이터 제목이 들어갑니다.</h2>
                        <h3>subtitle 내용이 들어가는 곳입니다.</h3>
                        <div className="news__text2">
                            <p className='date'>date 00/00</p>
                            <div className="more">
                                <span>자세히보기</span>
                                <em>----</em>
                            </div>
                        </div>
                    </div>
                    </a>
                </li>
            </ul>
        </NewsSectionBlock>
    );
};

export default NewsSection;