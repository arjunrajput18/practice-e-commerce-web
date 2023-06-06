export const DataReducer = (state, action) => {
  switch (action.type) {

    case "INITIALIZE_CATEGORY":return{
      ...state,filters:{...state.filters,selectedCategories:action.payload}
    }

    case "SEARCH":return{
      ...state,filters:{...state.filters,searchVal:action.payload}
    }

    case "CATEGORY_PRODUCT":
      return { ...state, category: action.payload };

    case "PRODUCT_LISTING":
      return { ...state, productlisting: action.payload };

    case "PRICE_RANGE":
      return { ...state, filters: { ...state.filters, price: action.payload } };
    case "INCLUDE_OUT_OF_STOCK":
      return {
        ...state,
        filters: {
          ...state.filters,
          includeOutOfStock: !state.filters.includeOutOfStock,
        },
      };
    case "SORT_BY_PRICE":
      return {
        ...state,
        filters: { ...state.filters, bySort: action.payload },
      };

    case "FILTER_BY_CATEGORIES":
      return {
        ...state,
        filters: {
          ...state.filters,
          selectedCategories: state.filters.selectedCategories.includes(
            action.payload
          )
            ? state.filters.selectedCategories.filter(
                (data) => data !== action.payload
              )
            : [...state.filters.selectedCategories, action.payload],
        },
      };

    case "RATING":
      return {
        ...state,
        filters: { ...state.filters, byRating: action.payload },
      };
    case "SIZE":
      return {
        ...state,
        filters: {
          ...state.filters,
          selectedSizes: state.filters.selectedSizes.includes(action.payload)
            ? state.filters.selectedSizes.filter(
                (data) => data !== action.payload
              )
            : [...state.filters.selectedSizes, action.payload],
        },
      };

    case "CLEAR_DATA":
      return {
        ...state,
        filters: {
          price: 2000,
          includeOutOfStock: false,
          bySort: null,
          selectedCategories: [],
          byRating: null,
          selectedSizes: [],
        },
      };
    default:
      return {
        state,
      };
  }
};
