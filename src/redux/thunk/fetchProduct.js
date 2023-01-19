import { loadProduct } from "../actions/productAction";

export const loadProductData = () => {
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://moon-ecommerce-part-2-server.vercel.app/products"
    );
    const data = await res.json();
    if (data.data.length) {
      dispatch(loadProduct(data.data));
    }
  };
};

export default loadProductData;
