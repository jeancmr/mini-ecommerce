import { useAppSelector } from '../../store/hooks';
import { ProductCard } from './ProductCard';
import type { Product } from '../../types/product';

export const Products = () => {
  const { products }: { products: Product[] } = useAppSelector((state) => state.ecommerce);

  return (
    <>
      <div className="flex flex-wrap gap-4 p-4 bg-gray-100">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
