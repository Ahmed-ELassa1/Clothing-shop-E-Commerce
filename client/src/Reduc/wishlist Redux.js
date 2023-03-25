import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  id: "",
  wishlistQuantity: 0,
  wishlistProducts: JSON.parse(localStorage.getItem("wishlistProducts")) || [],
};
const wishlistRedux = createSlice({
  name: "wishlist",
  initialState: initialState,
  reducers: {
    addProductToWish: (state, action) => {
      let newProducts = [];
      const localStorageProducts = JSON.parse(
        localStorage.getItem("wishlistProducts")
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
      localStorage.setItem("wishlistProducts", JSON.stringify(newProducts));
      state.wishlistProducts = [...newProducts];
    },

    removeProductFromWish: (state, action) => {
      state.wishlistProducts = JSON.parse(localStorage.getItem("wishlistProducts"));
      state.wishlistProducts = action.payload.wishlistProducts;
      localStorage.setItem("wishlistProducts", JSON.stringify(state.wishlistProducts));
    },
  },
});

export const { removeProductFromWish, addProductToWish } =
  wishlistRedux.actions;
export default wishlistRedux.reducer;
