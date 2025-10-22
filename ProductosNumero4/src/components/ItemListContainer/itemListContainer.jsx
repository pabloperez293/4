import { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";

export const ItemListContainer = () => {
  const [products, setProductos] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
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
      <ItemList list={products} />
    </section>
  );
};

export default ItemListContainer;
