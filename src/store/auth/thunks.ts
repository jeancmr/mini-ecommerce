import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from '../../firebase/providers';
import type { AppDispatch } from '../store';
import { checkingCredentials, login, logout } from './authSlice';
import { clearCart } from '../cart';

interface RegisterData {
  email: string;
  password: string;
  displayName: string;
  photoURL?: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}: RegisterData) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(
      login({
        uid,
        displayName,
        email,
        photoURL,
      })
    );
  };
};

export const startLoginWithEmailPassword = ({ email, password }: LoginData) => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());

    const resp = await loginWithEmailPassword({ email, password });

    if (!resp.ok) return dispatch(logout({ errorMessage: resp.errorMessage }));

    dispatch(login(resp));
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();

    if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch: AppDispatch) => {
    await logoutFirebase();
    dispatch(logout({ errorMessage: '' }));
    dispatch(clearCart());
  };
};
