import React, { useEffect } from "react";
import styled from "styled-components";
import Btn from "@/components/layout/Btn";
import ReceiptWrap from "@/components/mypage/ReceiptWrap";
import CartWrap from "@/components/mypage/CartWrap";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { useNavigate } from "react-router-dom";
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
  .noCart {
    display: grid;
    margin-top: 30px;
    background-color: var(--light-blue);
    place-content: center;
    place-items: center;

    color: var(--black);
    padding: 20vh 0;
    text-align: center;
    word-break: keep-all;
    h3 {
      font-size: 1.6em;
      padding: 30px 0;
    }
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
        {Object.values(list).length ? (
          <>
            <article className="ArticleWrap">
              <CartWrap list={list} />
              <ReceiptWrap list={list} />
            </article>
          </>
        ) : (
          <div className="noCart">
            <h3>장바구니에 상품이 존재하지 않습니다. 쇼핑을 계속해보세요!</h3>
            <Btn text={"상품 둘러보기"} link={"/product"} />
          </div>
        )}
      </div>
    </CartViewBlock>
  );
};

export default CartView;
