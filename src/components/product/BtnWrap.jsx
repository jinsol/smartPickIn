import React, { useState } from "react";
import styled from "styled-components";
import CartQtyWrap from "./CartQtyWrap";
import { useNavigate } from "react-router";
import { cartDB } from "@/assets/firebase";
import ProductModal from "./ProductModal";

const BtnWrapBlock = styled.div`
  display: flex;
  gap: 10px;
  button {
    font-size: 1em;
    padding: 10px 20px;
    font-weight: 800;
    transition: all 0.3s;
    &.GoCart {
    }
    &.BuyNow {
      background-color: var(--blue);
      color: var(--white);
      border: 1px solid var(--blue);
      &:hover {
        background-color: var(--blue-hover);
      }
    }
  }

  .ContentWrapBtn_Cart {
    display: flex;
    border: 1px solid var(--gray02);
    background-color: var(--gray06);
    color: var(--gray01);
    .ContentWrapBtn_Cart_Qty {
      border-right: 1px solid var(--gray02);
    }
  }
`;

const BtnWrap = ({ product }) => {
  const { id, price, thumbnail, title } = product;
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [message, setMessage] = useState(""); // 메시지 상태 추가

  const decreaseQuantity = () => {
    if (!(qty <= 1)) {
      setQty(qty - 1);
    }
  };
  const increaseQuantity = () => {
    setQty(qty + 1);
  };

  const onClickGoCart = () => {
    const userId = JSON.parse(localStorage.loging).userId;
    const product = {
      id,
      qty,
      price,
      thumbnail,
      title,
    };
    cartDB
      .child(userId)
      .once("value")
      .then((snapshot) => {
        const cartData = snapshot.val();
        if (cartData && cartData[id]) {
          // 이미 해당 상품이 장바구니에 있는 경우, 수량을 업데이트
          const existingProduct = cartData[id];
          const updatedQty = existingProduct.qty + qty;
          // 장바구니에 있는 상품의 수량만 업데이트
          return cartDB.child(userId).child(id).update({ qty: updatedQty });
        } else {
          // 해당 상품이 장바구니에 없는 경우, 새로 추가
          return cartDB.child(userId).child(id).set(product);
        }
      })
      .then(() => {
        console.log("Product added to cart successfully");
      })
      .catch((error) => {
        console.error("Error adding product to cart: ", error);
      });
    document.querySelector(".Modal").classList.add("active");
    setMessage("장바구니에 상품을 추가했습니다.");
  };

  const onClickBuyNow = () => {
    const userId = JSON.parse(localStorage.loging).userId;
    const product = {
      id,
      qty,
      price,
      thumbnail,
      title,
    };
    cartDB
      .child(userId)
      .once("value")
      .then((snapshot) => {
        const cartData = snapshot.val();
        if (cartData && cartData[id]) {
          // 이미 해당 상품이 장바구니에 있는 경우, 수량을 업데이트
          const existingProduct = cartData[id];
          const updatedQty = existingProduct.qty + qty;
          // 장바구니에 있는 상품의 수량만 업데이트
          return cartDB.child(userId).child(id).update({ qty: updatedQty });
        } else {
          // 해당 상품이 장바구니에 없는 경우, 새로 추가
          return cartDB.child(userId).child(id).set(product);
        }
      })
      .then(() => {
        console.log("Product added to cart successfully");
      })
      .catch((error) => {
        console.error("Error adding product to cart: ", error);
      });
    setMessage("바로 구매하기를 선택하셨습니다. 장바구니로 이동합니다.");
    navigate("/cart");
  };

  return (
    <BtnWrapBlock>
      <div className="ContentWrapBtn_Cart">
        <div className="ContentWrapBtn_Cart_Qty">
          <CartQtyWrap
            qty={qty}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          />
        </div>
        <button className="GoCart" onClick={onClickGoCart}>
          장바구니
        </button>
      </div>
      <button className="BuyNow" onClick={onClickBuyNow}>
        바로 구매하기
      </button>
      <ProductModal message={message} />
    </BtnWrapBlock>
  );
};

export default BtnWrap;
