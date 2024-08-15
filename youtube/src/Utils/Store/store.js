import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoReducer from "./videosSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    video: videoReducer,
    search: searchSlice,
    chat:chatSlice,
  },
});

export default store;
