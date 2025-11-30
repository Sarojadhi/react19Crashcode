import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.count = state.items.length;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.count = state.items.length;
    },
    clearCart: (state) => {
      state.items = [];
      state.count = 0;
    },
    incrementCount: (state) => {
      state.count += 1;  // for generic cart icon increment
    },
  },
});

export const { addToCart, removeFromCart, clearCart, incrementCount } = cartSlice.actions;
export default cartSlice.reducer;
