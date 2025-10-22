import { useState, useEffect } from "react";

export const itemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Tenemos un problema en los prodcutos");
        }
        return res.json();
      })
      .then((data) => setProductos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      <h1>Distribuidora</h1>
      <ItemList list={productos} />
    </section>
  );
};

export default itemListContainer;
