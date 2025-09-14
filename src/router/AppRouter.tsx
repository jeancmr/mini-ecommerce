import { Route, Routes } from 'react-router';
import { EcommerceRoutes } from '../ecommerce/routes/EcommerceRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<EcommerceRoutes />} />
    </Routes>
  );
};
