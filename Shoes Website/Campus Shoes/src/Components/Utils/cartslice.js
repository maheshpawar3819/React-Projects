import { createSlice } from "@reduxjs/toolkit";

const addcart = createSlice({
  name: "cart",
  initialState: {
    addcart: [],
  },
  reducers: {
    addtocart: (state, action) => {
      state.addcart = action.payload;
    },
  },
});

export const { addtocart } = addcart.actions;
export default addcart.reducer;
