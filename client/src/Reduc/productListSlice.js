import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getProducts = createAsyncThunk(
  "productList/categories",
  async (id = 1) => {
    try {
      let { data } = await axios.get(`${window.location.origin}/data/Products.json`);
      return data;
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
