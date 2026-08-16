import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, Product } from "../../types/product";

interface CartState {
  items: CartItem[];
}

const CART_STORAGE_KEY = "bandage_cart";

const getSavedCart = (): CartItem[] => {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCart) {
      return [];
    }

    return JSON.parse(storedCart);
  } catch {
    return [];
  }
};

const saveCart = (items: CartItem[]) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
};

const initialState: CartState = {
  items: getSavedCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      const cartItem = state.items.find(
        (item) => item.id === product.id,
      );

      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }

      saveCart(state.items);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;

      state.items = state.items.filter(
        (item) => item.id !== productId,
      );

      saveCart(state.items);
    },

    incrementQuantity: (state, action: PayloadAction<number>) => {
      const cartItem = state.items.find(
        (item) => item.id === action.payload,
      );

      if (!cartItem) {
        return;
      }

      cartItem.quantity += 1;
      saveCart(state.items);
    },

    decrementQuantity: (state, action: PayloadAction<number>) => {
      const cartItem = state.items.find(
        (item) => item.id === action.payload,
      );

      if (!cartItem || cartItem.quantity <= 1) {
        return;
      }

      cartItem.quantity -= 1;
      saveCart(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;