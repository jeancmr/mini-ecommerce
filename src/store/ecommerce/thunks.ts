import { collection, getDocs } from 'firebase/firestore';
import { FirebaseDB } from '../../firebase/config';
import { setCarrusel, setCategories } from './ecommerceSlice';

export const startLoadingCarrusel = () => {
  return async (dispatch, getState) => {
    // const { uid } = getState().auth;

    // if (!uid) throw new Error('User UID is required to load notes');

    const carruselArray = await getDocs(collection(FirebaseDB, `carrusel_imagenes`));
    const carruselArrayData = carruselArray.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    dispatch(setCarrusel(carruselArrayData));
  };
};

export const startCategories = () => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch('https://dummyjson.com/products/category-list');
      const data = await res.json();
      dispatch(setCategories(data));
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
};
