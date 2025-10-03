import { startNewProduct } from '../../store/cart';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import type { Product } from '../../types/product';

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

export const Products = () => {
  const { products }: { products: Product[] } = useAppSelector((state) => state.ecommerce);
  const dispatch = useAppDispatch();

  const addProductToCart = (product: CartItem) => {
    dispatch(startNewProduct({ ...product, quantity: 1 }));
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          padding: '16px',
        }}
        className="bg-gray-100"
      >
        {products.map((product) => (
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
        ))}
      </div>
    </>
  );
};
