import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsslice";
const appstore = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default appstore;
