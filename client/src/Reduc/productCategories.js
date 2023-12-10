import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getProductsByCategories = createAsyncThunk(
  "productList/categories",
  async (category) => {
    try {
      let { data } = await axios.get(
        `${window.location.origin}/data/Products.json`
      );
      const filtered = data?.filter((product) => {
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
