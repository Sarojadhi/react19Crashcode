import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.count += 1;
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.count = state.count > 0 ? state.count - 1 : state.count;
        state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
      state.count = 0;
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
