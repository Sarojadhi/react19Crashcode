import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  items: [], // [{id, title, price, quantity}]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.count = state.items.reduce((sum, i) => sum + i.quantity, 0);
    },
    removeFromCart: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(i => i.id !== action.payload.id);
        }
        state.count = state.items.reduce((sum, i) => sum + i.quantity, 0);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.count = 0;
    },
    incrementCount: (state) => {
      state.count += 1; 
    },
  },
});

export const { addToCart, removeFromCart, clearCart, incrementCount } = cartSlice.actions;
export default cartSlice.reducer;
