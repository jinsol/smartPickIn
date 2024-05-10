import React, { useEffect } from "react";
import styled from "styled-components";
import ReceiptWrap from "@/components/mypage/ReceiptWrap";
import CartWrap from "@/components/mypage/CartWrap";
import Breadcrumb from "@/components/layout/Breadcrumb";

import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "@/store/cart";

const CartViewBlock = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 20vh 0;
  .ArticleWrap {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 40px;
    padding: 40px 0;
  }
`;

const CartView = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.cart.carts);
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  return (
    <CartViewBlock className="flexCenter">
      <div className="homeRow">
        <Breadcrumb depth1={"마이페이지"} depth2={"장바구니"} />
        <article className="ArticleWrap">
          <CartWrap list={list} />
          <ReceiptWrap list={list} />
        </article>
      </div>
    </CartViewBlock>
  );
};

export default CartView;
