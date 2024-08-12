import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoReducer from "./videosSlice";
import searchSlice from "./searchSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    video: videoReducer,
    search: searchSlice,
  },
});

export default store;
