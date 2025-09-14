import type { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
}

export const AuthLayout = ({ children, title = '' }: AuthLayoutProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-sm w-full border rounded-lg shadow bg-white ">
        <h1 className="text-2xl font-bold px-6 pt-6">{title}</h1>

        {children}
      </div>
    </section>
  );
};
