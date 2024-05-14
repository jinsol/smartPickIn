import React from 'react';
import MySection from '@/components/my/MySection'
import Breadcrumb from "@/components/layout/Breadcrumb";
import PageTitle from "@/components/layout/PageTitle";
import styled from 'styled-components';



const MyViewBlock = styled.section`
width: 100%;
  min-height: 100vh;
  padding: 20vh;
  @media (max-width:1200px){
  padding: 20vh 3vh;

  }
`


const MyView = () => {
    const title = [
        <span key="line1">마이페이지</span>,
        <span key="line2">
          <b>MyPage</b>
        </span>,
      ];
  const imgUrl = "/assets/image/cs_bg_icn_mypage.png";

    return (
        <MyViewBlock>
        <Breadcrumb depth1={"마이페이지"}  />
    <PageTitle title={title} imgUrl={imgUrl}/>
        <MySection/>  
        </MyViewBlock>
    );
};

export default MyView;