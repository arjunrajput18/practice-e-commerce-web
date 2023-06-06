import React from "react";
import { DataState } from "../../Context/DataContext";
import { SingleProduct } from "../../Components/SingleProduct/SingleProduct";
import { Filters } from "../../Components/Filters/Filters";

export const Productlisting = () => {
  const {
    dataState: {
      productlisting,
      filters: {
        price,
        includeOutOfStock,
        bySort,
        selectedCategories,
        byRating,
        selectedSizes,searchVal
      },
    },
    dataDispatch
  } = DataState();

  const transformed = () => {
    let filteredData = [...productlisting];

    if(searchVal){

      filteredData=filteredData.filter(({itemName})=>itemName.toLowerCase().includes(searchVal.toLowerCase()))
 
    }

    if (price) {
      filteredData = filteredData.filter(({ newPrice }) => newPrice < price);
    }

    if (!includeOutOfStock) {
      filteredData = filteredData.filter(({ inStock }) => inStock);

    }
    if (bySort) {
      filteredData = filteredData.sort((a, b) =>
        bySort === "lowToHigh"
          ? a.newPrice - b.newPrice
          : b.newPrice - a.newPrice
      );

    }
    if (selectedCategories.length > 0) {
      // filteredData=filteredData.filter((item)=>selectedCategories.some((elem)=>item[elem]))
      filteredData = filteredData.filter((item) =>
        selectedCategories.some((elem) => {
          return item.category === elem;
        })
      );
    }
if(byRating){
  filteredData=filteredData.filter(({rating})=>rating>byRating)
}

if(selectedSizes.length>0){
  filteredData=filteredData.filter((item)=>selectedSizes.some((elem)=>item.size===elem))
}

    return filteredData;
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div style={{ border: "solid" }}>
      
      {/* <input type="text" placeholder="search here" onChange={(e)=>{dataDispatch({type:"SEARCH",payload:e.target.value})}}/> */}
        <Filters />
      </div>
      <p>{transformed().length}</p>
      <div>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            width: "fit-content",
            flexWrap: "wrap",
            marginLeft: "15rem",
          }}
        >
          {transformed().map((product) => (
            <SingleProduct key={product._id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};
