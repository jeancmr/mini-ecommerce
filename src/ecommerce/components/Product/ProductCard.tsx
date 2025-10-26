import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { useAppDispatch } from '../../../store/hooks';
import type { Product } from '../../../types/product';
import { startNewProduct } from '../../../store/cart';

export const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const addProductToCart = (product: Product) => {
    dispatch(startNewProduct({ ...product, quantity: 1 }));
    toast.success('Producto agregado al carrito', { position: 'bottom-right', autoClose: 2000 });
  };

  return (
    <div key={product.id} className="relative p-3 w-48 rounded-md shadow-md bg-white group">
      <div className="cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: '100%', height: '150px', objectFit: 'cover' }}
        />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>

      <button
        onClick={() => addProductToCart(product)}
        className="w-full rounded-lg bg-gray-800 text-white py-2 mt-2 hover:bg-gray-700 transition-colors cursor-pointer"
      >
        Add to cart
      </button>
      <ToastContainer />
    </div>
  );
};
