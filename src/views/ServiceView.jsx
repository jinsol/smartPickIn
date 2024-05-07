import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Breadcrumb from "@/components/layout/Breadcrumb";
import PageTitle from "@/components/layout/PageTitle";
import PageTab from "@/components/layout/PageTab";
import { initServiceMenu } from "@/store/service";
// import PageSearch from "@/components/layout/PageSearch";
// ======================= 탭 메뉴 =======================
import NoticeSection from "@/components/service/NoticeSection";
import QnASection from "@/components/service/QnASection";
import RefundSection from "@/components/service/RefundSection";
// ======================= 탭 메뉴 =======================

const ServiceViewBlock = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 20vh 0;
`;

const ServiceView = () => {
  const title = [
    <span key="line1">스마트픽인에 대해</span>,
    <span key="line2">
      <b>궁금한 모든 것</b>을 확인해보세요.
    </span>,
  ];
  const menu = ["공지사항", "자주묻는질문", "취소·환불규정"];
  const imgUrl = "/assets/image/cs_bg_icn.png";
  const activeMenu = useSelector((state) => state.service.serviceMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    dispatch(initServiceMenu(hash));
  }, [dispatch]);

  const handleMenuClick = (value) => {
    dispatch(initServiceMenu(value));
    window.location.hash = value;
    window.scrollTo(0, 0);
  };
  return (
    <ServiceViewBlock className="flexCenter">
      <div className="homeRow">
        <Breadcrumb depth1={"고객센터"} depth2={activeMenu} />
        <PageTitle title={title} imgUrl={imgUrl} />
        <PageTab
          menu={menu}
          activeMenu={activeMenu}
          onClick={handleMenuClick}
        />
        {/* <PageSearch /> */}
        {activeMenu === "공지사항" && <NoticeSection />}
        {activeMenu === "자주묻는질문" && <QnASection />}
        {activeMenu === "취소·환불규정" && <RefundSection />}
      </div>
    </ServiceViewBlock>
  );
};

export default ServiceView;
