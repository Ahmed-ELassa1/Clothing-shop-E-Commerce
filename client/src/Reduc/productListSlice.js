import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from 'react-router-dom';



export let getProducts = createAsyncThunk(
  "productList/categories",
  async (id=1) => {
    let  {data}  = await axios.get(
      `https://api.escuelajs.co/api/v1/categories/${id}/products`
    );
    return data;
  }
);

let initialState = { productList: [] };

let productSlice = createSlice({
  name: "productList",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, actions) => {
      state.productList = actions.payload;
    });
  },
});

export let { productList } = productSlice.actions;
export default productSlice.reducer;
