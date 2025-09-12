import { createSlice } from '@reduxjs/toolkit';

export const ecommerceSlice = createSlice({
  name: 'ecommerce',
  initialState: {
    isSaving: false,
    messageSaved: '',
    carrusel: [],
    categories: [],
    active: null,
  },

  reducers: {
    setCarrusel: (state, action) => {
      state.carrusel = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCarrusel, setCategories } = ecommerceSlice.actions;
