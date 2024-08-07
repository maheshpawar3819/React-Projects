import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoReducer from "./videosSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    video: videoReducer,
  },
});

export default store;
