import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    serviceMenu: "공지사항",
  },
  reducers: {
    initServiceMenu(state, action) {
      state.serviceMenu = action.payload;
    },
  },
});

export const { initServiceMenu } = serviceSlice.actions;
export default serviceSlice.reducer;
