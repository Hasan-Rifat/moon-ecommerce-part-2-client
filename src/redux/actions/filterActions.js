import { TOGGLE_BRANDS, TOGGLE_STOCK } from "../actionTypes/actionTypes";

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
