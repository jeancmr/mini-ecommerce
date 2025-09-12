import { Navigate, Route, Routes } from 'react-router';
import { EcommercePage } from '../pages/EcommercePage';

export const EcommerceRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EcommercePage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
