import { createSlice } from "@reduxjs/toolkit";

const calculateCount = (items) => items.reduce((sum, i) => sum + i.quantity, 0);
const saveToLocalStorage = (items) => localStorage.setItem("cart", JSON.stringify(items));

const savedItems = localStorage.getItem("cart") 
  ? JSON.parse(localStorage.getItem("cart")) 
  : [];

const initialState = {
  items: savedItems,
  count: calculateCount(savedItems),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.count = calculateCount(state.items);
      saveToLocalStorage(state.items);
    },
    removeFromCart: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload.id);
        }
      }
      state.count = calculateCount(state.items);
      saveToLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.count = 0;
      saveToLocalStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
