import { Navigate, Route, Routes } from 'react-router';
import { CartPage, CategoryProductsPage, EcommercePage, ProductPage } from '../pages';

export const EcommerceRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EcommercePage />} />
      <Route path="/category/:category" element={<CategoryProductsPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
