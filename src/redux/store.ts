import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './feature/products/productSlice'
import cartReducer from './feature/cart/cartSlice'
export const store = configureStore({
  reducer: {
    products:productsReducer,
    cart:cartReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch