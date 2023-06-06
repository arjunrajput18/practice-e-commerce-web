import React from "react";
import { DataState } from "../../Context/DataContext";

export const Filters = () => {
  const {
    dataState: {
      filters: {
        price,
        includeOutOfStock,
        bySort,
        selectedCategories,
        byRating,
        selectedSizes,
      },
    },
    dataDispatch,
  } = DataState();

  return (
    <div style={{ width: "9rem" }}>
      <h1>Filters</h1>
      <button onClick={() => dataDispatch({ type: "CLEAR_DATA" })}>
        Clear
      </button>

      <div className="priceRange">
        <label>
          Price Range:
          <span>
            <input
              type="range"
              onChange={(e) =>
                dataDispatch({ type: "PRICE_RANGE", payload: e.target.value })
              }
              min={500}
              max={2000}
              step={500}
              value={price}
            />
            less then {price}
          </span>
        </label>
      </div>
      <div className="includeOutOfStock" style={{ paddingTop: "3rem" }}>
        <input
          type="checkbox"
          onChange={() => dataDispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
          checked={includeOutOfStock}
        />
        <label>Include Out of stock</label>
      </div>
      <h4>Sort by Price</h4>
      <div className="sortByPrice">
        <label>
          <input
            type="radio"
            name="sort1"
            onChange={() =>
              dataDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
            }
            value={"lowToHigh"}
            checked={bySort==="lowToHigh"}
          />
          Low to High price
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="sort1"
            onChange={() =>
              dataDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
            }
            value={"highToLow"}
            checked={bySort==="highToLow"}
          />
          High to low price
        </label>
      </div>
      <div style={{ paddingTop: "3rem" }}>
        {["Men", "Women", "Accessories"].map((category) => (
          <label style={{ display: "block" }}>
            <input
              type="checkbox"
              onChange={() =>
                dataDispatch({
                  type: "FILTER_BY_CATEGORIES",
                  payload: category,
                })
              }
              checked={selectedCategories.includes(category)}
            />
            {category}
          </label>
        ))}
      </div>
      <div style={{ paddingTop: "3rem" }}>
        {["1", "2", "3", "4"].map((num) => (
          <label style={{ display: "block" }}>
            <input
              type="radio"
              name={"rating"}
              onChange={() => dataDispatch({ type: "RATING", payload: num })}
              checked={byRating === num}
            />
            {num} and above
          </label>
        ))}
      </div>

      <div style={{ paddingTop: "3rem" }}>
        {["S", "M", "L", "XL", "XXL"].map((data) => (
          <label>
            <input
              type="checkbox"
              onChange={() => dataDispatch({ type: "SIZE", payload: data })}
              checked={selectedSizes.includes(data)}
            />
            {data}
          </label>
        ))}
      </div>
    </div>
  );
};
