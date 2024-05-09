import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./service";
import boardReducer from "./board";
import productReducer from "./product";
import memberReducer from "./member";
import newsReducer from "./news";

const store = configureStore({
  reducer: {
    service: serviceReducer,
    board: boardReducer,
    product: productReducer,
    members: memberReducer,
    news: newsReducer,
  },
});

export default store;
