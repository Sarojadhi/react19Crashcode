import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = user?.isAuthenticated;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload(); // refresh App.jsx state
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-xl font-bold">Saroj</h1>

          {/* Hamburger Button */}
          <div
            className="md:hidden flex flex-col space-y-1 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block w-6 h-1 bg-black transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>

            <span
              className={`block w-6 h-1 bg-black transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`block w-6 h-1 bg-black transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-lg font-medium items-center">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            {isLoggedIn && (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 px-3 py-1 rounded text-white"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md transform transition-transform duration-300 md:hidden ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="pt-20 px-6 text-lg font-medium">
            <li className="border-b py-3">
              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            </li>
            <li className="border-b py-3">
              <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            </li>
            <li className="border-b py-3">
              <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            </li>
            <li className="border-b py-3">
              <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </li>
            {isLoggedIn && (
              <li className="py-3">
                <button
                  onClick={handleLogout}
                  className="bg-red-600 px-3 py-1 rounded text-white w-full text-left"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
