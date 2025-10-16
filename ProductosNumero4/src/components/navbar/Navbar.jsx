import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faLemon } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar =  ({ cantidadCarrito }) => {
  return (
    <div className="navbar">
      <div className="navbar-container">

        <img src={logo} alt="logo" className="logo" />
        <div className="buscador">
        <FontAwesomeIcon icon={faCartPlus} />
            {cantidadCarrito > 0 && (
              <span className="carrito-icono carrito-cantidad">{cantidadCarrito}</span>
            )}
          <input type="text" placeholder="Buscar.." className="buscador-input" />
        </div>
      </div>
      <div className="navbar-menu">
        <a href="#">Destacado<FontAwesomeIcon className="star-icon" icon={faStar} /></a>
        <a href="#">Frutas <FontAwesomeIcon className="star-icon1" icon={faApple} /></a>
        <a href="#">Verduras <FontAwesomeIcon className="star-icon2" icon={faLemon} /></a>
        <a href="#"> Congelados <FontAwesomeIcon className="star-icon3" icon={faBasketShopping} />  </a>
      </div>
    </div>
  );
};

export default Navbar;
