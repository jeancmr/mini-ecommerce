import { useForm, type SubmitHandler } from 'react-hook-form';
import { AuthLayout } from '../layout/AuthLayout';
import { useAppDispatch } from '../../store/hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

interface IFormInput {
  email: string;
  name: string;
  password: string;
  displayName: string;
  photoURL?: string;
}

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    dispatch(startCreatingUserWithEmailPassword(data));
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-6">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            {...register('displayName', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Minimum length is 2' },
            })}
          />
          {errors.displayName && (
            <p className="text-red-500 text-sm mt-1">{errors.displayName.message}</p>
          )}
        </div>
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
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                message:
                  'Password must be at least 6 characters long and include both letters and numbers',
              },
              required: 'Password is required',
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
          type="submit"
        >
          Register
        </button>
        <p>
          Already have an account? <a href="/auth/login">Login</a>
        </p>
      </form>
    </AuthLayout>
  );
};
