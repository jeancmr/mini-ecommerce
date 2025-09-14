import { useForm, type SubmitHandler } from 'react-hook-form';
import { AuthLayout } from '../layout/AuthLayout';

interface IFormInput {
  email: string;
  name: string;
  password: string;
}

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-6">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Minimum length is 2' },
            })}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
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
              pattern: /^[A-Za-z]+$/i,
              required: 'Password is required',
              minLength: { value: 4, message: 'Minimum length is 4' },
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
