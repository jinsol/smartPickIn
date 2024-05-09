import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "@/store/cart";

const CartView = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.cart.carts);
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  console.log("리스트", list[0]);

  return (
    <section>
      <h2>장바구니 페이지</h2>
      <div>
        {!list.length ? (
          <div>장바구니에 담긴 상품이 없습니다.</div>
        ) : (
          <>
            <h1>장바구니</h1>
            {/* list 를 배열 돌려서 id 값을 받기 */}
            {list.map((item) => (
              <div key={item.id}>
                상품 ID: {item.id}, 수량: {item.qty}
              </div>
            ))}
          </>
        )}
      </div>
      <div>
        <h3>영수증</h3>
        <p>리스트{list[0].key}</p>
      </div>
    </section>
  );
};

export default CartView;
