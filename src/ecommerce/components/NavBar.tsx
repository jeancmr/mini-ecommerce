import { NavLink } from 'react-router';
import { startLogout } from '../../store/auth';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const NavBar = () => {
  const dispatch = useAppDispatch();
  const { totalItems } = useAppSelector((state) => state.cart);

  const onLogout = () => {
    dispatch(startLogout());
  };
  return (
    <header className="w-full bg-amber-100">
      <nav className="max-w-7xl mx-auto  px-6 py-3 flex items-center justify-between">
        <NavLink to={'/'} className="flex items-center gap-3 cursor-pointer px-4">
          <img src="/icon-shopping-navbar.png" alt="Shopping Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-gray-800">Online store</h1>
        </NavLink>

        <div className="flex items-center w-1/3">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="🔍 Search for products..."
              className="w-full border border-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex text-gray-700 font-medium gap-12">
          <button className="hover:text-blue-600 cursor-pointer">My Account</button>
          <div className="relative">
            <button className="hover:text-blue-600 cursor-pointer">My Cart</button>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button className="hover:text-blue-600 cursor-pointer" onClick={() => onLogout()}>
            Log Out
          </button>
        </div>
      </nav>
    </header>
  );
};
