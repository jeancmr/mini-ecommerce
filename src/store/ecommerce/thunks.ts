import { collection, getDocs } from 'firebase/firestore';
import { FirebaseDB } from '../../firebase/config';
import { setCarrusel, setCategories, setProducts, setLoading } from './ecommerceSlice';
import type { AppDispatch, RootState } from '../store';
import type { Product } from '../../types/product';

export const startLoadingCarrusel = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const carruselArray = await getDocs(collection(FirebaseDB, `carrusel_imagenes`));
    const carruselArrayData = carruselArray.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    dispatch(setCarrusel(carruselArrayData));
  };
};

export const startCategories = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await fetch('https://dummyjson.com/products/category-list');
      const data = await res.json();
      dispatch(setCategories(data));
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
};

export const startProductsByCategory = (category: string) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(setLoading(true));
      const res = await fetch(`https://dummyjson.com/products/category/${category}`);
      const data = await res.json();
      console.log('data', data);
      const products = data.products.map((product: Product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail,
      }));

      dispatch(setProducts(products));
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
