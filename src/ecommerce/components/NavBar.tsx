import { NavLink } from 'react-router';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import { startLogout } from '../../store/auth';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useState } from 'react';
import { BurgerButton } from './BurgerBotton';

export const NavBar = () => {
  const dispatch = useAppDispatch();
  const { totalItems } = useAppSelector((state) => state.cart);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onLogout = () => {
    dispatch(startLogout());
  };
  return (
    <>
      <nav className="px-9 py-4 flex items-center justify-between">
        <NavLink to={'/'} className="flex items-center gap-3 cursor-pointer">
          <img src="/icon-shopping-navbar.png" alt="Shopping Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-gray-800">Online store</h1>
        </NavLink>

        <div className="hidden md:flex items-center w-1/3">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="🔍 Search for products..."
              className="w-full bg-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex text-gray-700 font-medium gap-12">
          <div className="relative">
            <NavLink
              to="/cart"
              className="hover:text-blue-600 cursor-pointer flex items-center gap-1"
            >
              <Icon path={mdiCartOutline} size={1} />
            </NavLink>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button className="hidden md:flex hover:text-blue-600 cursor-pointer">My Account</button>
          <button
            className="hidden md:flex hover:text-blue-600 cursor-pointer"
            onClick={() => onLogout()}
          >
            Log Out
          </button>

          <BurgerButton isOpen={isMenuOpen} onToggle={toggleMenu} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-4 space-y-3 border-t border-zinc-700">
          <div className="flex flex-col px-4 gap-3">
            <button className="hover:text-blue-600 cursor-pointer">My Account</button>
            <button className="hover:text-blue-600 cursor-pointer" onClick={() => onLogout()}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
