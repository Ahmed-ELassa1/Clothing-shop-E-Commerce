import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import  productDetailSlice from "./productDetailSlice";
import productListSlice from "./productListSlice";
import wishlistRedux from "./wishlist Redux";

let confStore = configureStore({
  reducer: {
    productListSlice: productListSlice,
    productDetailSlice: productDetailSlice,
    cartSlice: cartSlice,
    wishlistRedux:wishlistRedux,
  },
});
export default confStore;
