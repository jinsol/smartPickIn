import React, { useState } from "react";
import styled from "styled-components";
import ImageWrap from "../product/ImageWrap";
import TitleWrap from "../product/TitleWrap";
import PriceWrap from "../product/PriceWrap";
import CartQtyWrap from "../product/CartQtyWrap";
import BtnWrap from "../product/BtnWrap";
import { cartDB } from "@/assets/firebase";

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
  }
`;

const CartList = ({ item }) => {
  const { thumbnail, title, price, qty, id } = item;
  const TotalPrice = price * qty;
  const [quantity, setQuantity] = useState(qty); // 수량 상태 추가

  const decreaseQuantity = () => {
    if (!(quantity <= 1)) {
      setQuantity(quantity - 1);
      updateQtyInDB(quantity - 1); // DB에서 수량 감소
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    updateQtyInDB(quantity + 1); // DB에서 수량 증가
  };
  const userId = JSON.parse(localStorage.getItem("loging")).userId;
  const updateQtyInDB = (newQty) => {
    cartDB
      .child(userId)
      .once("value")
      .then((snapshot) => {
        const cartData = snapshot.val();
        if (cartData && cartData[id]) {
          // 이미 해당 상품이 장바구니에 있는 경우, 수량을 업데이트
          const existingProduct = cartData[id];
          const updatedQty = existingProduct.qty + (newQty - qty); // 새로운 수량에서 기존 수량을 뺀 값을 사용
          // 장바구니에 있는 상품의 수량만 업데이트
          return cartDB.child(userId).child(id).update({ qty: updatedQty });
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
          {price}
          <PriceWrap price={price}></PriceWrap>
          <CartQtyWrap
            qty={quantity}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          ></CartQtyWrap>
        </p>
      </div>
      <div>
        Total
        <PriceWrap price={TotalPrice} />
        <button type="button" onClick={onClickDelete}>
          삭제하기
        </button>
      </div>
    </CartListBlock>
  );
};

export default CartList;
