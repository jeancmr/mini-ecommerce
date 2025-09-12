import { createSlice } from '@reduxjs/toolkit';

export const ecommerceSlice = createSlice({
  name: 'ecommerce',
  initialState: {
    isLoading: false,
    messageSaved: '',
    carrusel: [],
    categories: [],
    products: [],
    active: null,
  },

  reducers: {
    setCarrusel: (state, action) => {
      state.carrusel = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCarrusel, setCategories, setProducts, setLoading } = ecommerceSlice.actions;
