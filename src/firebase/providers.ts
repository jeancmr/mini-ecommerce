import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

interface registerData {
  email: string;
  password: string;
  displayName: string;
}

interface loginData {
  email: string;
  password: string;
}

const googleProvider = new GoogleAuthProvider();

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}: registerData) => {
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

    if (FirebaseAuth.currentUser) {
      await updateProfile(FirebaseAuth.currentUser, {
        displayName,
      });
    }

    return {
      ok: true,
      email,
      uid: resp.user.uid,
      displayName,
      photoURL: resp.user.photoURL,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return { ok: false, errorMessage };
  }
};

export const loginWithEmailPassword = async ({ email, password }: loginData) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL, displayName } = resp.user;

    console.log('uid,photoURL,displayName', uid, photoURL, displayName);
    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error: any) {
    return { ok: false, errorMessage: error.message };
  }
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An error occurred during Google sign-in.';
    return { ok: false, errorMessage };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
