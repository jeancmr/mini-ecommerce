import { useForm, type SubmitHandler } from 'react-hook-form';
import { AuthLayout } from '../layout/AuthLayout';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { useMemo } from 'react';

interface IFormInput {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const dispatch = useAppDispatch();
  const { status, errorMessage } = useAppSelector((state) => state.auth);
  console.log(errorMessage);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  console.log('ISAUTH ', isAuthenticating);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    dispatch(startLoginWithEmailPassword(data));
  };

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-6">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            className="w-full border rounded px-3 py-2"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 4, message: 'Minimum length is 4' },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
        <div className="flex justify-center gap-3.5 items-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
            type="submit"
            disabled={isAuthenticating}
          >
            Login
          </button>
          <button
            className={`${
              isAuthenticating ? 'bg-red-300' : 'bg-red-500'
            } hover:bg-red-600 text-white px-4 py-2 rounded cursor-pointer`}
            onClick={onGoogleSignIn}
            disabled={isAuthenticating}
            type="button"
          >
            Google
          </button>
        </div>
        {errorMessage && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline"> {errorMessage}</span>
          </div>
        )}
        <p>
          Don't have an account? <a href="/auth/register">Register</a>
        </p>
      </form>
    </AuthLayout>
  );
};
