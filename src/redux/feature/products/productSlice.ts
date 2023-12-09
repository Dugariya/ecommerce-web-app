import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IProductItem {
  id: number;
  title: string;
  description: string;
  price: number;
}
export interface productsState {
  product: IProductItem[];
  singleProducts: any;
  isLoading: boolean;
  error: string;
}

const initialState: productsState = {
  product: [],
  singleProducts: {},
  isLoading: false,
  error: "",
};
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      "https://dummyjson.com/products"
    );
    let result = await response.json();
    return result.products;
  }
);

export const fetchSingleProducts = createAsyncThunk(
  "products/fetchSingleProducts",
  async (id: number) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    let result = await response.json();
    console.log(result, "result");

    return result;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<IProductItem>) => {
      state.product.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchSingleProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleProducts.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(fetchSingleProducts.fulfilled, (state, action) => {
      state.singleProducts = action.payload;
      state.isLoading = false;
    });
  },
});

export const { addProducts } = productsSlice.actions;

export default productsSlice.reducer;
