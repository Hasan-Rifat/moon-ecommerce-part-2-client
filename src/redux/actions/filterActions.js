import {
  REMOVE_BRANDS,
  REMOVE_STOCK,
  SEARCH_PRODUCT,
  TOGGLE_BRANDS,
  TOGGLE_STOCK,
} from "../actionTypes/actionTypes";

export const toggleBrands = (brand) => {
  return {
    type: TOGGLE_BRANDS,
    payload: brand,
  };
};
export const toggleStock = () => {
  return {
    type: TOGGLE_STOCK,
  };
};
export const searchProduct = (value) => {
  return {
    type: SEARCH_PRODUCT,
    payload: value,
  };
};
export const removeStock = () => {
  return {
    type: REMOVE_STOCK,
  };
};
export const removeBrands = () => {
  return {
    type: REMOVE_BRANDS,
  };
};
