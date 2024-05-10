import React, { useState } from "react";
import styled from "styled-components";
import Breadcrumb from "@/components/layout/Breadcrumb";
import PageTitle from "@/components/layout/PageTitle";
// ======================= 탭 메뉴 =======================
import ProductAside from "@/components/product/ProductAside";
import ProductList from "@/components/product/ProductList";
// ======================= 탭 메뉴 =======================

const ServiceViewBlock = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 20vh 0;
  position: relative;
  .homeRow {
    position: relative;
  }
`;

const ServiceView = () => {
  const title = [
    <span key="line1">내 비즈니스 유형에</span>,
    <span key="line2">
      <b>적합한 서비스</b>를 찾아보세요.
    </span>,
  ];
  const imgUrl = "/assets/image/cs_service_icn.png";
  const [category, setCategory] = useState("전체");
  const changeCategory = (value) => setCategory(value);

  return (
    <>
      <ServiceViewBlock className="flexCenter">
        <div className="homeRow">
          <Breadcrumb depth1={"서비스주문"} />
          <PageTitle title={title} imgUrl={imgUrl} />
          <ProductAside changeCategory={changeCategory} category={category} />
          <ProductList category={category} />
        </div>
      </ServiceViewBlock>
    </>
  );
};

export default ServiceView;
