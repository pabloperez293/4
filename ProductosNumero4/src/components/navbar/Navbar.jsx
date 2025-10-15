import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">

        <img src={logo} alt="logo" className="logo" />
        <div className="buscador">
        <FontAwesomeIcon icon={faCartPlus} />

          <input type="text" placeholder="Buscar.." className="buscador-input" />
        </div>
      </div>
      <div className="navbar-menu">
        <a href="#">Destacado<FontAwesomeIcon className="star-icon" icon={faStar} /></a>
        <a href="#">Frutas <FontAwesomeIcon icon={faApple} /></a>
        <a href="#">Verduras </a>
        <a href="#"> Congelados  </a>
      </div>
    </div>
  );
};

export default Navbar;
