import React from "react";
import { Link } from "react-router-dom";

const HeaderWithReactRouter = () => {
  return (
    <>
      <div>HeaderWithReactRouter</div>

      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
};

export default HeaderWithReactRouter;
