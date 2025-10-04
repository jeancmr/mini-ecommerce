import { startNewProduct } from '../../store/cart';
import { useAppDispatch } from '../../store/hooks';
import type { Product } from '../../types/product';

export const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  const addProductToCart = (product: Product) => {
    dispatch(startNewProduct({ ...product, quantity: 1 }));
  };

  return (
    <div
      key={product.id}
      className="relative p-4 w-48 rounded-md shadow-md bg-white group cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
      />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button
        onClick={() => addProductToCart(product)}
        className="absolute bottom-2 right-2 px-4 py-2 bg-blue-600 text-red rounded-lg opacity-0 
                   group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
      >
        Agregar
      </button>
    </div>
  );
};
