import React from "react";

export const itemList = ({ list }) => {
  return (
    <>
      {list.length ? (
        list.map((prod) => (
          <Link to={`/detail/${prod.id}`} key={prod.id}></Link>
        ))
      ) : (
        <p>NO tenemos productos</p>
      )}
    </>
  );
};

export default itemList;
