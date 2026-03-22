"use client";
import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          id: action.payload.id,  
          title: action.payload.title,
          price: action.payload.price,
          thumbnail: action.payload.thumbnail,
          quantity: 1,
        });
      }
    },

    removeFromcartitems: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    incrementQty: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (item) item.quantity += 1;
    },

    decrementQty: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromcartitems,
  incrementQty,
  decrementQty,
} = CartSlice.actions;

export default CartSlice.reducer;