import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./service";
import boardReducer from "./board";
import productReducer from "./product";

const store = configureStore({
  reducer: {
    service: serviceReducer,
    board: boardReducer,
    product: productReducer,
  },
});

export default store;
