import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/destacado">Destacados</Link>
        </li>
        <li>
          <Link to="/category/mayorista">Mayorista</Link>
        </li>
        <li>
          <Link to="/category/minorista">Minorista</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
