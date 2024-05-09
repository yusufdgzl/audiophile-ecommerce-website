import { ProductsType } from "@/app/category/headphones/page";
import { createSlice } from "@reduxjs/toolkit";

type CartState = {
  items: ProductsType[];
  total: number;
};

const initialState: CartState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {},
  },
});

export const addItemToCart = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
