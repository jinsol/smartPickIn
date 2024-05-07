import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./test";
import serviceReducer from "./service";
import memberReducer from './member'
import newsReducer from './news'

const store = configureStore({
  reducer: {
    test: testReducer,
    service: serviceReducer,
    members : memberReducer,
    news:newsReducer,
  },
});

export default store;
