import { useParams } from 'react-router';
import { NavBar } from '../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { startProduct } from '../../store/ecommerce';
import { useEffect, useState } from 'react';
import { ProductReviews } from '../components/ProductReviews';

export const ProductPage = () => {
  const { id } = useParams();
  const { isLoading, product } = useAppSelector((state) => state.ecommerce);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startProduct(id!));
  }, [id]);

  return (
    <>
      <NavBar />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <main>
          <section className="grid grid-cols-2 gap-10 max-w-4xl mx-auto mt-10">
            <article>
              <img
                className="h-96"
                src={selectedImage ? selectedImage : product?.images[0]}
                alt={product?.title}
              />
              <div className="w-100 flex">
                {product?.images.map((imgUrl) => (
                  <img
                    className="h-16 cursor-pointer"
                    key={imgUrl}
                    src={imgUrl}
                    alt={product?.title}
                    onClick={() => setSelectedImage(imgUrl)}
                  />
                ))}
              </div>
            </article>

            <article className="p-8 bg-blue-50">
              <header className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold">{product?.title}</h2>
                <p>{product?.availabilityStatus}</p>
                <p className="font-bold text-lg">$ {product?.price}</p>
              </header>
              <main className="flex flex-col gap-6 mt-6">
                <p>{product?.description}</p>

                <div className="flex justify-between">
                  <p>Quantity</p>
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                      className="bg-blue-100 text-blue-600 w-7 h-7 rounded-full font-bold cursor-pointer"
                    >
                      −
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => setQuantity((prev) => prev + 1)}
                      className="bg-blue-100 text-blue-600 w-7 h-7 rounded-full font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => console.log('add to cart')}
                  className="w-full rounded-lg bg-gray-800 text-white py-2 mt-2 hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  Add to cart
                </button>
              </main>
            </article>
          </section>

          {product && <ProductReviews reviews={product?.reviews} />}
        </main>
      )}
    </>
  );
};
