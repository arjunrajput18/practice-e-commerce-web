import React from "react";

export const SingleProduct = ({ product }) => {
  const { itemName, description, rating, category,newPrice,inStock,size } = product;
  return (
    <div>
      <li style={{ border: "solid", margin: "1rem"  ,width:"13rem", }}>
        <p>Namw:{itemName}</p>
        <p>discription:{description}</p>
        <p>price:{newPrice}</p>
        <p>rating :{rating}</p>
        <p>category: {category}</p>
        <p>inStock:{inStock?"true":"false"}</p>
        <p>size :{size}</p>
      </li>
    </div>
  );
};
