import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ImageItem {
  id: string;
  Url: string;
  Nombre?: string;
}

interface Props {
  images: ImageItem[];
}

export const ImageCarousel: React.FC<Props> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Slider {...settings}>
        {images.map((img) => (
          <div key={img.id}>
            <img
              src={img.Url}
              alt={img.Nombre ?? `Slide ${img.id}`}
              className="rounded-xl w-full h-64 object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
