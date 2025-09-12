import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { NavBar } from '../components';
import { startProductsByCategory } from '../../store/ecommerce';
import { Products } from '../components/Products';

export const CategoryProductsPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.ecommerce);

  const { category } = useParams();

  useEffect(() => {
    dispatch(startProductsByCategory(category!));
  }, []);

  return (
    <>
      <NavBar />
      <h1>Category: {category}</h1>
      {isLoading ? <div>Loading...</div> : <Products />}
    </>
  );
};
