import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { startFeaturedProducts } from '../../store/ecommerce';
import type { Product } from '../../types/product';
import { ProductCard } from './ProductCard';

export const FeaturedProducts = () => {
  const dispatch = useAppDispatch();
  const { featuredProducts }: { featuredProducts: Product[] } = useAppSelector(
    (state) => state.ecommerce
  );

  useEffect(() => {
    dispatch(startFeaturedProducts());
  }, []);
  return (
    <section>
      <h2 className="text-2xl font-bold text-center">Featured Products</h2>
      <div className="flex flex-wrap gap-4 p-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
