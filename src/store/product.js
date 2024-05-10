import { createSlice } from "@reduxjs/toolkit";
import { productDB } from "@/assets/firebase";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    initProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { initProducts, cartProducts } = productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    productDB.on("value", (snapshot) => {
      const productObj = snapshot.val();
      const productArr = Object.entries(productObj).map(([key, value]) => {
        return { key: key, ...value };
      });
      dispatch(initProducts(productArr));
    });
  } catch (error) {
    console.log(error);
  }
};

export default productSlice.reducer;
