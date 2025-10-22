import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={ItemDetailContainer} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
