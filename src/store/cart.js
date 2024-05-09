import { createSlice } from "@reduxjs/toolkit";
import { cartDB } from "@/assets/firebase";

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [],
  },
  reducers: {
    initCart(state, action) {
      state.carts = action.payload;
    },
  },
});

export const { initCart } = cartSlice.actions;

export const fetchCart = () => async (dispatch) => {
  try {
    cartDB.on("value", (snapshot) => {
      const userId = JSON.parse(localStorage.getItem("loging")).userId;
      const cartObj = snapshot.val();
      const cartArr = Object.entries(cartObj).map(([key, value]) => {
        return { key: key, ...value };
      });
      const filteredCartArr = cartArr.filter((item) => item.key === userId);
      dispatch(initCart(filteredCartArr));
      console.log(filteredCartArr);
    });
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};

export default cartSlice.reducer;
