import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
  name: "shoes",
  initialState: {
    newarrivals: [],
  },
  reducers: {
    addnewarrivals: (state, action) => {
      state.newarrivals = action.payload;
    },
  },
});

export const { addnewarrivals } = products.actions;
export default products.reducer;
