import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./test";
import serviceReducer from "./service";
import boardReducer from "./board";
import productReducer from "./product";

const store = configureStore({
  reducer: {
    test: testReducer,
    service: serviceReducer,
    board: boardReducer,
    product: productReducer,
  },
});

export default store;
