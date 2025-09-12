import { useAppSelector } from '../../store/hooks';

export const Products = () => {
  const { products } = useAppSelector((state) => state.ecommerce);
  console.log(products);

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ border: '1px solid #ccc', padding: '16px', width: '200px' }}
          >
            <img
              src={product.images[0]}
              alt={product.title}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};
