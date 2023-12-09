import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa"; // Assuming you are using React Icons for the menu, cart, and profile icons

interface Route {
  path: string;
  name: string;
}
interface NavbarProps {
  routes: Route[];
}

const Navbar: React.FC<NavbarProps> = ({ routes }) => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          className="text-white focus:outline-none md:hidden"
          onClick={toggleDrawer}
        >
          {drawerOpen ? <FaTimes /> : <FaBars />}
        </button>
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/cart" className="text-white hover:text-gray-300">
          <FaShoppingCart />
        </Link>
        <Link to="/profile" className="text-white hover:text-gray-300">
          <FaUser />
        </Link>
      </div>
      {drawerOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="p-4 absolute left-0 top-20 h-full flex flex-col items-start space-y-4">
            {routes.map((route, index) => (
              <Link
                key={index}
                to={route.path}
                onClick={toggleDrawer}
                className={`text-white hover:text-gray-300`}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
