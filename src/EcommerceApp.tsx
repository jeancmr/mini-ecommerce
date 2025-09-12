import { BrowserRouter } from 'react-router';
import { AppRouter } from './router/AppRouter';

export const EcommerceApp = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};
