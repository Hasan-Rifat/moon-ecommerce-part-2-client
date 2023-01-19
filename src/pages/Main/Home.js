import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import {
  removeBrands,
  removeStock,
  toggleBrands,
  toggleStock,
} from "../../redux/actions/filterActions";
import loadProductData from "../../redux/thunk/fetchProduct";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const search = useSelector((state) => state.filter.keyword);

  useEffect(() => {
    dispatch(loadProductData());
  }, [dispatch]);
  const filter = useSelector((state) => state.filter.filter);
  const { stock, brands } = filter;

  let allProducts;

  if (products.length) {
    allProducts = products
      .filter((product) => {
        if (search) {
          return product.model.toLowerCase().includes(search.toLowerCase());
        }
        return product;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }
  if (products.length && (stock || brands.length)) {
    allProducts = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        }
        return product;
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .map((product) => <ProductCard key={product.model} product={product} />);
  }
  const activeClass = "text-white  bg-indigo-500 border-white";

  const clearFilter = () => {
    dispatch(removeStock());
    dispatch(removeBrands());
  };

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          onClick={clearFilter}
          className={`border px-3 py-2 rounded-full font-semibold  ${
            stock ? null : activeClass
          } `}
        >
          clearFilter
        </button>
        <button
          onClick={() => dispatch(toggleStock())}
          className={`border px-3 py-2 rounded-full font-semibold  ${
            stock ? activeClass : null
          } `}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleBrands("amd"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("amd") ? activeClass : null
          }}`}
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(toggleBrands("intel"))}
          className={`border px-3 py-2 rounded-full font-semibold  ${
            brands.includes("intel") ? activeClass : null
          }`}
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {allProducts}
      </div>
    </div>
  );
};

export default Home;
