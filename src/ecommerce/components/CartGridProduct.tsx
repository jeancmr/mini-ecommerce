import Icon from '@mdi/react';
import { mdiArrowLeft, mdiTrashCanOutline } from '@mdi/js';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { startClearCart, startDeleteProduct, startUpdateQuantity } from '../../store/cart';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

export const CartGridProduct = () => {
  const dispatch = useAppDispatch();
  const { items, isSaving } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    dispatch(startUpdateQuantity(id, newQuantity));
  };

  const removeItem = (id: string) => {
    dispatch(startDeleteProduct(id));
    toast.success('Producto eliminado del carrito', { position: 'bottom-right', autoClose: 2000 });
  };

  const clearCart = () => {
    dispatch(startClearCart());
  };

  return (
    <div className="max-w-5xl bg-white rounded-2xl shadow-sm p-6">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-500 text-sm">
            <th className="pb-3">PRODUCT</th>
            <th className="pb-3">PRICE</th>
            <th className="pb-3">QUANTITY</th>
            <th className="pb-3">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 && isSaving && (
            <tr>
              <td colSpan={4} className="text-center py-10 text-gray-500">
                Loading cart items...
              </td>
            </tr>
          )}
          {items.length === 0 && !isSaving && (
            <tr>
              <td colSpan={4} className="text-center py-10 text-gray-500">
                Your cart is empty
              </td>
            </tr>
          )}
          {items.map((item) => (
            <tr key={item.id} className="border-b last:border-none hover:bg-gray-50 transition">
              <td className="flex items-center gap-4 py-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <p className="font-medium mb-1">{item.title}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm flex items-center gap-1 cursor-pointer"
                  >
                    <Icon path={mdiTrashCanOutline} size={1} /> Remove
                  </button>
                </div>
              </td>

              <td className="text-gray-600">${item.price.toFixed(2)}</td>

              <td>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuantity(item.id, item.quantity - 1)}
                    className="bg-blue-100 text-blue-600 w-7 h-7 rounded-full font-bold cursor-pointer"
                  >
                    −
                  </button>
                  <ToastContainer />
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantity(item.id, item.quantity + 1)}
                    className="bg-blue-100 text-blue-600 w-7 h-7 rounded-full font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </td>

              <td className="font-medium">${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
        <button
          className="flex items-center gap-2 text-blue-600 hover:underline cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <Icon path={mdiArrowLeft} size={1} /> Continue shopping
        </button>

        {items.length > 0 && (
          <button
            onClick={clearCart}
            className="text-gray-500 hover:text-red-500 transition cursor-pointer"
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};
