import axios from "axios";

export const getCategories = async (dataDispatch) => {
  try {
    const {data: { categories }} = await axios("/api/categories");
 dataDispatch({ type: "CATEGORY_PRODUCT", payload: categories });
  } catch (error) {
    console.log(error);
  }
};



export const getproductlisting=async (dataDispatch)=>{
    try {
        const {data:{products}}=await axios("/api/products")
        dataDispatch({type:"PRODUCT_LISTING",payload:products})
    } catch (error) {
        console.log(error)
    }
}