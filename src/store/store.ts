import { configureStore } from '@reduxjs/toolkit';
import { ecommerceSlice } from './ecommerce';
import { authSlice } from './auth';
import { cartSlice } from './cart';

export const store = configureStore({
  reducer: {
    ecommerce: ecommerceSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
