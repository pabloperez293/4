import React, { useState } from 'react'

const productos = [
  { id: 1, name: 'fruta 1', price: 100 },
  { id: 2, name: 'fruta 2', price: 200 },
  { id: 3, name: 'fruta 3', price: 300 },
];

const ProductList = () => {
    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    }
    return (
    <div> 
        <h1>Lista de Productos - Disponibles </h1>
        <ul>
            {productos.map(producto => (
                <li key={producto.id}>
                    {producto.name} - ${producto.price}
                <button onClick={() => agregarCarrito (producto)}>
                    Sumar al carrito
                </button>
                </li>
            ))}
        </ul>


        <h3> Compras ({carrito.length} producto)</h3>
        <ul>
            {carrito.map((item, index) => (
                <li key={index}>
                    {item.name} - ${item.price}
                </li>
            ))}
        </ul>
    </div>
  );
}

export default ProductList