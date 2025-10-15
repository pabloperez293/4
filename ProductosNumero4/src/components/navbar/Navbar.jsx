import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src=".../assets/react.svg" alt="logo" className="logo" />

      <div className="buscador">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Buscar.." />
      </div>

      <div className="navbar-menu">
        <a href="#">Destacado</a>
        <a href="#">Frutas</a>
        <a href="#">Verduras</a>
        <a href="#"> Congelados</a>
      </div>
    </div>
  );
};

export default Navbar;
