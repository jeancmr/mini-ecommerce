import { collection, getDocs } from 'firebase/firestore';
import { FirebaseDB } from '../../firebase/config';
import {
  setCarrusel,
  setCategories,
  setProducts,
  setLoading,
  setFeaturedProducts,
  setProduct,
} from './ecommerceSlice';
import type { AppDispatch } from '../store';
import type { Product } from '../../types/product';

export const startLoadingCarrusel = () => {
  return async (dispatch: AppDispatch) => {
    const carruselArray = await getDocs(collection(FirebaseDB, `carrusel_imagenes`));
    const carruselArrayData = carruselArray.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    dispatch(setCarrusel(carruselArrayData));
  };
};

export const startCategories = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await fetch('https://dummyjson.com/products/category-list');
      const data = await res.json();
      dispatch(setCategories(data));
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
};

export const startFeaturedProducts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await fetch(
        'https://dummyjson.com/products?limit=6&skip=30&select=title,price,thumbnail'
      );
      const data = await res.json();
      const featuredProducts = data.products.map((product: Product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail,
      }));
      dispatch(setFeaturedProducts(featuredProducts));
    } catch (error) {
      console.error('Error fetching featured products:', error);
    }
  };
};

export const startProductsByCategory = (category: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await fetch(`https://dummyjson.com/products/category/${category}`);
      const data = await res.json();
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

export const startProduct = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      const product = {
        availabilityStatus: data.availabilityStatus,
        category: data.category,
        description: data.description,
        dimensions: data.dimensions,
        discountPercentage: data.discountPercentage,
        id: data.id,
        images: data.images,
        price: data.price,
        rating: data.rating,
        reviews: data.reviews,
        stock: data.stock,
        title: data.title,
        warrantyInformation: data.warrantyInformation,
      };
      dispatch(setProduct(product));
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
