import { useAppSelector } from '../../../store/hooks';
import type { Product } from '../../../types/product';
import { ProductCard } from './ProductCard';

export const Products = () => {
  const { products }: { products: Product[] } = useAppSelector((state) => state.ecommerce);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
