import React from "react";
import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const itemList = ({ list }) => {
  return (
    <>
      {list.length ? (
        list.map((prod) => (
          <Link to={`/detail/${prod.id}`} key={prod.id}>
            <Item {...prod} />
          </Link>
        ))
      ) : (
        <p>NO tenemos productos</p>
      )}
    </>
  );
};

export default itemList;
