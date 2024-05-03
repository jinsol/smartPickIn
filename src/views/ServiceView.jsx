import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Breadcrumb from "@/components/layout/Breadcrumb";
import PageTitle from "@/components/layout/PageTitle";
import PageTab from "@/components/layout/PageTab";
import NoticeSection from "@/components/service/NoticeSection";
import QnASection from "@/components/service/QnASection";
import RefundSection from "@/components/service/RefundSection";
import { initServiceMenu } from "@/store/service"; // 액션 생성자를 가져옵니다.

const ServiceViewBlock = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  place-items: center;
  padding: 20vh 0;
`;

const ServiceView = () => {
  const title = ["스마트픽인에 대해", "궁금한 모든 것을 확인해보세요."];
  const menu = ["공지사항", "자주묻는질문", "취소·환불규정"];
  const activeMenu = useSelector((state) => state.service.serviceMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    dispatch(initServiceMenu(hash));
  }, [dispatch]);

  const handleMenuClick = (value) => {
    dispatch(initServiceMenu(value));
    window.location.hash = value;
  };
  return (
    <ServiceViewBlock>
      <div className="homeRow">
        <Breadcrumb depth1={"고객센터"} depth2={activeMenu} />
        <PageTitle title={title} />
        <PageTab
          menu={menu}
          activeMenu={activeMenu}
          onClick={handleMenuClick}
        />
        {activeMenu === "공지사항" && <NoticeSection />}
        {activeMenu === "자주묻는질문" && <QnASection />}
        {activeMenu === "취소·환불규정" && <RefundSection />}
      </div>
    </ServiceViewBlock>
  );
};

export default ServiceView;
