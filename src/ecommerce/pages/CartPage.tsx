import { LayoutApp } from '../../ui/layout/LayoutApp';
import { NavBar } from '../components';
import { CartGridProduct } from '../components/CartGridProduct';

export const CartPage = () => {
  return (
    <LayoutApp>
      <NavBar />
      <h1 className="text-2xl font-bold">Your shopping Cart</h1>
      <CartGridProduct />
    </LayoutApp>
  );
};
