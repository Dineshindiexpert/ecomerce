import { createSlice } from "@reduxjs/toolkit";
import {initialState} from "../../db/comondatabase"

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const isDuplicate = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );

      if (isDuplicate) {
        alert("Already in wishlist");
        return;
      }

      state.wishlistItems.push(action.payload);
    },

    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;