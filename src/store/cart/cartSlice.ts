import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  isSaving: boolean;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  isSaving: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    savingProduct: (state) => {
      state.isSaving = true;
    },

    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
      state.totalItems = action.payload.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = action.payload.reduce((sum, item) => sum + item.price * item.quantity, 0);
      state.isSaving = false;
    },

    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
        state.totalItems += action.payload.quantity;
      }
      state.totalPrice += action.payload.price * action.payload.quantity;
      state.isSaving = false;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      state.isSaving = false;
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      state.isSaving = false;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
      state.isSaving = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, updateQuantity, clearCart, savingProduct, setCartItems } =
  cartSlice.actions;
