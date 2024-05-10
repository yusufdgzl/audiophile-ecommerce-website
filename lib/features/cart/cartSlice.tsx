import { ProductsType } from "@/app/category/headphones/page";
import { createSlice } from "@reduxjs/toolkit";

type CartState = {
  items: ProductsType[];
  total: number;
  totalAmount: number;
};

const initialState: CartState = {
  items: [],
  total: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      state.total = state.total + newItem.price * newItem.amount;
      state.totalAmount = state.totalAmount + newItem.amount;

      if (!existingItem) {
        state.items = state.items.concat(newItem);
      } else {
        state.items[existingItemIndex].amount =
          state.items[existingItemIndex].amount + 1;
      }
    },
    deleteItemFromCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem && existingItem.amount !== 0) {
        existingItem.amount = existingItem.amount - 1;
      }
      if (existingItem && existingItem.amount === 0) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      }
    },
  },
});

export const addItemToCart = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
