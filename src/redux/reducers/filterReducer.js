import {
  REMOVE_BRANDS,
  REMOVE_STOCK,
  SEARCH_PRODUCT,
  TOGGLE_BRANDS,
  TOGGLE_STOCK,
} from "../actionTypes/actionTypes";

const initialState = {
  filter: {
    brands: [],
    stock: false,
  },
  keyword: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_BRANDS:
      return {
        ...state,
        filter: {
          ...state.filter,
          brands: [],
        },
      };
    case REMOVE_STOCK:
      return {
        ...state,
        filter: {
          ...state.filter,
          stock: false,
        },
      };

    case SEARCH_PRODUCT:
      return {
        ...state,
        keyword: action.payload,
      };
    case TOGGLE_BRANDS:
      if (!state.filter.brands.includes(action.payload)) {
        return {
          ...state,
          filter: {
            ...state.filter,
            brands: [...state.filter.brands, action.payload],
          },
        };
      } else {
        return {
          ...state,
          filter: {
            ...state.filter,
            brands: state.filter.brands.filter(
              (brand) => brand !== action.payload
            ),
          },
        };
      }

    case TOGGLE_STOCK:
      return {
        ...state,
        filter: {
          ...state.filter,
          stock: !state.filter.stock,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
