import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getProductDetail = createAsyncThunk(
  `product/id`,
  async (productId) => {
    // const options = {
    //   params: {
    //     webID: productId,

    //   },
    //   headers: {
    //     'X-RapidAPI-Key': 'de13fbe6afmsh513dee0bbc1519fp13835ejsnb4bd17b8f24b',
    //     'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
    //   },
    // };
    // let { data } = await axios.get(
    //   `https://fakestoreapi.com/products/${productId}`
    // );
    // return data;
  }
);

let initialState = { productDetails: [] };
let productDetailSlice = createSlice({
  name: "productDetail",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductDetail.fulfilled, (state, actions) => {
      state.productDetails = actions.payload;
    });
  },
});

export let { productDetails } = productDetailSlice.actions;
export default productDetailSlice.reducer;
