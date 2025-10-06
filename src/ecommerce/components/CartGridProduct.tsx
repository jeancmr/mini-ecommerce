import Icon from '@mdi/react';
import { mdiArrowLeft, mdiTrashCanOutline } from '@mdi/js';
import { useAppSelector } from '../../store/hooks';

export const CartGridProduct = () => {
  const { items } = useAppSelector((state) => state.cart);

  const handleQuantity = (id: string, type: 'increase' | 'decrease') => {
    console.log(id, type);
  };

  const removeItem = (id: string) => {
    console.log(id);
  };

  const clearCart = () => {
    console.log('clear cart');
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
                    onClick={() => handleQuantity(item.id, 'decrease')}
                    className="bg-blue-100 text-blue-600 w-7 h-7 rounded-full font-bold"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantity(item.id, 'increase')}
                    className="bg-blue-100 text-blue-600 w-7 h-7 rounded-full font-bold"
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
        <button className="flex items-center gap-2 text-blue-600 hover:underline">
          <Icon path={mdiArrowLeft} size={1} />
        </button>
        <button onClick={clearCart} className="text-gray-500 hover:text-red-500 transition">
          Clear Cart
        </button>
      </div>
    </div>
  );
};
