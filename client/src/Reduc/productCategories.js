import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsData from "../data/Products.js";

export let getProductsByCategories = createAsyncThunk(
  "productList/categories",
  async (category) => {
    try {
      const filtered = productsData?.filter((product) => {
        return product.type === category;
      });
      return filtered;
    } catch (error) {
      throw error;
    }
  }
);

let initialState = { productListCategory: [] };

let productCategorySlice = createSlice({
  name: "productListCategory",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductsByCategories.fulfilled, (state, action) => {
      state.productListCategory = action.payload;
    });
  },
});

export let { productListCategory } = productCategorySlice.actions;
export default productCategorySlice.reducer;
