import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Route {
  path: string;
  name: string;
}
interface NavbarProps {
  routes: Route[];
}

const Navbar: React.FC<NavbarProps> = ({ routes }) => {
  const location = useLocation();
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex flex-col md:flex-row md:items-center">
        {routes.map((route, index) => (
          <li
            key={index}
            className={`my-2 md:mx-6 md:my-0 ${
              location.pathname === route.path ? "bg-gray-600" : ""
            }`}
          >
            <Link to={route.path} className="text-white hover:text-gray-300">
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    // <nav className="bg-gray-800 p-4 flex items-center justify-between">
    //   <div className="flex items-center space-x-4">
    //     <Link to="/" className="text-white hover:text-gray-300">Home</Link>
    //   </div>
    //   <div className="flex items-center space-x-4">
    //     <Link to="/cart" className="text-white hover:text-gray-300"><FaShoppingCart /></Link>
    //     <Link to="/profile" className="text-white hover:text-gray-300"><FaUser /></Link>
    //   </div>
    // </nav>
  );
};

export default Navbar;
