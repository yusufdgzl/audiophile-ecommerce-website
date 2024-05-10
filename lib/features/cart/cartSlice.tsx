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
    addItemToCart: (state, action) => {

      const newItem = action.payload;
      const existingItem = state.items.find((item)=> item.id === newItem.id);
      const existingItemIndex = state.items.findIndex((item)=> item.id === newItem.id);

      state.total = state.total + newItem.price * newItem.amount
      
      if( !existingItem ) {
        state.items = state.items.concat(newItem); 
      } else {
        state.items[existingItemIndex].amount = state.items[existingItemIndex].amount + newItem.amount;
      }
    },
  },
});

export const addItemToCart = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
