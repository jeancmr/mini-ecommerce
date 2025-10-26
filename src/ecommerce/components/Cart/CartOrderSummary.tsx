import Icon from '@mdi/react';
import { mdiLockOutline } from '@mdi/js';
import { toast } from 'react-toastify';
import { useAppSelector } from '../../../store/hooks';

export const CartOrderSummary = () => {
  const { totalPrice } = useAppSelector((state) => state.cart);

  const onCheckout = () => {
    toast.info('Checkout will be implemented soon', {
      position: 'bottom-right',
      autoClose: 2000,
    });
  };

  return (
    <article className="w-full bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>

      <div className="space-y-4">
        <div className="flex justify-between text-gray-500">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-500">
          <span>Shipping</span>
          <span>Calculated at next step</span>
        </div>
      </div>
      <div className="border-t border-gray-400 mt-4 pt-4 flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <button
        className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 flex items-center justify-center gap-2 hover:bg-blue-700 transition cursor-pointer"
        onClick={onCheckout}
      >
        <Icon path={mdiLockOutline} size={1} />
        <span>Proceed to Checkout</span>
      </button>
    </article>
  );
};
