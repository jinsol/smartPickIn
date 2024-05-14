import { createSlice } from "@reduxjs/toolkit";

const mySlice = createSlice({
  name: "my",
  initialState: {
    serviceMenu: "정보수정",
  },
  reducers: {
    initMyMenu(state, action) {
      state.serviceMenu = action.payload;
    },
  },
});

export const { initMyMenu } = mySlice.actions;
export default mySlice.reducer;
