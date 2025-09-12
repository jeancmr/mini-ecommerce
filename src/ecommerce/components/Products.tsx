import { useAppSelector } from '../../store/hooks';
import type { Product } from '../../types/product';

export const Products = () => {
  const { products }: { products: Product[] } = useAppSelector((state) => state.ecommerce);

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
            // style={{ border: '1px solid #ccc', padding: '16px', width: '200px' }}
            className=" p-4 w-48 rounded-md shadow-md bg-white"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};
