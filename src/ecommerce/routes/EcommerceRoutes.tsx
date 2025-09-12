import { Navigate, Route, Routes } from 'react-router';
import { EcommercePage } from '../pages/EcommercePage';
import { CategoryProductsPage } from '../pages/CategoryProductsPage';

export const EcommerceRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EcommercePage />} />
      <Route path="/category/:category" element={<CategoryProductsPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
