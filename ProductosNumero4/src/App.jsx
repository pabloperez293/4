import React from "react";  
import "./App.css";
import { Nav } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/itemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import {  CartProvider } from "./context/CartContext/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={ItemDetailContainer} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
