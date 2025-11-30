import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("product/fetch", async () => {
  const repo = await fetch("https://dummyjson.com/products");
  const data = await repo.json();
  return data.products;
});

const initialState = {
  item: [],
  status: "idle",
  error: null,
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
            .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.item = action.payload;
      })
     
  },
});

export default ProductSlice.reducer;

export const {} = ProductSlice.actions;
