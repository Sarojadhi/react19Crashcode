import React from "react";
import { Link, Outlet } from "react-router-dom";
const CONTACT = () => {
  return (
    <>
      <div>CONTACT</div>
      <p>This is Contact page </p>
      <nav className="flex gap-4 mb-6">
        <Link to="" className="text-blue-500">
          Email
        </Link>
        <Link to="phone" className="text-blue-500">
          Phone
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default CONTACT;
