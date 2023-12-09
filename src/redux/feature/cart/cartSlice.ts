import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IProductItem {
  id: number;
  title: string;
  description: string;
  price: number;
}
export interface cartState {
    cart: IProductItem[];
  isLoading: boolean;
  error: string;
}

const initialState: cartState = {
  cart: [],
  isLoading: false,
  error: "",
};


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addcart: (state, action: PayloadAction<IProductItem>) => {
      state.cart.push(action.payload);
    },
  },
  
});

export const { addcart } = cartSlice.actions;

export default cartSlice.reducer;
