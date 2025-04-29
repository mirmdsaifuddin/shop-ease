import { configureStore } from "@reduxjs/toolkit";
//import productsReducer from "./ProductsSlice";
import productSlice from "./ProductsSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export default store;
