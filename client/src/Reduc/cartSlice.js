import { createSlice } from "@reduxjs/toolkit";
import { getProductDetail } from "./productDetailSlice";

let initialState = {
  id: "",
  productQuantinty: 1,
  quantity: 0,
  subTotal: 0,
  products: JSON.parse(localStorage.getItem("cartProducts")) || [],
  taxes: 0,
  shipping: 0,
  total: 0,
  cartQantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: { ...initialState, shipping: initialState.quantity * 0.05 },
  extraReducers: (builder) => {
    builder.addCase(getProductDetail.fulfilled, (state, actions) => {
      state.productDetails = actions.payload;
    });
  },
  reducers: {
    increseQuantity: (state, action) => {
      state.productQuantinty += 1;
    },

    decreseQuantity: (state, action) => {
      if (state.productQuantinty === 1) {
        return;
      }
      state.productQuantinty -= 1;
    },

    addProduct: (state, action) => {
      let newProducts = [];
      const localStorageProducts = JSON.parse(
        localStorage.getItem("cartProducts")
      );
      if (!localStorageProducts) {
        newProducts = [action.payload];
      } else {
        const isPresent = localStorageProducts?.filter(
          (p) => p?.id == action.payload.id
        );
        if (Boolean(isPresent?.length)) {
          const newProduct = {
            id: isPresent?.[0].id,
            quantity: Number(isPresent?.[0].quantity) + 1,
          };
          const otherProducts = localStorageProducts?.filter(
            (p) => p?.id != action.payload.id
          );
          newProducts = [...otherProducts, newProduct];
        } else {
          state.cartQantity++;
          newProducts = [...localStorageProducts, action.payload];
        }
      }
      localStorage.setItem("cartProducts", JSON.stringify(newProducts));
      state.products = [...newProducts];
    },

    removeProduct: (state, action) => {
      state.products = JSON.parse(localStorage.getItem("cartProducts"));
      state.products = action.payload.products;
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increseQuantity,
  decreseQuantity,
  displayProducts,
} = cartSlice.actions;
export default cartSlice.reducer;
