import React from "react";
import styled from "styled-components";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetailViewBlock = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 20vh 0;
`;

const ProductDetailView = () => {
  const { id } = useParams();
  const list = useSelector((state) => state.product.products);
  const product = list.find((item) => item.id.toString() === id);
  return (
    <ProductDetailViewBlock className="flexCenter">
      <div className="homeRow">
        <Breadcrumb depth1={"서비스주문"} depth2={product.title} />
        {product ? (
          <div>
            <h3>{product.name}</h3>
            <h3>{product.tag}</h3>

            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </ProductDetailViewBlock>
  );
};

export default ProductDetailView;
