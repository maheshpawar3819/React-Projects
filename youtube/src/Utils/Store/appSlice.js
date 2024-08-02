import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuopen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuopen = !state.isMenuopen;
    },
    toshideMenu:(state) => {
      state.isMenuopen=false; 
    }
  },
});

export const { toggleMenu ,toshideMenu } = appSlice.actions;
export default appSlice.reducer;
