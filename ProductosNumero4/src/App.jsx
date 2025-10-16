import React, { useState } from "react";
import ProductList from "./components/productList/ProductList";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div className="container">
      <Navbar cantidadCarrito={carrito.length} />
      <ProductList agregarCarrito={agregarCarrito} carrito={carrito} />
    </div>
  );
}

export default App;
