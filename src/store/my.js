import { createSlice } from "@reduxjs/toolkit";

const mySlice = createSlice({
  name: "my",
  initialState: {
    myMenu: "정보수정",
  },
  reducers: {
    initMyMenu(state, action) {
      state.myMenu = action.payload;
    },
  },
});

export const { initMyMenu } = mySlice.actions;
export default mySlice.reducer;
