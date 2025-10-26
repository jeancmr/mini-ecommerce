import { LayoutApp } from '../../ui/layout/LayoutApp';
import { Categories, Hero, NavBar } from '../components';
import { FeaturedProducts } from '../components/Product';

export const EcommercePage = () => {
  return (
    <LayoutApp>
      <NavBar />
      <Hero />
      <FeaturedProducts />
      <Categories />
    </LayoutApp>
  );
};
