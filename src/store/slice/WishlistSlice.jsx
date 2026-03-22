import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../db/comondatabase";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            // Check if productID already exists in wishlistItems
            const isDuplicate = state.wishlistItems.find(
                (item) => item.productID === action.payload.id
            );

            if (isDuplicate) {
                alert(" already in the wishlist")
                return;
            }

            const newItem = {
                id: Date.now(),
                productID: action.payload.id,
                title: action.payload.title,
                price: action.payload.price,
                thumbnail: action.payload.thumbnail,
            };
            state.wishlistItems.push(newItem);
        },
        removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
