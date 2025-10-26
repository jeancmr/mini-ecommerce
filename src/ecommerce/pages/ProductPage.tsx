import { useEffect } from 'react';
import { useParams } from 'react-router';
import { NavBar } from '../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { startProduct } from '../../store/ecommerce';

import { CheckingAuth } from '../../ui/components/CheckingAuth';
import { ProductDetails, ProductReviews } from '../components/Product';

export const ProductPage = () => {
  const { id } = useParams();
  const { isLoading, product } = useAppSelector((state) => state.ecommerce);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startProduct(id!));
  }, [id]);

  return (
    <>
      <NavBar />
      {isLoading ? (
        <CheckingAuth />
      ) : (
        <main>
          <ProductDetails product={product!} />

          {product && <ProductReviews reviews={product?.reviews} />}
        </main>
      )}
    </>
  );
};
