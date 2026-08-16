import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";

interface WishlistState {
  items: Product[];
}

const WISHLIST_KEY = "bandage_wishlist";

const getWishlist = (): Product[] => {
  try {
    const wishlist = localStorage.getItem(WISHLIST_KEY);

    if (!wishlist) {
      return [];
    }

    return JSON.parse(wishlist);
  } catch {
    return [];
  }
};

const storeWishlist = (items: Product[]) => {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
};

const initialState: WishlistState = {
  items: getWishlist(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,

  reducers: {
    toggleWishlist: (
      state,
      action: PayloadAction<Product>,
    ) => {
      const productId = action.payload.id;

      const itemPosition = state.items.findIndex(
        (item) => item.id === productId,
      );

      if (itemPosition === -1) {
        state.items.push(action.payload);
      } else {
        state.items.splice(itemPosition, 1);
      }

      storeWishlist(state.items);
    },

    removeFromWishlist: (
      state,
      action: PayloadAction<number>,
    ) => {
      const productId = action.payload;

      state.items = state.items.filter(
        (item) => item.id !== productId,
      );

      storeWishlist(state.items);
    },
  },
});

export const {
  toggleWishlist,
  removeFromWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;