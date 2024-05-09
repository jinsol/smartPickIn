import { createSlice } from "@reduxjs/toolkit";
import { noticeDB } from "@/assets/firebase";

const boardSlice = createSlice({
  name: "boards",
  initialState: {
    notice: [],
  },
  reducers: {
    initNotice(state, action) {
      state.notice = action.payload;
      state.notice.reverse();
    },
  },
});

export const { initNotice } = boardSlice.actions;

export const fetchNotice = () => async (dispatch) => {
  try {
    noticeDB.on("value", (snapshot) => {
      const noticeObj = snapshot.val();
      const noticeArr = Object.entries(noticeObj).map(([key, value]) => {
        return { key: key, ...value };
      });
      dispatch(initNotice(noticeArr));
    });
  } catch (error) {
    console.error("Error fetching notice:", error);
  }
};

export default boardSlice.reducer;
