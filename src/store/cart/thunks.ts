import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';
import { FirebaseDB } from '../../firebase/config';
import { addToCart, clearCart, removeFromCart, savingProduct, setCartItems } from './cartSlice';
import type { AppDispatch, RootState } from '../store';
import type { Product } from '../../types/product';

export const startNewProduct = (product: Product) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { uid } = getState().auth;

    dispatch(savingProduct());

    const newDoc = doc(collection(FirebaseDB, `cart_items/${uid}/items`));
    const newProduct = { ...product, id: newDoc.id, quantity: 1 };
    await setDoc(newDoc, newProduct);

    dispatch(addToCart(newProduct));
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

export const startDeleteProduct = (productId: string) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error('User not authenticated');

    dispatch(savingProduct());
    const docRef = doc(FirebaseDB, `cart_items/${uid}/items/${productId}`);
    await deleteDoc(docRef);

    dispatch(removeFromCart(productId));
  };
};

export const startClearCart = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error('User not authenticated');

    dispatch(savingProduct());

    const itemsRef = collection(FirebaseDB, `cart_items/${uid}/items`);
    const querySnapshot = await getDocs(itemsRef);

    const deletePromises = querySnapshot.docs.map((docSnap) => deleteDoc(docSnap.ref));

    await Promise.all(deletePromises);

    dispatch(clearCart());
  };
};
