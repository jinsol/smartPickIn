import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./test";
import serviceReducer from "./service";

const store = configureStore({
  reducer: {
    test: testReducer,
    service: serviceReducer,
  },
});

export default store;
