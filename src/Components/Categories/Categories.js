import React from "react";
import { DataState } from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";
export const Categories = () => {
  const {
    dataState: { category },
    dataDispatch,
  } = DataState();

  const navigate = useNavigate();
  const handlecategory = (categoryName) => {
    navigate("/productlisting");
    dataDispatch({ type: "FILTER_BY_CATEGORIES", payload: categoryName });
  };

  return (
    <div>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          marginLeft: "25rem",
          marginTop: "8rem",
        }}
      >
        {category?.map(({ _id, categoryName, description }) => (
          <li
            key={_id}
            style={{ border: "solid", margin: "1rem", width: "10rem" }}
          >
            <div onClick={() => handlecategory(categoryName)} style={{cursor:"pointer"}}>
              <p>{categoryName}</p>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
