import { createSlice } from "@reduxjs/toolkit";

const newarraivals=createSlice({
  name:"newarrivals",
  initialState:{
    newArrivals:[],
  },
  reducers:{
    addNewarrivals:(state,action) => {
      state.newArrivals=action.payload;
    }
  }
})

export const {addNewarrivals}=newarraivals.actions;
export default newarraivals.reducer;