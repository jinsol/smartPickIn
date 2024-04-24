import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    test: null,
  },
});

export default testSlice.reducer;
