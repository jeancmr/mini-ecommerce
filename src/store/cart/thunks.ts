import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { FirebaseDB } from '../../firebase/config';
import { addToCart, clearCart, savingProduct, setCartItems } from './cartSlice';
import type { AppDispatch, RootState } from '../store';
import type { Product } from '../../types/product';

export const startNewProduct = (product: Product) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { uid } = getState().auth;

    dispatch(savingProduct());

    const newDoc = doc(collection(FirebaseDB, `cart_items/${uid}/items`));
    await setDoc(newDoc, product);
    product.id = newDoc.id;

    dispatch(addToCart(product));
  };
};

export const startLoadingCart = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { uid } = getState().auth;

    if (!uid) throw new Error('User UID is required to load cart');

    const cart = await getDocs(collection(FirebaseDB, `cart_items/${uid}/items`));
    const cartItems = cart.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    dispatch(setCartItems(cartItems as Product[]));
  };
};
