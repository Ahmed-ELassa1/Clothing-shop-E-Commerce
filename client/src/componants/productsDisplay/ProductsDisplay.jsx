import React from "react";
import productsDisplay from "./productsDisplay.module.css";
import HomeProducts from "./../homeProducts/HomeProducts";
const ProductsDisplay = () => {
  return (
    <>
      <div className="conatiner py-4 px-4">
        <div className="text-start text-capitalize">
          <p className="text-capitalize fw-bold fs-3 mb-5">dresses</p>
        </div>

        <div className={productsDisplay.display_options}>
          <div className="d-flex">
            <h4>filter products: </h4>
            <select
              name="color"
              id="color"
              className={productsDisplay.products_filtering}
            >
              <option> color</option>
              <option value="white"> white</option>
              <option value="black"> black</option>
              <option value="red"> red</option>
              <option value="blue"> blue</option>
              <option value="yellow"> yellow</option>
            </select>
            <select
              name="size"
              id="size"
              className={productsDisplay.products_sizing}
            >
              <option value=""> siza</option>
              <option value="xs"> xs</option>
              <option value="s"> s</option>
              <option value="m"> m</option>
              <option value="xl"> xl</option>
            </select>
          </div>

          <div className="d-flex">
            <h4>sort products: </h4>
            <select
              name="size"
              id="size"
              className={productsDisplay.products_sizing}
            >
              <option value=""> newest</option>
              <option value="price-low"> price (asc)</option>
              <option value="price-high"> price (desc)</option>
            </select>
          </div>
        </div>

        <div className="my-5">
          <HomeProducts />
        </div>
      </div>
    </>
  );
};
export default ProductsDisplay;
