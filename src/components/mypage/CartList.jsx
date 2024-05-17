import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageWrap from "../product/ImageWrap";
import TitleWrap from "../product/TitleWrap";
import PriceWrap from "../product/PriceWrap";
import CartQtyWrap from "../product/CartQtyWrap";
import BtnWrap from "../product/BtnWrap";
import { cartDB } from "@/assets/firebase";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const CartListBlock = styled.div`
  padding: 20px 0;
  display: flex;
  gap: 20px;
  > div {
    &:nth-child(1) {
      flex-basis: 20%;
    }
    &:nth-child(2) {
      flex-basis: 60%;
    }
    &:nth-child(3) {
      flex-basis: 20%;
    }
    @media (max-width: 1100px) {
      &:nth-child(1) {
        flex-basis: 30%;
      }
      &:nth-child(2) {
        flex-basis: 50%;
      }
      &:nth-child(3) {
        flex-basis: 20%;
      }
    }
  }
  .BtnDelete {
    margin: 10px 0;
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: var(--gray06);
    color: var(--gray02);
    border-radius: 10px;
    font-weight: 800;
    font-size: 1em;
    padding: 10px 20px;
    border: 1px solid var(--gray02);
    transition: all 0.3s;
    &.mobile {
      background-color: unset;
      margin: unset;
      padding: unset;
      border: unset;
      &:hover {
        color: red;
        border: unset;
        background-color: unset;
      }
    }
    &:hover {
      background-color: #fff3f3;
      color: red;
      border: 1px solid red;
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    > div {
      &:nth-child(1) {
        flex-basis: 30%;
      }
      &:nth-child(2) {
        flex-basis: auto;
      }
      &:nth-child(3) {
        flex-basis: auto;
        margin-left: auto;
      }
    }
    .TotalWrap {
      > *:not(:last-child) {
        display: none;
      }
    }
  }
`;

const CartList = ({ item }) => {
  const { thumbnail, title, price, qty, id } = item;

  const [width, setWidth] = useState(window.innerWidth);

  const TotalPrice = price * qty;
  const [quantity, setQuantity] = useState(qty);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const decreaseQuantity = () => {
    if (!(quantity <= 1)) {
      setQuantity(quantity - 1);
      updateQtyInDB(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    updateQtyInDB(quantity + 1);
  };

  const userId = JSON.parse(localStorage.getItem("loging")).userId;
  const updateQtyInDB = (newQty) => {
    cartDB
      .child(userId)
      .once("value")
      .then((snapshot) => {
        const cartData = snapshot.val();
        if (cartData && cartData[id]) {
          const existingProduct = cartData[id];
          const updatedQty = existingProduct.qty + (newQty - qty);
          return cartDB
            .child(userId)
            .child(id)
            .update({ qty: updatedQty });
        } else {
          // 해당 상품이 장바구니에 없는 경우, 에러 처리 또는 예외처리
          throw new Error("Product does not exist in cart");
        }
      })
      .then(() => {
        console.log("Product quantity updated successfully");
      })
      .catch((error) => {
        console.error("Error updating product quantity in cart: ", error);
      });
  };

  const onClickDelete = () => {
    cartDB
      .child(userId)
      .child(id)
      .remove() // 해당 상품 삭제
      .then(() => {
        console.log("Product deleted successfully from cart");
      })
      .catch((error) => {
        console.error("Error deleting product from cart: ", error);
      });
  };

  return (
    <CartListBlock className="CartList">
      <ImageWrap thumbnail={thumbnail} />

      <div>
        <p>
          <TitleWrap title={title} />
          <PriceWrap price={price}></PriceWrap>
          <CartQtyWrap
            qty={quantity}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          ></CartQtyWrap>
        </p>
      </div>
      <div className="TotalWrap">
        <span>Total</span>
        <PriceWrap price={TotalPrice} />
        <button
          type="button"
          className={width <= 768 ? "mobile BtnDelete" : "BtnDelete"}
          onClick={onClickDelete}
        >
          {width > 768 ? (
            <>
              <FaRegTrashAlt />
              삭제하기
            </>
          ) : (
            <MdClose />
          )}
        </button>
      </div>
    </CartListBlock>
  );
};

export default CartList;
