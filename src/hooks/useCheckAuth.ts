import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { login, logout } from '../store/auth';
import { FirebaseAuth } from '../firebase/config';
import { startLoadingCart } from '../store/cart';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export const useCheckAuth = () => {
  const { status } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (!user) {
        dispatch(logout());
        return;
      }

      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
      dispatch(startLoadingCart());
    });
  }, []);

  return {
    status,
  };
};
