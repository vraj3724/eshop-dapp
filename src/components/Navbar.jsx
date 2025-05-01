import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">eShop DApp</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/buy" className="hover:text-gray-300">Buy Product</Link>
          </li>
          <li>
            <Link to="/add" className="hover:text-gray-300">Add Product</Link>
          </li>
          <li>
            <Link to="/my-orders" className="hover:text-gray-300">My Orders"</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;