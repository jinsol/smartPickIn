import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Breadcrumb from "@/components/layout/Breadcrumb";
import PageTitle from "@/components/layout/PageTitle";
import PageTab from "@/components/layout/PageTab";
import NewsSection from "@/components/news/NewsSection";
import CompanyNewsSection from "@/components/news/CompanyNewsSection";
import { initNewsMenu } from "@/store/news"; // 액션 생성자를 가져옵니다.

const NewsViewBlock = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 20vh 0;
`;

const NewsView = () => {
  const title = [
    <span key="line1">SEO 최적화 분석을 실시간으로,</span>,
    <span key="line2">
      <b>스마트픽인</b>
    </span>,
  ];
  const menu = ["소식", "기업소식"];
  const imgUrl = "/assets/image/news_bg_icn.png";
  const activeMenu = useSelector((state) => state.news.newsMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    dispatch(initNewsMenu(hash));
  }, [dispatch]);

  const handleMenuClick = (value) => {
    dispatch(initNewsMenu(value));
    window.location.hash = value;
  };
  return (
    <NewsViewBlock className="flexCenter">
      <div className="homeRow">
        <Breadcrumb depth1={"소식"} depth2={activeMenu} />
        <PageTitle title={title} imgUrl={imgUrl} />
        <PageTab
          menu={menu}
          activeMenu={activeMenu}
          onClick={handleMenuClick}
        />
        {activeMenu === "소식" && <NewsSection />}
        {activeMenu === "기업소식" && <CompanyNewsSection />}
      </div>
    </NewsViewBlock>
  );
};

export default NewsView;
