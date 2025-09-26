import { Navigate, Route, Routes } from 'react-router';
import { EcommerceRoutes } from '../ecommerce/routes/EcommerceRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { CheckingAuth } from '../ui/components/CheckingAuth';

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path="/*" element={<EcommerceRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
