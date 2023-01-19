import { removeProduct } from "../actions/productAction";

const deleteProductData = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://moon-ecommerce-part-2-server.vercel.app/product/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(removeProduct(id));
    }
  };
};

export default deleteProductData;
