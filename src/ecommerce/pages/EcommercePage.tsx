import { LayoutApp } from '../../ui/layout/LayoutApp';
import { NavBar, Hero, Categories, FeaturedProducts } from '../components';

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
