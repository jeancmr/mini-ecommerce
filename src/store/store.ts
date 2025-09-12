import { configureStore } from '@reduxjs/toolkit';
import { ecommerceSlice } from './ecommerce';

export const store = configureStore({
  reducer: {
    ecommerce: ecommerceSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
