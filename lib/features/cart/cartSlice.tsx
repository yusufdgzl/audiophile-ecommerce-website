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

      state.total = state.total + newItem.price * newItem.amount;
      state.totalAmount = state.totalAmount + newItem.amount;

      if (!existingItem) {
        state.items = state.items.concat(newItem);
      } else {
        existingItem.amount = existingItem.amount + newItem.amount;
      }
    },

    deleteItemFromCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem && existingItem.amount !== 0) {
        existingItem.amount = existingItem.amount - 1;
        state.totalAmount--;
        state.total = state.total - existingItem.price;
      }

      if (existingItem && existingItem.amount === 0) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      }
    },

    clearAllCart: (state) => {
      state.items = [];
      state.total = 0;
      state.totalAmount = 0;
    },

    clearItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.items = state.items.filter((item) => item.id !== newItem.id);

      if (existingItem) {
        state.total = state.total - existingItem.amount * existingItem.price;
        state.totalAmount = state.totalAmount - existingItem.amount;
      }
    },
  },
});

export const addItemToCart = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
