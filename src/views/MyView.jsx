import React,{useState} from 'react';
import MySection from '@/components/my/MySection'
import Breadcrumb from "@/components/layout/Breadcrumb";
import PageTitle from "@/components/layout/PageTitle";
import styled from 'styled-components';
import {useSelector} from 'react-redux';




const MyViewBlock = styled.section`
width: 100%;
  min-height: 100vh;
  padding: 20vh;
  @media (max-width:1200px){
  padding: 20vh 3vh;

  }
  span:first-child{
    display: flex;
  }
`


const MyView = () => {
  const user = useSelector(state=>state.members.user)
  const userName = user ? user.userName : '';


    const title = [
        <span key="line1">안녕하세요</span>,
        <span key="line2">
          <b>{userName}님</b>
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