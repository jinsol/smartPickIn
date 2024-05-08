import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Breadcrumb from "@/components/layout/Breadcrumb";
import PageTitle from "@/components/layout/PageTitle";
import CompanyNewsDetailSection from "@/components/news/CompanyNewsDetailSection"

const NewsCompanyDetailViewBlock = styled.section`

`

const NewsCompanyDetailView = () => {
    const location = useLocation() 
    const title = [
        <span key="line1">SEO 최적화 분석을 실시간으로,</span>,
        <span key="line2">
          <b>스마트픽인</b>
        </span>,
      ];
      // const menu = ["소식", "기업소식"];
      const imgUrl = "/assets/image/cs_bg_icn.png";
      const activeMenu = useSelector((state) => state.news.newsMenu);
      const dispatch = useDispatch();
    
      useEffect(() => {
        const hash = decodeURIComponent(window.location.hash.slice(1));
        dispatch(initNewsMenu(hash));
      }, [dispatch]);
    
      // const handleMenuClick = (value) => {
      //   dispatch(initNewsMenu(value));
      //   window.location.hash = value;
      // };
      return (
        <NewsCompanyDetailViewBlock>
            <div className="flexCenter">
          <div className="homeRow" >
            <Breadcrumb depth1={"소식"} depth2={activeMenu} />
            <PageTitle title={title} imgUrl={imgUrl} />
       
          </div>
          </div>
          <CompanyNewsDetailSection item={item} className='newsDetail'/>
        </NewsCompanyDetailViewBlock>
      );
    };
    
export default NewsCompanyDetailView;