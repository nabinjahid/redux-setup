import { ModeToggle } from "@/components/mode-toggler";
import React from "react";
import { Link } from "react-router";


const Navbar: React.FC = () => {
  return (
    <nav className=" shadow px-6 py-4 flex justify-between items-center">
      {/* Logo or Brand */}
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">MyLogo</Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-500 transition">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-blue-500 transition">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-500 transition">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/tasks" className="hover:text-blue-500 transition">
            Tasks
          </Link>
        </li>
        <div>
          <ModeToggle></ModeToggle>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
