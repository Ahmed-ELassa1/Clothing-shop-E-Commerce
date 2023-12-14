import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsData from "../data/Products";

export let getProducts = createAsyncThunk(
  "productList/categories",
  async (id = 1) => {
    try {
      return productsData;
    } catch (error) {
      throw error;
    }
  }
);

let initialState = { productList: [] };

let productSlice = createSlice({
  name: "productList",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
  },
});

export let { productList } = productSlice.actions;
export default productSlice.reducer;
