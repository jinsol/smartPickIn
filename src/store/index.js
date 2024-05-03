import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./test";
import serviceReducer from "./service";
import boardReducer from "./board";

const store = configureStore({
  reducer: {
    test: testReducer,
    service: serviceReducer,
    board: boardReducer,
  },
});

export default store;
