import { useForm, type SubmitHandler } from 'react-hook-form';
import { AuthLayout } from '../layout/AuthLayout';

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

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
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
              pattern: /^[A-Za-z]+$/i,
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
          >
            Login
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded cursor-pointer">
            Google
          </button>
        </div>
        <p>
          Don't have an account? <a href="/auth/register">Register</a>
        </p>
      </form>
    </AuthLayout>
  );
};
