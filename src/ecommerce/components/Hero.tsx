import { useEffect } from 'react';
import { startLoadingCarrusel } from '../../store/ecommerce';
import { ImageCarousel } from './Carousel';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const Hero = () => {
  const dispatch = useAppDispatch();
  const carrusel = useAppSelector((state) => state.ecommerce.carrusel);

  useEffect(() => {
    dispatch(startLoadingCarrusel());
  }, []);

  return (
    <section className="bg-gray-100 mt-16">
      <div>
        <ImageCarousel images={carrusel} />
      </div>
    </section>
  );
};
