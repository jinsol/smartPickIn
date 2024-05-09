import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsMenu: "소식",
  },
  reducers: {
    initNewsMenu(state, action) {
      state.newsMenu = action.payload;
    },
  },
});

export const { initNewsMenu } = newsSlice.actions;
export default newsSlice.reducer;
