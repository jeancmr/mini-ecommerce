import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { startProductsByCategory } from '../../store/ecommerce';
import { NavBar } from '../components';
import { Products } from '../components/Product';
import { CheckingAuth } from '../../ui/components/CheckingAuth';

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
      <h2 className="text-2xl font-semibold ml-8 mb-10 mt-6">{category}</h2>
      {isLoading ? <CheckingAuth /> : <Products />}
    </>
  );
};
