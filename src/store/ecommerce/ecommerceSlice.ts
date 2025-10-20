import { createSlice } from '@reduxjs/toolkit';
import type { Product } from '../../types/product';

interface EcommerceState {
  isLoading: boolean;
  messageSaved: string;
  carrusel: any[];
  categories: any[];
  products: Product[];
  featuredProducts: Product[];
  product: Product | null;
  active: Product | null;
}

const initialState: EcommerceState = {
  isLoading: false,
  messageSaved: '',
  carrusel: [],
  categories: [],
  products: [],
  featuredProducts: [],
  product: null,
  active: null,
};

export const ecommerceSlice = createSlice({
  name: 'ecommerce',
  initialState,
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
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setFeaturedProducts: (state, action) => {
      state.featuredProducts = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCarrusel,
  setCategories,
  setProducts,
  setProduct,
  setFeaturedProducts,
  setLoading,
} = ecommerceSlice.actions;
