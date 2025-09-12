import { startCategories } from '../../store/ecommerce';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { NavLink } from 'react-router';

export const Categories = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.ecommerce.categories);

  useEffect(() => {
    dispatch(startCategories());
  }, []);
  return (
    <section className="bg-amber-50">
      <div className="mt-16 p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Explore categories</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <li
              key={category}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            >
              <NavLink to={`/category/${category}`}>
                <p className="text-lg font-medium">{category}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
