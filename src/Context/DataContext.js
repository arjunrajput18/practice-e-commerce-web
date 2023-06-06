import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../Reducers/DataReducer";
import { getCategories, getproductlisting } from "../Services/DataServices";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(DataReducer, {
    category: [],
    productlisting: [],
    filters: {
      searchVal:"",
      price: 2000,
      includeOutOfStock: false,
      bySort: null,
      selectedCategories: [],
      byRating:null,
      selectedSizes:[]
    },
   
  });

  useEffect(() => {
    getCategories(dataDispatch);
    getproductlisting(dataDispatch);
  }, []);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const DataState = () => useContext(DataContext);
