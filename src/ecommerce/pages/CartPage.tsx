import { LayoutApp } from '../../ui/layout/LayoutApp';
import { NavBar } from '../components';
import { CartGridProduct } from '../components/CartGridProduct';
import { CartOrderSummary } from '../components/CartOrderSummary';

export const CartPage = () => {
  return (
    <LayoutApp>
      <NavBar />
      <h1 className="text-2xl font-bold">Your shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-start">
        <CartGridProduct />
        <CartOrderSummary />
      </div>
    </LayoutApp>
  );
};
