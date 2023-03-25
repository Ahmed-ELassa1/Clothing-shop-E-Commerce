import React from "react";
import productsDisplay from "./productsDisplay.module.css";
import HomeProducts from "../../componants/homeProducts/HomeProducts";
import Navbar from "./../../componants/navbar/Navbar";
import Footer from "./../../componants/footer/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from 'react-redux';

const ProductList = () => {
  const { categorie } = useParams();
  let { productList } = useSelector((state) => state.productListSlice);

  let [filters, setFilters] = useState({});
  let [sort, setSort] = useState("newest");

  function handleFiltering(e) {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  }

  function handleSorting(e) {
    setSort(e.target.value);
  }

  return (
    <>
      <Navbar />

      <div className="conatiner py-4 px-4">
        {/* product title*/}
        <div className="text-start text-capitalize">
          <p className="text-capitalize fw-bold fs-3 mb-5">{productList[0]?.category.name}</p>
        </div>

        {/* filtering and sorting*/}

        <div className={productsDisplay.display_options}>
          {/* <div className="d-flex">
            <h4>filter products: </h4>
            <select
              name="color"
              onChange={handleFiltering}
              className={productsDisplay.products_filtering}
            >
              <option disabled > color</option>
              <option value="white"> white</option>
              <option value="black"> black</option>
              <option value="red"> red</option>
              <option value="blue"> blue</option>
              <option value="yellow"> yellow</option>
            </select>
            <select
            name="size"
            onChange={handleFiltering}
            className={productsDisplay.products_sizing}
            >
              <option disabled> size</option>
              <option value="xs"> xs</option>
              <option value="s"> s</option>
              <option value="m"> m</option>
              <option value="xl"> xl</option>
            </select>
          </div> */}

          <div className="d-flex">
            <h4>sort products: </h4>
            <select
              onChange={(e)=>handleSorting(e)}
              id="sort"
              className={productsDisplay.products_sizing}
            >
              <option value="newest"> newest</option>
              <option value="price-low"> price (asc)</option>
              <option value="price-high"> price (desc)</option>
            </select>
          </div>
        </div>

        {/* display products*/}

        <div className="my-5">
          <HomeProducts />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ProductList;
