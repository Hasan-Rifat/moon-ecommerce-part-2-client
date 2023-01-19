import { updateProduct } from "../actions/productAction";

const updateProductData = (product, id) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://moon-ecommerce-part-2-server.vercel.app/product/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(updateProduct(product));
    }
  };
};

export default updateProductData;
