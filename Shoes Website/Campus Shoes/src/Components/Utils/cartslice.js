import { createSlice } from "@reduxjs/toolkit";

const addcart = createSlice({
  name: "cart",
  initialState: {
    addcart: [],
  },
  reducers: {
    addtocart: (state, action) => {
      state.addcart.push(action.payload);
    },
    removetocart: (state, action) => {
      state.addcart.pop(action.payload);
    },
  },
});

export const { addtocart, removetocart } = addcart.actions;
export default addcart.reducer;
